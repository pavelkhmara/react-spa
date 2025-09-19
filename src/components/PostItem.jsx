import React, { forwardRef } from 'react';
import '../styles/PostItem.css';
import Button from './UI/button/Button';

const PostItem = forwardRef( (props, ref) => {
  return (
    <div ref={ref} className="post">
          <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
            <div>{props.post.body}</div>
          </div>
          <div className="post__btn">
            <Button onClick={() => props.remove(props.post)}>Remove</Button>
          </div>
        </div>
  );
});

export default PostItem;