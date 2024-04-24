import '../styles/header.scss'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <div className="header">
            <NavLink to={`/`}><img src={logo} alt="Logo Kasa" /></NavLink>
            <div className="header__menu">
                <div><NavLink to={`/`}>Accueil</NavLink></div>
                <div><NavLink to={`/apropos`}>A Propos</NavLink></div>
            </div>
        </div>
    )
}

export default Header;