import cart from './assets/cart.svg'
import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity} = useContext (CartContext)
    const navigate = useNavigate()

    return (
        <button to='/cart' className='CartWidget' onClick={() => navigate('/cart')}>
            <img className="CartImg col-3" src={cart} alt='cart'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget