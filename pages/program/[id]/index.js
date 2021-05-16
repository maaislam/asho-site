import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Seo from '../../../components/Seo';

const index = ({ program }) => {
  const router = useRouter();

  return (
    <>
      <Seo
        title={program.title}
        description={program.short_desc}
        pageUrl={`${process.env.baseURL}/${router.asPath}`}
        imgUrl={program.program_image}
      />
      <div className=' max-w-1144 flex flex-col items-center gap-40 bg-background shadow-container rounded-10 px-32 py-40 mx-auto'>
        <h1>{program.title}</h1>
        <span>{parse(program.content)}</span>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://articlestore.local/wp-json/asho/v1/programs/${context.query.sId}`
  );

  const program = await res.json();

  return {
    props: {
      program,
    },
  };
};

export default index;
