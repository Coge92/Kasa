import '../styles/apropos.scss'
import aproposcover from '../assets/cover_a_propos.png'
/* import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome' */


function APropos() {

    return <>
    
        <div className="apropos">

            <div className="apropos__cover" style={{backgroundImage: `url(${aproposcover})`}}>

            </div>

            <div className="companyvalues">
                {/* <div className='companyvalues__item'><p>Fiabilité</p><FontAwesomeIcon icon={faChevronUp} /></div> */}
                <div className='companyvalues__item'><p>Respect</p><i class="fa-solid fa-chevron-up"></i></div>
                <div className='companyvalues__item'><p>Service</p><i class="fa-solid fa-chevron-up"></i></div>
                <div className='companyvalues__item'><p>Sécurité</p><i class="fa-solid fa-chevron-up"></i></div>
            </div>

        </div>

    </>
}

export default APropos;