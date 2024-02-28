 
import React from 'react';
import PostContainer from './PostContainer';

const PostCard = ({ post }) => {
  return (
    <PostContainer>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
      <img className="mt-4 rounded" src={URL.createObjectURL(post.image)} alt={post.title} />
    </PostContainer>
  );
};

export default PostCard;
