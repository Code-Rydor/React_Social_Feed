import React, { useState } from 'react';
import './CreatePost.css'


const Post = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }
    
    return ( 
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' placeholder='Your name here...' value={name} onChange={(event) => setName(event.target.value)} />
                
                <label>Post</label>
                <input type='text' placeholder='Your message here...' value={post} onChange={(event) => setPost(event.target.value)} />

                <button type='submit'>Create</button>
            </form>
        </div>
     );
}
 
export default Post;