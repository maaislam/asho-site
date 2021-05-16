import React from 'react';

import { FacebookShareButton, FacebookIcon } from 'react-share';

const FbShareBtn = ({ url, quote, description }) => {
  const encodedURL = url;

  return (
    <FacebookShareButton url={url} quote={quote} description={description} className=''>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
};

export default FbShareBtn;
