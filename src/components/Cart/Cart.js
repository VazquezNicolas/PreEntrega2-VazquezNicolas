import React from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)
    return (
               <div>
                     <h1>CART</h1>
                    {
                        cart.map(prod => (
                            <div>
                                 <img src={prod.img}></img> - {prod.nombre} - cantidad: {prod.quantity}
                                <button onClick={() => removeItem(prod.id)}>remover</button>
                            </div>
                        ))
                    }
        
                    <div>
                        Precio total: {total}
                    </div>        
                    <button onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link to='/checkout' className='Option'>Checkout</Link>
                </div>
    )
}
export default Cart