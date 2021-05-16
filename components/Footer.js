import Link from 'next/link';
import Image from 'next/image';

import navData from './Nav/nav-data';

const Footer = () => {
  const renderFooterMenu = navData.map((item, index) => {
    return (
      <li
        key={index}
        className='text-16 font-medium opacity-70 hover:opacity-100 hover:text-secondary transition-all'
      >
        <Link href={`/${item.path}`}>{item.label}</Link>
      </li>
    );
  });

  return (
    <footer className='px-30 sm:px-40 md:px-80 py-24 bg-footer-dark text-background'>
      <div className='wrapper flex justify-between items-center '>
        <div className='block-left'>
          <ul>
            <li>
              <Link href='/'>
                <a href='#' className='flex items-center font-semibold text-20'>
                  <Image src='/assets/logo.png' alt='Asho logo' width='80' height='80' />
                  <p className='ml-16'>Ahead Social Organisation</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='block-right w-1/3'>
          <ul className='flex justify-between text-right'>{renderFooterMenu}</ul>
        </div>
      </div>
      <div className='rights text-center'>
        <span className='opacity-70'>All right reserved - Design &amp; Developed by</span>
        <a
          className='opacity-70 hover:opacity-100 transition-all cool-link'
          href='https://www.arafatislam.com/'
        >
          <em>Arafat Islam</em>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
