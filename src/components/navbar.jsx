/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faGem
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='backdrop-blur-md shadow-lg shadow-indigo-500/5 bg-white/30 pt-6 pb-6'>
        <div className='flex lg:justify-between container mx-auto'>
          <Link href='/'>
            <a>
              <FontAwesomeIcon
                icon={faGem}
              />
              <span className='ml-2 text-xl text-black uppercase tracking-wide font-bold'>
                Ho'onalu
              </span>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
                  ホームページ
                </a>
              </Link>
              <Link href='/services'>
                <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
                  サービス
                </a>
              </Link>
              <Link href='/about'>
                <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
                  会社概要
                </a>
              </Link>
              <Link href='/contact'>
                <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
                  お問い合わせ
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


