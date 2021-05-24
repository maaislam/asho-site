import Link from 'next/link';
import React from 'react';

const ButtonBasic = ({ url, text }) => {
  return (
    <Link href={url}>
      <span className='inline-block bg-link px-32 py-10 text-background border font-medium border-link rounded-md hover:bg-background hover:text-link transition-all cursor-pointer'>
        {text}
      </span>
    </Link>
  );
};

export default ButtonBasic;
