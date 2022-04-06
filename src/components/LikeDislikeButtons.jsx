import React, { useState } from 'react';
//import "./LikeDislikeButtons.css"

// const LikeDislikeButtons = (props) => {

//     const [buttonClass, setButtonClass] = useState('inactive');

//     function handleClick() {
//         if (buttonClass === 'inactive') {
//             setButtonClass('active');
//         }
//         else {
//             setButtonClass('inactive');
//         }
//     }
//     return (
//         <div>
//             <button className={buttonClass} onClick={handleClick}>Like</button>
            
//         </div>
//      );
// }
 
// export default LikeDislikeButtons;

// //<button className='active' onClick={handleClick}>Dislike</button>

// // ??? Can you have multiple classNames for a single button

const LikeDislikeButtons = () => {

    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)

    function liker() {
        if (likeActive) {
            setLikeActive(false)
        }
        else {
            setLikeActive(true)
            if (dislikeActive) {
                setDislikeActive(false)
            }
        }
    };
    
    function disliker() {
        if (dislikeActive) {
            setDislikeActive(false)
        }
        else {
            setDislikeActive(true)
            if (likeActive) {
                setLikeActive(false)
            }
        }
    };

    return ( 
        <div className="LikeDislikeButtons">
            <div></div>
            <button onClick={liker}>Like</button>
            <button onClick={disliker}>Dislike</button>
        </div>
     );
}
 
export default LikeDislikeButtons;
