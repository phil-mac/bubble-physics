import React, {useState} from 'react';

import Cube from './Cube';

export default () => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    const onMouseMove = (e) => {
        e.stopPropagation();

        setMousePos({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
        console.log(mousePos);
    }

    return(
        <div 
            style={{background: 'mediumpurple', width:'800px', height:'800px', position:'relative'}}
            onMouseMove={onMouseMove}
        >
            <Cube mousePos={mousePos}/>
        </div>
    )
}