import cart from './assets/cart2'
import './cartWidget.css'

const CartWidget = () => {
    return (
        <div to='/cart' className='CartWidget'>
            <img className="CartImg col-3" src={cart} alt='cart'/>
            {0}
        </div>
    )
}

export default CartWidget