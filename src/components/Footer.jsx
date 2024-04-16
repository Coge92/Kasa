import '../styles/footer.scss'
import logoWhite from '../assets/logo_white.png'

function Footer() {

    return <>
    <div className="footer">
        <img src={logoWhite} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>

    </>
}

export default Footer;