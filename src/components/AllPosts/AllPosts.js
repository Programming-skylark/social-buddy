import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';




const AllPosts = () => {
    const[posts, setPosts] = useState([]);
    useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
    return (
        <div>
            <h1>posts: {posts.length}</h1>
            {
                posts.map(pst => <Post key={pst.id} post = {pst}></Post>)
            }

        </div>



            
    );
};

export default AllPosts;