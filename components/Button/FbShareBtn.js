import React from 'react';

const FbShareBtn = ({ url }) => {
  const encodedURL = encodeURI(url);

  return (
    <div>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}>Share</a>
    </div>
  );
};

export default FbShareBtn;
