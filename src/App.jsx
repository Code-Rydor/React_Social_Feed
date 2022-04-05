import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';




function App() {

  const [postData, setPostData] = useState([])
  
  function addNewPost(post) {
    let tempPost = [...postData, post];
    setPostData(tempPost);
  }

  return (
    <div>
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPosts parentData={postData} /> 
    </div>
  );
}

export default App;
