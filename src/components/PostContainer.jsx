 
import React from 'react';

const PostContainer = ({ children }) => {
  return (
    <div className="max-w-md mx-auto mb-8 p-4 border rounded-md shadow-lg">
      {children}
    </div>
  );
};

export default PostContainer;
