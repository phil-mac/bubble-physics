import React from 'react';
import "../../App.css";

function Controls(props){
    return(
        <div className='controls' style={{marginBottom:'20px'}}>
            <form>
                <input type='date' onInput={event => props.setDate(event.target.value)}/>
            </form>
            {/* <button onClick={() => console.log('search button pressed')}>Search</button> */}
        </div>
    );
}

export default Controls;