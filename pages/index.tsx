import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../src/components/navbar'
import { Hero } from '../src/components/hero'

const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Head>
        <title>クリスタルボウル Ho'onalu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="w-full">
        <div className='fixed top-0 -z-10'>
          <Image
            src="/background.png"
            alt="Picture of the author"
            width={2296}
            height={668}
          />
        </div>
        <Hero/>
      </main>

      <footer className="h-24 w-full">
        
      </footer>
    </div>
  )
}

export default Home
