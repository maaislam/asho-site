import React from 'react';
import useDateFormatter from '../../hooks/useDateFormatter';
import FbShareBtn from '../Button/FbShareBtn';

const FeedList = ({ blogItem }) => {
  const renderBlogList = [...blogItem, ...blogItem, ...blogItem].map((item, i) => {
    const { date, month, year } = useDateFormatter(item.date);

    return (
      <div key={i} className='w-296 max-w-375 min-w-296 m-16 relative'>
        <div className='release-date flex justify-between items-center pt-10 px-16 pb-5'>
          <span>{`${date} ${month} ${year}`}</span>
          <FbShareBtn url={'https://www.arafatislam.com/'} />
        </div>
        <div className='featuredImg relative'></div>
        <div className='text-container'>
          <div className=' px-16 pt-10 '>{item.title}</div>
          <div className='short-desc px-16 pt-10'>{item.short_desc}</div>
        </div>

        <style jsx>{`
          .featuredImg {
            min-height: 300px;
            background-image: url(${item.img_url.medium});
            background-size: cover;
            background-position: center center;
            padding: 16px;
          }
        `}</style>
      </div>
    );
  });

  return (
    <div className=' flex flex-wrap justify-center items-center'>{renderBlogList}</div>
  );
};

export default FeedList;
