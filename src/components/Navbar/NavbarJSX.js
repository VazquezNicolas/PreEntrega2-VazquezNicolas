import './NavbarJSX.css'
import favicon from './assets/img/favicon3.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return (
        <div>
        <nav className="NavBar ">
            <NavLink to ='/'>
                <div className='container centrar3'>
            <img className="favIcon " src={favicon}/>
             <h1 className='centrar2'>LDHBP</h1>
             </div>
            </NavLink>
            <div className=" Categories ">
                <div className="boton centrar2">
                <NavLink to={'/category/pasapañuelos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pasapañuelos</NavLink>
                <NavLink to={'/category/mates'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink>

                </div>
            </div>
            <CartWidget/>
        </nav>
        </div>
    )
}
export default Navbar