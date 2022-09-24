/*  ./components/Hero.jsx     */
import Link from 'next/link';

export const Hero = () => {
  return (
    <>
      <div className='pt-40 pb-10 relative'>
        <div className='container mx-auto'>
          <h1 className='font-bold text-7xl'>
            Welcome to Hoonalu
          </h1>
          <p className='py-8 text-xl'>
            Learn all about Crystal Bowl and how it works. Crafting sounds since 2010 with love.
          </p>
          <Link href='/services'>
            <a className='px-4 bg-white hover:text-white hover:bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
              More
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};