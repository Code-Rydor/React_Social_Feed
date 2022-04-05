import React from 'react';
import LikeDislikeButtons from './LikeDislikeButtons';



const Post = ({dataItem}) => {
    return ( 
        <div>
            <h3>{dataItem.name}</h3>
            <p>{dataItem.post}</p>

            <LikeDislikeButtons/>
            
        </div>
     );
}
 
export default Post;
