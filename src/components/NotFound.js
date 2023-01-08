import React from 'react';
import imagenFondo from '../assets/images/404.jpg';

function NotFound(){
    return(
        <div className='row w-75 flex-column justify-content-center align-content-center'>
            <img 
                style={{width: 25 +'rem'}} 
                src={imagenFondo} alt="Not found"/>
        </div>
        
    )
}


export default NotFound;