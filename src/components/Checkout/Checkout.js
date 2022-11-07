import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import {db} from "../../services/firebase/index"
import { useNavigate } from "react-router-dom"
import Form from "../Form/Form"
import Swal from "sweetalert2";


const Checkout = () =>{
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const [personalData, setPersonalData] = useState(false)

    const [datosComprador, setDatosComprador] = useState({})

    const completarDatos = (name, surname, address, phone, email) => {
        setDatosComprador({name, surname, address, phone, email})
        setPersonalData(true)
    }

    const createOrder = async () => {
        try {
        const objOrder = {
            buyer: datosComprador,
            items: cart,
            total: total
        }
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []
    
        const productsRef = collection (db, 'products')

        const productAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const {docs} = productAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity
        
            if (stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
            }     
        })
        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            clearCart()

            setTimeout(() => {
                navigate('/')
            }, 3000)

            alert(`el id de su orden es:, ${orderAdded.id}`)
        }else{ alert(`Hay productos que estan fuera de stock`)}

    }catch (error) {
        console.log(error)
    }finally {
        setLoading(false)
    }
}
if(loading) {
    return <h1>Se esta generando su orden...</h1>
}
        return (
            <div>
                <h1>Checkout</h1>
                <Form completarDatos={completarDatos} /> 
            { personalData
            ?<button onClick={()=> createOrder()}>Comprar</button>
            :""}
                <button onClick={createOrder}>Generar orden</button>
            </div>
        )
}

export default Checkout