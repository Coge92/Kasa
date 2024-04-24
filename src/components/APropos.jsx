import '../styles/apropos.scss'
import aproposcover from '../assets/cover_a_propos.png'
import CollapseButton from './CollapseButton.jsx';


function APropos() {

    return <>
    
        <div className="apropos">

            <div className="apropos__cover" style={{backgroundImage: `url(${aproposcover})`}}>

            </div>

            <div className="companyvalues">
                <CollapseButton 
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes"
                    width={80}
                    >
                </CollapseButton>
              
                <CollapseButton 
                    title="Respect"
                    content="La bienveilance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entaînera une exclusion de notre plateforme"
                    width={80}
                    >
                </CollapseButton>

                <CollapseButton 
                    title="Service"
                    content="La bienveilance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entaînera une exclusion de notre plateforme"
                    width={80}
                    >
                </CollapseButton>

                <CollapseButton 
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respéctés. Nous organisons également des ateliers sur la sécurité domestique par nos hôtes"
                    width={80}
                    >
                </CollapseButton>
        
            </div>

        </div>

    </>
}

export default APropos;