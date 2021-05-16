import LearnMore from './Button/LearnMore.js';

const Programs = ({ programList }) => {
  const renderPrograms = programList.map((item) => {
    return (
      <div
        key={item.id}
        className='group min-w-280 min-h-245 w-full md:w-5/12 xl:w-1/4 flex flex-col items-center justify-between gap-10 text-center p-20 m-16 rounded-2xl hover:shadow-card cursor-pointer transition ease-in duration-300'
      >
        <img src={item.img_url.medium} alt={item.title} />
        <h5 className='text-text font-semibold'>{item.title}</h5>
        <p className='text-headingSecondary text-14'>{item.short_desc}</p>
        <LearnMore page='program' slug={item.slug} id={item.id} />
      </div>
    );
  });

  return (
    <div className='flex flex-wrap justify-center bg-background shadow-container rounded-10 py-40'>
      {renderPrograms}
    </div>
  );
};

export default Programs;
