import './NavbarJSX.css'
import favicon from './assets/img/favicon3.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return (
        <nav className="NavBar ">
            <NavLink to ='NavBar'>
            <h1>Los Herederos de Baden Powell</h1>
            </NavLink>

            <div className=" container centrar ">
                <img className="favIcon col-1" src={favicon}/>
                <div className="col-10">
                <NavLink to={'/category/celular'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar