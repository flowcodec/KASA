import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = ({cover, title ,desciption, id}) => {
    return (
        <article className='cards'>
            <Link to={`/accommodation/${id}`}  title ={title}>
                <img className='imageCard'src={cover} alt={desciption}/>
                <h2>{title}</h2>
            <div className='blur'></div>
            </Link>
        </article>
    );
};
export default Card;
