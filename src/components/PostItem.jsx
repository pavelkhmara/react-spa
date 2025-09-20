import React, { forwardRef } from 'react';
import '../styles/PostItem.css';
import Button from './UI/button/Button';
import { useNavigate, useParams } from 'react-router';

const PostItem = forwardRef( (props, ref) => {
  const navigate = useNavigate();

  const goToPost = () => navigate(`/posts/${props.post.id}`);
  
  return (
    <div ref={ref} className="post">
          <div className="post__content">
            <strong>{props.post.id > 100 ? props.number : props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
          </div>
          <div className="post__btn">
            <Button onClick={goToPost}>Open</Button>
          </div>
          <div className="post__btn alert">
            <Button onClick={() => props.remove(props.post)}>Remove</Button>
          </div>
        </div>
  );
});

export default PostItem;