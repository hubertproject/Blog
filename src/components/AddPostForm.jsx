 
import React, { useState } from 'react';
import PostContainer from './PostContainer';

const AddPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = React.createRef();  

  const handleAddPost = () => {
    if (title && description && image) {
      onAddPost({ title, description, image });
      setTitle('');
      setDescription('');
      setImage(null);
      
      // Reset the file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <PostContainer>
      <h2 className="text-xl font-bold mb-4">Add a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded resize-none"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} 
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2"
        onClick={handleAddPost}
      >
        Add Post
      </button>
    </PostContainer>
  );
};

export default AddPostForm;
