import '../styles/carrousel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function Carrousel({ covers }) {

    let [indexCover, setIndexCover] = useState(0)
    let cover = covers[indexCover]
    let isMoreThanOneCover = false 

    displayChevron()
    function displayChevron() {
        if (covers.length > 1) {
            isMoreThanOneCover = true
        }
    }

    const increment = () => {
   
        if (indexCover > covers.length-2) {
            setIndexCover(0)
            console.log(indexCover);
        } else {setIndexCover(indexCover +1)}
    }

    const decrement = () => {

          if (indexCover < 1) {
            setIndexCover(covers.length-1)
        } else {setIndexCover(indexCover -1)}
    }
    
    return <>
    
    <div className="carrousel" style={{backgroundImage: `url(${cover})`}}>
        {isMoreThanOneCover && (<span className='carrousel__chevron carrousel__chevron--left' onClick={decrement}><FontAwesomeIcon icon={ faChevronLeft }></FontAwesomeIcon></span>)}
        {isMoreThanOneCover && (<span className='carrousel__chevron carrousel__chevron--right' onClick={increment}><FontAwesomeIcon icon={ faChevronRight }></FontAwesomeIcon></span>)}
        {isMoreThanOneCover && (<p className='cover-slider'>{`${indexCover+1}/${covers.length}`}</p>)}
    </div>

    </>
}

export default Carrousel;