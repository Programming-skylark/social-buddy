import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Comment from '../Comment/Comment';
import './PostDetail.css'

const PostDetail = () => {
    const {postId} = useParams();
    console.log(typeof(postId))
    
    const[post, setPost] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
   

    return (
        <Container >
            <div className="root">
                <h1 style={{color: "#e6b800"}}>Detail of post {postId}</h1>
                <h2>Title: {post.title}</h2>
                <p>{post.body}</p>
            </div>
            
            <h3 style={{color: "#e6b800"}}>{comments.length} Comments</h3>
            {
                comments.map(cmnt =>  <Comment comment={cmnt}></Comment>)
            }
        </Container>
        
    );
};

export default PostDetail;