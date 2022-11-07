import './ItemList.css'
import Item from "../Item/Item"
import { memo } from 'react'

const ItemList = ({ products, setPage }) => {

    return (
        <div className=' '>
        <div>
            { products.map( prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
        </div>
        </div>
    )
}

export default memo(ItemList)