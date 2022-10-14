import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, img, nombre, precio}) => {

    return (
        <article>
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
                    Precio: ${precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item