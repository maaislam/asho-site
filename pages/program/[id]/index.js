import parse from 'html-react-parser';

const index = ({ program }) => {
  return (
    <div className=' max-w-1144 flex flex-col items-center gap-40 bg-background shadow-container rounded-10 px-32 py-40 mx-auto'>
      <h1>{program.title}</h1>
      <span>{parse(program.content)}</span>
    </div>
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
