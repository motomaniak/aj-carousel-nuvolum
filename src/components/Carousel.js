import React, { useState } from 'react'
import Images from './Images';
import Dots from './Dots';
import { SliderData  } from './SliderData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

/* 

This method displays the slider carousel of images and adds the dots to the bottom

*/

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <div className="carousel-container">
            <div className="inner-carousel">
                <a href="#" aria-label="Prev Slide" onClick={() => setActiveIndex( activeIndex <= 0 ? SliderData.length - 1 : activeIndex - 1 )}><FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} /></a>
                <Images activeIndex={activeIndex} sliderData={SliderData} />
                <a href="#" aria-label="Next Slide" onClick={() => setActiveIndex(activeIndex === SliderData.length - 1 ? 0 : activeIndex + 1)}><FontAwesomeIcon icon={faChevronCircleRight} size={"2x"} /></a>
            </div>
            <Dots
                activeIndex={activeIndex}
                images={SliderData}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Carousel
