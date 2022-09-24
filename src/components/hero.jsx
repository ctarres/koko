/*  ./components/Hero.jsx     */
import Link from 'next/link'
import Emoji from '../components/emoji'

export const Hero = () => {
  return (
    <>
      <div className='pt-40 pb-10 relative'>
        <div className='container mx-auto text-center'>
          <h1 className='flex justify-center font-bold text-7xl'>
            Welcome to Hoonalu <p className='ml-4 animate-waving-hand'><Emoji symbol="👋" label="hand"/></p>
          </h1>
          <p className='py-8 text-xl'>
            Learn all about Crystal Bowl and how it works. Crafting sounds since 2010 with love.
          </p>
          <div className='cursor-pointer inline-block'>
            <Link href='/services'>
              <a className='py-3 px-6 bg-indigo-600 text-white text-l font-semibold rounded-md shadow-lg focus:outline-none'>
                More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};