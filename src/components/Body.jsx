import '../styles/body.scss'
import cover from '../assets/background-cover-body.png'
import listeLogement from '../datas/logements.json'
import { NavLink } from 'react-router-dom'

function Body() {

    return <>

        <div className="body">
            <div className="body__cover" style={{ backgroundImage: `url(${cover})` }}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div className="gallery">
                {listeLogement.map((logement, index) => (
                    <NavLink to={`logement/${index}`} key={`${logement.id}-${index}`}>
                    <div 
                        className="gallery__card"
                        key={`${logement.id}`} 
                        style={{backgroundImage: `url(${logement.cover})`}}>
                            <h3>{`${logement.title}`}</h3>
                    </div>
                    </NavLink>
                ))}
            </div>

        </div>
    </>
}

export default Body;