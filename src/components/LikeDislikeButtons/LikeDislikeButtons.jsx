import React, { useState } from 'react';
import "./LikeDislikeButtons.css"

const LikeDislikeButtons = () => {

    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)
    const [buttonClass, setButtonClass] = useState('inactive');

    function liker() {
        if (likeActive) {
            setLikeActive(false)
            setButtonClass('inactive')
        }
        else {
            setLikeActive(true)
            setButtonClass('active')
            if (dislikeActive) {
                setDislikeActive(false)
            }
        }
    };

    function disliker() {
        if (dislikeActive) {
            setDislikeActive(false)
            setButtonClass('inactive')
        }
        else {
            setDislikeActive(true)
            setButtonClass('active')
            if (likeActive) {
                setLikeActive(false)
            }
        }
    };


    return ( 
        <div>
            <button className="btnfos-5" onClick={liker}>Like</button>
            <button className="btnfos-6" onClick={disliker}>Dislike</button>
            
        </div>
     );
}
 
export default LikeDislikeButtons;