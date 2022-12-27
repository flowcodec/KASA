import React from 'react';
import '@/pages/Home/home.css'
import Image from '@/assets/ImageHome.png'
import Pictures from '@/components/card/Card';
import {appartementListe} from '@/data/AccommodationList'

const Home = () => {
    return (
        <main className='bodyHome' >
            <div className='blockhome'>
                <div className='blockIntroImage'>
                    <div className='introImage'>
                        <img src={Image} alt="rivages rockailleux"></img>
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </div>
                <section className='galery'>
                    {appartementListe.map(produits => 
                    (<Pictures 
                    id = {produits.id}
                    key={produits.id} 
                    cover={produits.cover} 
                    title={produits.title} 
                    descrition= {produits.descrition}
                    />))}
                </section>
            </div>
        </main>
    );
};

export default Home;