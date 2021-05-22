import parse from 'html-react-parser';

const index = ({ post }) => {
  return (
    <div className=' max-w-1144 flex flex-col items-center gap-40 bg-background shadow-container rounded-10 px-32 py-40 mx-auto'>
      <h1>{post.title}</h1>
      <span>{parse(post.content)}</span>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://aso-site.atwebpages.com//wp-json/asho/v1/articles/${context.query.sId}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default index;
