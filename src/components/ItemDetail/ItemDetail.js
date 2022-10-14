import './ItemDetail'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, img, nombre, precio, stock, category}) => {  
  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, nombre, precio, quantity
    }
    console.log(productToAdd)
  }
  
  return (
    <article >
        <header >
            <h2 >
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} />
        </picture>
        <section>
            <p>
                Categoria: {category}
            </p>
            <p >
                Precio: {precio}
            </p>
        </section>           
        <footer>
            <ItemCount onAdd={handleOnAdd} stock={stock} />
        </footer>
    </article>
)
}
export default ItemDetail

