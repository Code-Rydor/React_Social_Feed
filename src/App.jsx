import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import Post from './components/Post';




function App() {

  const [postData, setPostData] = useState([
    { name: "" },
    { post: "" }
  ]);

  return (
    <div>
      <DisplayPosts data={postData} /> //??? How did I mess this up
    </div>
  );
}

export default App;
