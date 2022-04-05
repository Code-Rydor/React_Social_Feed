import React from 'react';
import Post from './Post'




const DisplayPosts = ({parentData}) => {
    return ( 
        <ul>
            {parentData.map((dataItem, index) => <li key={index}><Post dataItem={dataItem}/></li>)}
        </ul>
     );
}
 
export default DisplayPosts;