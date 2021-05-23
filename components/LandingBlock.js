import React from 'react';
import ButtonTemplate from './Button/Button';

const LandingBlock = ({ headline, tagline, image }) => {
  const linearGradient = 'linear-gradient(to right bottom,rgba(126, 213, 111, 0.8),rgba(40, 180, 131, 0.85))';

  const clickHandler = () => {
    return;
  };

  return (
    <div
      className={`landing-block ${image ? 'min-h-50' : 'min-h-75'} `}
      style={{ backgroundImage: `${linearGradient},url(${image || '/assets/landing-image.jpg'})` }}
    >
      <div
        className={`absolute ${
          image ? 'y-pos-quarter' : 'center-div'
        } flex flex-col items-center text-textSecondary`}
      >
        <div className='mb-32'>
          <h2>{headline}</h2>
        </div>
        <div className='mb-32'>
          <h4>{tagline}</h4>
        </div>
        <ButtonTemplate text='contact with us' clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default LandingBlock;
