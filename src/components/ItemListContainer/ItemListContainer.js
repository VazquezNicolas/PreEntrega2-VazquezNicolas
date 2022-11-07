import './ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firestore/products'

const ItemListContainer = ({greeting}) => {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(()=> {
        setLoading(true)

        getProducts(categoryId)
        .then(products => {
            setProducts(products)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=> setLoading(false))
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return(
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            { <ItemList products = {products}/>}
        </div>
    )
}

export default ItemListContainer