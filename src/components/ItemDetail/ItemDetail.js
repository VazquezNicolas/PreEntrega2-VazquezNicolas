import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, nombre, img, category, precio, stock}) => {  
    const {addItem} = useContext(CartContext) 

  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, nombre, precio, quantity, img
    }
    addItem(productToAdd,quantity)
    alert("Se agrego al carrito")
  }
  
  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Precio: {precio}
            </p><p className="Info">
                Stock: {stock}
            </p>
        </section>           
        <footer className='ItemFooter'>
            {/* {quantity > 0 ? (<Link to = '/cart'><button className='Button'>Ir al carrito</button></Link>) : <ItemCount onAdd={handleOnAdd} stock={stock} />} */}
            <ItemCount onAdd={handleOnAdd} stock={stock} />
        </footer>
    </article>
)
}
export default ItemDetail

