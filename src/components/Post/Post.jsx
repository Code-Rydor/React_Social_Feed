import React from 'react';
import LikeDislikeButtons from '../LikeDislikeButtons/LikeDislikeButtons';
import './Post.css'


const Post = ({dataItem}) => {
    return ( 
        <div className='container'>
            <div>
                <h3>{dataItem.name}</h3>
                <p>{dataItem.post}</p>
                <LikeDislikeButtons />
            </div>
        </div>
     );
}
 
export default Post;
