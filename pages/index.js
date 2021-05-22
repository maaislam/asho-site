import Head from 'next/head';
import Image from 'next/image';
import CountUpPanel from '../components/CountUpPanel';
import FeedList from '../components/NewsFeed/FeedList';
import SingleFeedCard from '../components/NewsFeed/SingleFeedCard';

import Programs from '../components/Programs';
import Sectionheader from '../components/Sectionheader';

const Home = ({ programList, blogList }) => {
  console.log('🚀 ~ file: index.js ~ line 11 ~ Home ~ blogList', blogList);
  return (
    <div>
      <div className='main mb-140'>
        <Sectionheader
          heading1='Programs we regularly maintain.'
          heading2='What care we do for the less fortunate'
        />
        <Programs programList={programList} />
      </div>
      <div className='main mb-140'>
        <CountUpPanel />
      </div>
      <div className='main mb-140'>
        <Sectionheader heading1='Latest newsfeed.' heading2='Popular blog post we updated' />
        <FeedList blogItem={blogList} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res1 = await fetch('http://aso-site.atwebpages.com/wp-json/asho/v1/programs');

  const programList = await res1.json();

  const res2 = await fetch('http://aso-site.atwebpages.com/wp-json/asho/v1/articles');

  const blogList = await res2.json();

  return {
    props: {
      programList,
      blogList,
    },
  };
};
export default Home;
