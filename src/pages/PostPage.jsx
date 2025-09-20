import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../styles/PostPage.css';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostPage = () => {
    const { postId } = useParams();
    const [ post, setPost ] = useState({});
    const [ comments, setComments ] = useState([]);
    const [ fetchPostById, isLoading, error ] = useFetching( async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [ fetchComments, isComLoading, comError ] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        
        setComments(response.data);
    })
    
    useEffect(() => {
        fetchPostById(postId);
        fetchComments(postId);
    },[])
    

    return (
        <div className='post-page'>
            {isLoading
                ?   <Loader />
                : 
                    <div className='post-page__title'>
                        {post.title}
                    </div>
            }
            <div className='post-page__content'>
                {post.body}
            </div>
            {isComLoading
                ? <Loader/>
                :
                    <div className='comments'>
                        <span className='comments__title'>Comments</span>
                        {comments.map(comment => 
                            <div key={comment.id} className='comment'>
                                <div>
                                    <div className='comment__author'>{comment.name}</div>
                                    <span className='comment__author'>{comment.email}</span>
                                </div>
                                <div className='comment__text'>{comment.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostPage;