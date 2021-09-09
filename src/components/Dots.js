import React from "react";

/* 

This method creates the dots for quick access to a certain slide

@param activeIndex This is the index of the slide that was clicked
@param onclick This is a function that sets the active index of clicked slide
@param images This is the object array of images

*/

const Dots = ({ activeIndex, onclick, images}) => {
    return (
        <div className="dots-container">
            {
                images.map((slide, index) => (
                    <span 
                        key={slide.id}
                        onClick={() => onclick(index)}
                        className={"dot " + (activeIndex === index ? 'active' : '')}
                    ></span>
                ))
            }
        </div>
    );
}

export default Dots