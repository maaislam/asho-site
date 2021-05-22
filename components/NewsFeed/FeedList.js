import React from 'react';
import useDateFormatter from '../../hooks/useDateFormatter';
import FbShareBtn from '../Button/FbShareBtn';
import LearnMore from '../Button/LearnMore';

const FeedList = ({ blogItem }) => {
  const renderBlogList = [...blogItem, ...blogItem, ...blogItem].map((item, i) => {
    const { date, month, year } = useDateFormatter(item.date);

    return (
      <div
        key={i}
        className='blog-card max-w-375 min-w-296 m-16 relative shadow-card hover:shadow-normal rounded-b-10 cursor-pointer pb-20 transition-all'
      >
        <div className='relative w-full rounded-t overflow-hidden'>
          <img className='featuredImg' src={item.img_url.medium} alt={item.title} />
          <div className='release-date flex justify-between items-center absolute top-0 left-0 w-full px-16 py-10 text-14 bg-background opacity-0 transition-all'>
            <span>{`${date} ${month} ${year}`}</span>
            <FbShareBtn
              url={`https://musing-sinoussi.netlify.app/post/${item.slug}?sId=${item.id}`}
              quote={item.title}
              description={item.short_desc}
            />
          </div>
        </div>
        <div className='text-container text-center text-text'>
          <div className=' px-16 mt-16 font-medium  capitalize'>
            <h4>{item.title}</h4>
          </div>
          <div className='short-desc px-16 pt-10 opacity-70'>{item.short_desc}</div>
        </div>
        <div className='learn-more mt-10 flex justify-center'>
          <LearnMore page='post' slug={item.slug} id={item.id} />
        </div>
        <style jsx>{`
          .featuredImg {
            width: 375px;
            height: 300px;
            min-height: 300px;
            transition: all 0.5s;
            transform: scale(1);
          }
        `}</style>
      </div>
    );
  });

  return <div className=' flex flex-wrap justify-center items-center'>{renderBlogList}</div>;
};

export default FeedList;
