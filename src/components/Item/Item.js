import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, img, nombre, precio}) => {

    return (
        <article className="CardItem container ">
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
                    Precio: ${precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <button className='Button'>
               <Link to={`/detail/${id}`}>Ver detalle</Link>
               </button>
            </footer>
        </article>
        
    )
}
export default Item