import { useState } from 'react';

/* 

This method creates a custom hook to use the modal on any page 

*/

const UseModal = () => {
    const [data, setdata] = useState({show: false, image: null});
    
    const toggle = (image) => {
        data.show = !data.show;
        data.image = image;
        setdata({...data})
    }

    return {
        data, 
        toggle
    }
}

export default UseModal;