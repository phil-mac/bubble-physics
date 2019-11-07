import React from 'react';
import "../../App.css";

function SatPicCard(props){
    return(
        <div className='satPicCard' style={{width:'100%'}}>
            <img src={props.photoData.url} alt='nasa photo' style={{width:'100%'}} />
            {/* <h2>{props.photoData.title}</h2>
            <h3>{props.photoData.explanation}</h3>
            <p>© {props.photoData.copyright}</p> */}
        </div>
    );
}

export default SatPicCard;