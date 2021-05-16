import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import useOnScreen from '../hooks/useOnScreen';

const stats = [
  {
    id: 1,
    value: 2540,
    suffix: '',
    title: 'Successful Project',
  },
  {
    id: 2,
    value: 40,
    suffix: 'M',
    title: 'People Impacted',
  },
  {
    id: 3,
    value: 100,
    suffix: 'M',
    title: 'Money Raised',
  },
  {
    id: 4,
    value: 60,
    suffix: '+',
    title: 'Operating Branches',
  },
];

const CountUpPanel = () => {
  const [reRender, setReRender] = useState(true);

  const ref1 = useRef();

  const onScreen = useOnScreen(ref1, '-10px');

  const renderCountUps = stats.map((stat) => {
    return (
      <div key={stat.id} className='flex flex-col gap-24'>
        <h2>
          {reRender ? (
            <CountUp
              start={0}
              end={stat.value}
              duration={2.75}
              separator=''
              suffix={stat.suffix}
              delay={0}
              onEnd={() => setReRender(false)}
            />
          ) : (
            <span>{`${stat.value}${stat.suffix}`}</span>
          )}
        </h2>
        <span className='text-text opacity-60 font-medium'>{stat.title}</span>
      </div>
    );
  });

  return (
    <div className='w-4/6 flex justify-between text-center' ref={ref1}>
      {onScreen && renderCountUps}
    </div>
  );
};

export default CountUpPanel;
