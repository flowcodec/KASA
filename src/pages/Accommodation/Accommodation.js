import React from 'react';

import Carrousel from '@/components/Carrousel/Carrousel.js';
import DropDown from '@/components/DropDown/DropDown';
import TagName from '@/components/TagName/TagName';

import {appartementListe} from '@/data/AccommodationList'
import { useParams} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import fullstar from "@/assets/starfull.png";
import emptystar from "@/assets/emptystar.png";

import './Accommodation.css';

const Accommodation = () => {
    let {id} = useParams() 
    let result = appartementListe.filter(elem => elem.id === id)[0]
    const stars = [1, 2, 3, 4, 5];

    return (
        <main className='accommodation'>
            { result ? (
            <div className='blockaccommodation'>

                <div className='blockCarousel'>
                        <Carrousel classname="Carrousel" slider={result.pictures} />
                </div>

                <section className='intro'>
                    <div className='titreEtTags'>
                        <h1>{result.title}</h1>
                        <p className='underTitle'>{result.location}</p>
                        <div className='blockTags'>
                            {result.tags.map(getTitleTag => (<TagName tags={getTitleTag} key={getTitleTag} />))}
                        </div>
                    </div>
                    <div className='Owner'>
                        <div className='picName'>
                            <h3 id='nameOwner'>{result.host.name}</h3>
                            <img className='cercle' src={result.host.picture} alt={result.host.name}></img>
                        </div>
                        <div className='rating'>
                            {stars.map((star) => result.rating >= star ?
                                (<img key={star} className="stars" src={fullstar} alt="orange star" />)
                                    :
                                (<img key={star} className="stars" src={emptystar} alt="grey star" />))}
                        </div>
                    </div>
                    </section>

                    <section className='blockDrop'>
                        <div className='division1'>
                            <DropDown title='Description' content={result.description} />
                        </div>
                        <div className='division2'>
                            <DropDown className='Equipement' title='Equipement'
                                content={result.equipments} />
                        </div>
                    </section>
            </div>
              ) 
              : <Navigate replace to=".@/components/Error"/> }
        </main>
    )
};

export default Accommodation;