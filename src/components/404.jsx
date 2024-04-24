import '../styles/404.scss'
import { NavLink } from 'react-router-dom';


function Composant404() {

    return <>
        <div className="class404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <p><NavLink to={`/`}>Retourner sur la page d'accueil</NavLink></p>
        </div>
    </>
}

export default Composant404;