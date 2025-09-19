import React, { useState } from "react";
import './styles/App.css';
import PostsList from "./components/PostsList";

function App() {
    // const [ value, setValue ] = useState('Text your data');
    const [ posts, setPosts ] = useState([
      {id: 1, title: 'React app', body: 'description sd'},
      {id: 2, title: 'React app sdf s', body: ' sdf description'},
      {id: 3, title: 'React s df app', body: 'descri sdf sd fption'},
      {id: 4, title: ' sdf sdReact app', body: 'descsdf sdf sfription'},
    ])

 

  return (
      <div className="App container">
        <PostsList posts={posts} />
          {/* <h1>{value}</h1>
          <input 
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            /> */}
      </div>
  );
}

export default App;
