import React, { useState } from 'react';
import "./LikeDislikeButtons.css"

const LikeDislikeButtons = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick() {
        if (buttonClass === 'inactive') {
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive');
        }
    }
    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>Like</button>
            
        </div>
     );
}
 
export default LikeDislikeButtons;

//<button className='active' onClick={handleClick}>Dislike</button>

// ??? Can you have multiple classNames for a single button