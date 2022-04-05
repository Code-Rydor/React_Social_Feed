import React from 'react';



const DisplayPosts = ({parentData}) => {
    return ( 
        <ul>
            {parentData.map((dataItem, index) => <li key={index}> {dataItem.name}  {dataItem.post}</li>)}
        </ul>
     );
}
 
export default DisplayPosts;