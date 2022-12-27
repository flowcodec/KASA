import React from 'react';
import { useState } from 'react';
import './DropDown.css'
import down from'@/assets/down.png'

const DropDown = ({title, content}) => {
    const [active, setactive] = useState (false)

    const opening = e => { setactive (!active)}
   
    return (
        <div className={`DropDown ${active && "active"}`} onClick={opening}>
            <div className='block_titre_drop'>
                <h2 className='DropDownTitle'>{title}</h2>
                <img src={down} alt='' className='DropDownIcone'></img>
            </div>
            <div className='DropDownContent'>
                {content instanceof Array
                    ?
                        content.map((elem, id) => (
                            <span key={id}>{elem}</span>
                        ))
                    :
                        content
                    }
            </div>
        </div>
    );
};

export default DropDown;