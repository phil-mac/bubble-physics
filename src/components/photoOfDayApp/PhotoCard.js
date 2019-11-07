import React from 'react';
import "../../App.css";

function PhotoCard(props){
    return(
        <div className='photoCard' style={{width:'80%', margin:'0 auto'}}>
            <img src={props.photoData.url} alt='nasa photo' style={{width:'100%'}} />
            <h2>{props.photoData.title}</h2>
            <h3>{props.photoData.explanation}</h3>
            <p>© {props.photoData.copyright}</p>
        </div>
    );
}

export default PhotoCard;