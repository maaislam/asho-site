import React from 'react';
import ButtonTemplate from './Button/Button';

const LandingBlock = ({ headline, tagline, image }) => {
  return (
    <div className='landing-block'>
      <div className='main-cta flex flex-col items-center text-textSecondary'>
        <div className='mb-32'>
          <h2>{headline}</h2>
        </div>
        <div className='mb-32'>
          <h4>{tagline}</h4>
        </div>
        <ButtonTemplate text='contact with us' />
      </div>
      <style jsx>{`
        .main-cta {
          position: absolute;
          top: ${image ? '25%' : '50%'};
          left: 50%;
          transform: translate(-50%, -${image ? '25%' : '50%'});
        }
        .landing-block {
          min-height: ${image ? '50vh' : '75vh'};
          width: 100%;
          background-image: linear-gradient(
              to right bottom,
              rgba(126, 213, 111, 0.8),
              rgba(40, 180, 131, 0.85)
            ),
            url(${image || '/assets/landing-image.jpg'});
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </div>
  );
};

export default LandingBlock;
