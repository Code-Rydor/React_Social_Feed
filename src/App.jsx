import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import CreatePost from './components/CreatePost/CreatePost.jsx';
import NavBar from './components/NavBar/NavBar';
import './App.css'



function App() {

  const [postData, setPostData] = useState([])
  
  function addNewPost(post) {
    let tempPost = [...postData, post];
    setPostData(tempPost);
  }

  return (
    <div>
      <div style={{margin: '1em'}}>
        <NavBar/>
      </div>
      <div>
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPosts parentData={postData} />
      </div>
    </div>
  );
}

export default App;
