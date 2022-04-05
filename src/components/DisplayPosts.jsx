import React from 'react';
import LikeDislike from './LikeDislike';



const DisplayPosts = ({parentData}) => {
    return ( 
        <ul>
            {parentData.map((dataItem, index) => <li key={index}> {dataItem.name}  {dataItem.post}  {LikeDislike()}</li>)}
        </ul>
     );
}
 
export default DisplayPosts;