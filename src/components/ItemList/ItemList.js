import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products, setPage }) => {

    return (
        <div className=' '>
        <div conClick={()=> console.log("hice click en itemList")}>
            { products.map( prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
        </div>
        </div>
    )
}

export default ItemList