import React from 'react';



const Post = ({dataItem}) => {
    return ( 
        <div>
            <h3>{dataItem.name}</h3>
            <p>{dataItem.post}</p>
            <button type='button'>Like</button>
            <button type='button'>Dislike</button>
            
        </div>
     );
}
 
export default Post;