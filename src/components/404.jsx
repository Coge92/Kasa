import '../styles/404.scss'
import Accueil from '../App'


function Composant404() {

    return <>
        <div className="class404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <p onClick={Accueil}>retourner sur la page d'accueil</p>
        </div>
    </>
}

export default Composant404;