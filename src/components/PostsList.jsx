import React, { useRef } from 'react';
import '../styles/PostsList.css';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostsList = ({posts, title, remove }) => {
    const refs = useRef({});

    if (posts.length === 0) {
        return 'no posts';
    }

    return (
        <div className='posts'>
            <h1 className="posts__heading">{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    if (!refs.current[post.id]) {
                        refs.current[post.id] = React.createRef();
                    }
                    const nodeRef = refs.current[post.id];
                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                            nodeRef={nodeRef}
                        >
                            <PostItem ref={nodeRef} remove={remove} number={index + 1} post={post} />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostsList;
