import CountUpPanel from '../components/CountUpPanel';
import FeedList from '../components/NewsFeed/FeedList';

import Programs from '../components/Programs';
import Sectionheader from '../components/Sectionheader';
import { baseURL } from '../config';

const Home = ({ programList, blogList }) => {
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

export const getServerSideProps = async () => {
  const res1 = await fetch(`${baseURL}/wp-json/asho/v1/programs`);

  const programList = await res1.json();

  const res2 = await fetch(`${baseURL}/wp-json/asho/v1/articles`);

  const blogList = await res2.json();

  return {
    props: {
      programList,
      blogList,
    },
  };
};
export default Home;
