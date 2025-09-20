import React, { useEffect, useMemo, useRef, useState } from "react";
import '../styles/App.css';
import PostsList from "../components/PostsList";
import Button from "../components/UI/button/Button";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
    const [ posts, setPosts ] = useState([])
    const [ filter, setFilter ] = useState({sort: '', query: '', limit: 10});
    const [ modal, setModal ] = useState(false);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ page, setPage ] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();


    const [ fetchPosts, isPostsLoading, postError ] = useFetching( async (limit, page) => {
      if (limit == -1) page = 1;
        
      const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));

        
      })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1);
    })

    useEffect(() => {
      
      fetchPosts(filter.limit, page)
    }, [page, filter.limit])
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter( item => item.id !== post.id))
    }

    const changePage = (page) => {
      setPage(page);
    }


  return (
      <div className="App container">
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
        <PostFilter filter={filter} setFilter={setFilter} />
        <Button style={{marginLeft: 'auto', display: 'flex'}} onClick={() => setModal(true)}>Add post</Button>
        {postError
          ? postError
          : ''
        }
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='My posts' />
        <div ref={lastElement} />
        {isPostsLoading &&
          <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
        }
        <Pagination totalPages={totalPages} page={page} changePage={changePage} />
      </div>
  );
}

export default Posts;
