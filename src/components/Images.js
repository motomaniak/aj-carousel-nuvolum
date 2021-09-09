import React from 'react'
import Modal from './Modal';
import UseModal from './UseModal';

/*

This method loops through the images adding them to the carousel 
and adds the Modal component for clicking on the image to display the Modal of it 

@param activeIndex The current index to be displayed 
@param sliderData The object array of images

*/

const Images = ({activeIndex, sliderData}) => {
    const {data, toggle} = UseModal(); 
    
    return (
        <div className="image-container">
            {
                sliderData.map((slide, index) => {
                    return (
                        <img key={index} onClick={() => toggle(slide.image)} className={"carousel-image " + (index === activeIndex ? 'active' : 'inactive')} src={'assets/' + slide.image} alt={slide.alt} id={slide.id} />
                    )
                })
            }
            <Modal data={data} toggle={toggle} />
        </div>
    );
}

export default Images
