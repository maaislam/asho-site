import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import Seo from '../../../components/Seo';
import { baseURL, server } from '../../../config';

const index = ({ post }) => {
  const router = useRouter();
  return (
    <>
      <Seo
        title={post.title}
        description={post.short_desc}
        pageUrl={`${server}/${router.asPath}`}
        imgUrl={post.featured_image.medium}
      />
      <div className=' max-w-1144 flex flex-col items-center gap-40 bg-background shadow-container rounded-10 px-32 py-40 mx-auto'>
        <h1>{post.title}</h1>
        <span>{parse(post.content)}</span>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${baseURL}/wp-json/asho/v1/articles/${context.query.sId}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default index;
