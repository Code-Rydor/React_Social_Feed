import React from 'react';
import Post from './Post';

//??? How did I mess this up
const DisplayPosts = ({data}) => {
    return ( 
        <ul>
            {data.map((dataItem) => <li><Post newPost = {dataItem}/></li>)}
        </ul>
     );
}
 
export default DisplayPosts;