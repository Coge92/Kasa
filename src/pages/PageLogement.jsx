import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Logement from '../components/Logement.jsx'

import { useParams } from 'react-router-dom';
import listeLogement from '../datas/logements.json'
import Composant404 from '../components/404.jsx'


function PageLogement() {

  const {id} = useParams();

  return <>
    <Header></Header>
    {id < listeLogement.length ? <Logement></Logement> : <Composant404></Composant404>}
    <Footer></Footer>
    </>
}

export default PageLogement;