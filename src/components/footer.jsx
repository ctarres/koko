/*  ./components/Navbar.jsx     */
import Link from 'next/link';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need

import {
  faFacebook,
	faInstagram,
	faYoutube,
	faLine
} from "@fortawesome/free-brands-svg-icons";

import {
  faPaperPlane,
	faPhone
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {

  return (
    <>
      <nav className=''>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='https://facebook.com'>
            <a className='lg:inline-flex lg:w-auto w-full pr-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faFacebook}
								size="xl"
							/>
            </a>
            </Link>
            <Link href='https://instagram.com'>
            <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faInstagram}
								size="xl"
							/>
            </a>
            </Link>
            <Link href='https://youtube.com'>
            <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faYoutube}
								size="lg"
							/>
            </a>
            </Link>
            <Link href='https://line.com'>
            <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faLine}
								size="xl"
							/>
            </a>
            </Link>
						<Link href='https://facebook.com'>
            <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faPaperPlane}
								size="xl"
							/>
            </a>
            </Link>
						<Link href='https://facebook.com'>
            <a className='lg:inline-flex lg:w-auto w-full px-4 py-1 rounded-md text-black items-center justify-center cursor-pointer'>
							<FontAwesomeIcon
								icon={faPhone}
								size="xl"
							/>
            </a>
            </Link>
        </div>
      </nav>
    </>
  );
};


