import React from 'react';
import './tagName.css'

const TagName = ({tags}) => {
    return (
        <div className='tagname'>
             <p>{tags}</p>
        </div>
     );
 };

export default TagName;