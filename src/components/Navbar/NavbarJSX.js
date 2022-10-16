import './NavbarJSX.css'
import favicon from './assets/img/favicon3.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return (
        <div className='container col-12'>
        <nav className="NavBar ">
            <NavLink to ='/'>
            <img className="favIcon " src={favicon}/>
            </NavLink>
            <div className=" Categories ">
            <h1 className='centrar2'>LDHBP</h1>
                <div className="boton">
                <NavLink to={'/category/pasapañuelos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pasapañuelos</NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
        </div>
    )
}
export default Navbar