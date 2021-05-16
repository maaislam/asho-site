const Sectionheader = ({ heading1, heading2 }) => {
  return (
    <div className='flex flex-col items-center gap-16 text-center my-32'>
      <h4 className='text-accent text-18'>{heading1}</h4>
      <h3>{heading2}</h3>
    </div>
  );
};

export default Sectionheader;
