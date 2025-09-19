import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [ posts, setPosts ] = useState([])
    
    const [ filter, setFilter ] = useState({sort: '', query: ''});
    const [ modal, setModal ] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    async function fetchPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter( item => item.id !== post.id))
    }


  return (
      <div className="App container">
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
        <PostFilter filter={filter} setFilter={setFilter} />
        <Button style={{marginLeft: 'auto', display: 'flex'}} onClick={() => setModal(true)}>Add post</Button>
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='My posts' />
      </div>
  );
}

export default App;
