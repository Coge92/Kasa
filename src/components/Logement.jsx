import '../styles/logement.scss'

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import CollapseButton from '../components/CollapseButton.jsx'
import listeLogement from '../datas/logements.json'
import Carrousel from './Carrousel.jsx';


function Logement() {

    const {id} = useParams()
    const logement = listeLogement[id]
    let starRank = parseInt(logement.rating)
    let shiningStars = []
    let starsOff = []

    displayStarsRating()
    function displayStarsRating() {

        for( let i = 0 ; i < starRank ; i++) {
            shiningStars.push(i)  
        }
        return shiningStars
    } 

    displayStarsOff()
    function displayStarsOff() {

        for (let i = 0 ; i < 5-starRank  ; i++) {
            starsOff.push(i)
        }
        return starsOff
        
    }

    let namesSplited =[]
    splitHostNames()
    function splitHostNames() {

        let name = logement.host.name
        namesSplited = name.split(" ");
    }

    return <>
        <main className='logement'>
            <Carrousel covers={logement.pictures}></Carrousel>
            <section className='leading'>
                <div className="leftside">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <div className="tags__item" key={index}>{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="rightside">
                    <div className="owner">
                        <div className='owner__names'>{namesSplited.map((name, index) => (
                            <p key={index}>{name}</p>
                        ))}</div> 
                        <img src={logement.host.picture} alt="Propriétaire"/>
                    </div>
                    <div className="starscontainer">
                        {shiningStars.map((star, index) => (
                            <FontAwesomeIcon className='star' icon={faStar} key={index}></FontAwesomeIcon>
                        ))}
                        {starsOff.map((star, index) => (
                            <FontAwesomeIcon className='star--off' icon={faStar} key={index}></FontAwesomeIcon>
                        ))}
                        
                            
                    
                    </div>      
                </div>
            </section>
            <section className='details'>
                <div className="description">
                    <CollapseButton 
                        title="Description"
                        content={logement.description}
                        width={"100%"}
                        >
                    </CollapseButton>
                </div>
                <div className="equipments">

                    <CollapseButton 
                        title="Équipements"
                        content={logement.equipments.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))}
                        width={"100%"}
                        >
                    </CollapseButton>
                </div>
            </section>
        </main> 
    </>
}

export default Logement;