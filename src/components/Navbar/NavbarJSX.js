import './NavbarJSX.css'
import favicon from './assets/img/favicon3.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return (
        <nav className="NavBar ">
            <NavLink to ='/'>
            <img className="favIcon col-1" src={favicon}/>
            </NavLink>
            <div className=" Categories ">
            <h1 className='centrar2'>LDHBP</h1>
                <div className="col-10">
                <NavLink to={'/category/pasapañuelos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pasapañuelos</NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar