
import React, { useState } from 'react';
import AddPostForm from './components/AddPostForm';
import PostCard from './components/PostCard';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      
      <AddPostForm onAddPost={handleAddPost} />
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default App;
