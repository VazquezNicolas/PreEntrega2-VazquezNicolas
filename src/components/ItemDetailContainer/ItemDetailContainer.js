import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({greeting}) => {
    const[product, setProduct] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=> {
            getProductById(1).then(response => {
                setProduct(response)
            }).finally(()=> {
                setLoading(false)
            })
    }, [])
        
    if(loading){
    return (<h1>Cargando los productos...</h1>)
    }

    return(
        <div>
            <h1>{greeting}</h1>
            { <ItemDetail product = {product}/>}
        </div>
    )
}

export default ItemDetailContainer