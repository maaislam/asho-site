import React from 'react';

import { FacebookShareButton, FacebookIcon } from 'react-share';

const FbShareBtn = ({ url }) => {
  const encodedURL = url;

  return (
    <FacebookShareButton
      url={url}
      quote={'test'}
      hashtag={'#hashtag'}
      description={'test-share'}
      className=''
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
};

export default FbShareBtn;
