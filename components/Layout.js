import React, { useRef, useContext, useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import parse from 'html-react-parser';

import useOnScreen from '../hooks/useOnScreen';
import { StickyHeaderContext } from '../context/StickyHeaderContext';
import LandingBlock from './LandingBlock';
import Footer from './Footer';

const Layout = (props) => {
  const [data, setData] = useState([]);

  const [apiCall, setApiCall] = useState(true);

  const landingText =
    data.length > 0 && data.filter((item) => item.title.rendered === 'landing block');

  const ref = useRef();

  const visible = useOnScreen(ref);

  const { setStickyHeader } = useContext(StickyHeaderContext);

  useEffect(() => {
    setStickyHeader(!visible);
  }, [visible]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://articlestore.local/wp-json/wp/v2/home_contents');

      const data = await res.json();

      setData(data);
      setApiCall(false);
    };
    apiCall && getData();
  }, [visible, apiCall]);

  return (
    <>
      <Nav />
      <div ref={ref} className='mb-140'>
        <LandingBlock
          image={props.program ? props.program.program_image : ''}
          headline={landingText && parse(landingText[0].content.rendered)}
          tagline={landingText && parse(landingText && landingText[0].excerpt.rendered)}
        />
      </div>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
