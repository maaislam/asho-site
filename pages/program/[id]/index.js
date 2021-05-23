import { useRouter } from 'next/router';
import Seo from '../../../components/Seo';
import parse from 'html-react-parser';

const index = ({ program }) => {
  console.log('🚀 ~ file: index.js ~ line 6 ~ index ~ program', program);
  const router = useRouter();

  return (
    <>
      <Seo
        title={program.title}
        description={program.short_desc}
        pageUrl={`https://musing-sinoussi.netlify.app}/${router.asPath}`}
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
    `https://barometric-radar.000webhostapp.com/wp-json/asho/v1/programs/${context.query.sId}`
  );

  const program = await res.json();

  return {
    props: {
      program,
    },
  };
};

export default index;
