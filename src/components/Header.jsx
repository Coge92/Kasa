import '../styles/header.scss'
import logo from '../assets/logo.png'


function Header() {

    return (
        <div className="header">
            <img src={logo} alt="Logo Kasa" />
            <div className="header__menu">
                <div><a href='/'>Accueil</a></div>
                <div><a href='../pages/page404.jsx'>A Propos</a></div>
            </div>
        </div>
    )
}

export default Header;