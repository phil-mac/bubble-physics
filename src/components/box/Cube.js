import React, {useRef} from 'react';

export default (props) => {
    const width = 100;

    const handleClick = e => {
        console.log(e.target)
        // e.target.style.position
    }

    return(
        <div 
            onClick={handleClick}
            style={{background: 'lightblue', width:'100px', height:'100px', position:'absolute', left:`${props.mousePos.x + 10}px`, top:`${props.mousePos.y + 10}px`}} 
        />
    )
}