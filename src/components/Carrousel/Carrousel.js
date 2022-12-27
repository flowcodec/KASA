import React from 'react';
import "./carrousel.css"
import {useState} from "react"
import ArrowNext from "@/assets/next.png";
import ArrowBack from "@/assets/back.png";


function Carrousel({slider}) {

    
  const [sliding, setSliding] = useState(0) 
  const sliderLength = slider.length 

  function Back() { 
      setSliding(sliding === 0 ? sliderLength - 1 : sliding - 1)  
  }

  function Next() { 
      setSliding(sliding ===  sliderLength - 1 ? 0 : sliding + 1)
  }

  return(
      <div className="carrousel">
        <div className='indexArrows'>
            <div className='blockArrow'>
            {sliderLength === 1 ? null :
            <>  
                <img className="back" src={ArrowBack} alt="back" onClick={Back} />
                <img className="next" src={ArrowNext} alt="next" onClick={Next} />
            </>
            }  
            </div> 
            <p className="index"> {(sliding + 1 ) + '/' + sliderLength}</p>
        </div>
          {slider.map((pictures, index) => {
              return( 
                  <div className={index === sliding ? "blockImage" : "blockImage--off"} key={index}>
                      { index === sliding &&
                          <img className="carrouselImage" src={pictures} alt="Location"/>
                      }
                  </div>
              )
          })}
          
      </div>
  )
}

export default Carrousel