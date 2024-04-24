import '../styles/collapseButton.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { UnmountClosed } from 'react-collapse';
import { useState } from 'react';

function CollapseButton({ title, content, width }) {
    
    const [isOpen, setIsOpen] = useState(false)

    return <>
        <div className='companyvalues__composant'>
            <button onClick={() => (setIsOpen(!isOpen))} className='companyvalues__item' style={{width:`${width}`}}><p>{title}</p><span><FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp}/></span></button>
            <UnmountClosed isOpened={isOpen}>
            <div className='collapse' style={{width: `${width}`}}><div className='content'>{content}</div></div>
            </UnmountClosed>
        </div>
    </>
}

export default CollapseButton;