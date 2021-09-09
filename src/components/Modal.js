import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import ReactDOM from 'react-dom';

/*

This method creates and returns a Modal at the top of the page no matter where it's called by using createPortal

@param data The data that will be passed into the modal to be displayed i.e. the image data
@param toggle The function that handles the show hide of the modal

*/

const Modal = ({data, toggle}) => {
    if(data.show){
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal-backdrop" onClick={toggle} />
                <div className="modal-content">
                    <FontAwesomeIcon icon={faTimesCircle} size={"3x"} onClick={toggle} />
                    <img className="modal-img" src={'assets/' + data.image} alt={data.alt} id={data.id} />
                </div>
            </div>,
            document.getElementById("modal-root")
        )
         
    }else{
        return null;
    }
}

export default Modal
