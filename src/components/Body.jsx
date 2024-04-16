import '../styles/body.scss'
import cover from '../assets/background-cover-body.png'
import listeLogement from '../datas/logements.json'

function Body() {

    return <>

        <div className="body">
            <div className="body__cover" style={{ backgroundImage: `url(${cover})` }}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div className="gallery">
                {listeLogement.map((logement) => (
                    <div 
                        className="gallery__card" 
                        key={`${logement.id}`} 
                        style={{backgroundImage: `url(${logement.cover})`}}>
                            <h3>{`${logement.title}`}</h3>
                    </div>
                ))}
            </div>

        </div>
    </>
}

export default Body;