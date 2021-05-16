import Link from 'next/link';

import RightArrow from '../../public/assets/RightArrow';

const LearnMore = ({ slug, id }) => {
  return (
    <span className='text-link hover:text-accent font-semibold transition-all'>
      <Link href={`/program/${slug}?sId=${id}`}>
        <span className='flex items-center learn-more-arrow'>
          <span> Learn more &nbsp; </span>
          <span className='arrow'>
            <RightArrow />
          </span>
        </span>
      </Link>
    </span>
  );
};

export default LearnMore;
