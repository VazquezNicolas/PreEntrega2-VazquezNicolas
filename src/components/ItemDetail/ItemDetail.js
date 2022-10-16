import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, img, category, precio, stock}) => {  
  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, nombre, precio, quantity
    }
    console.log(productToAdd)
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
            <ItemCount onAdd={handleOnAdd} stock={stock} />
        </footer>
    </article>
)
}
export default ItemDetail

