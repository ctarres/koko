import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../src/components/navbar'
import { Footer } from '../src/components/footer'

const About: NextPage = () => {
  return (
    <div className='relative min-h-screen flex flex-col'>
      <Head>
        <title>クリスタルボウル Ho'onalu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="w-full">
        <div className='container mx-auto text-center'>
          <h1 className='flex justify-center font-bold text-7xl m-14'>お問い合わせ</h1>
            お問い合わせ・ご予約・ご依頼は
            下記連絡先または DM（Instagram / Facebook）にて
            受け付けております。
          
            thehoonalu@gmail.com
            09030778684
        </div>
      </main>

      <footer className="block pt-20 pb-20 w-full mt-auto backdrop-blur-lg bg-white/30 z-10">
        <div className='container mx-auto relative'>
          <h4 className='font-bold text-sm uppercase mb-4'>Social</h4>
          <Footer/>
        </div>
      </footer>
      <div className='absolute bottom-0 -z-10'>
        <Image
          src="/footer.png"
          alt="Picture of the author"
          width={2880}
          height={1232}
        />
      </div>
    </div>
  )
}

export default About