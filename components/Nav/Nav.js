import React, { useContext } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import navData from './nav-data';
import { StickyHeaderContext } from '../../context/StickyHeaderContext';

const Nav = () => {
  const { stickyHeader } = useContext(StickyHeaderContext);

  const renderNavItems = navData.map((item, index) => {
    return (
      <li key={index} className='bg-transparent text-textSecondary cool-link text-18 font-medium '>
        <Link scroll={false} href={`/#${item.path}`}>
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className='fixed w-full z-10'>
      <ul
        className={`flex justify-between items-center px-30 sm:px-40 md:px-80 ${
          stickyHeader ? 'py-10 sticky-menu' : 'py-20 fade-in'
        }`}
      >
        <li className='w-2/5 xl:w-1/2'>
          <Link href='/' scroll={false}>
            <a href='#' className='flex items-center font-semibold text-20'>
              <Image
                src='/assets/logo.png'
                alt='Asho logo'
                width={stickyHeader ? '64' : '80'}
                height={stickyHeader ? '64' : '80'}
              />
              <p className='ml-16 text-text'>Ahead Social Organisation</p>
            </a>
          </Link>
        </li>
        {renderNavItems}
      </ul>
    </nav>
  );
};

export default Nav;
