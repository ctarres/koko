import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../src/components/navbar'
import { Footer } from '../src/components/footer'
import { Card } from '../src/components/card'

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
            <h1 className='flex justify-center font-bold text-7xl m-14'>会社概要</h1>
            <h2 className='flex justify-center font-bold text-4xl mt-10'>HO'ONALUではアルケミー・クリスタルボウル演奏会、サウンドヒーリングを行なっています。</h2>
            
            <p className='my-4 text-zinc-700'>HO'ONALU (ホオナル) とはハワイ語で静かな水のようになり流れのままにという意味で瞑想に使われる言葉です。
            自分自身が波になり流れのままにクリスタルボウルの音色に委ね本来の自分を取り戻しましょう。
            <i>Be like the water. Go with the flow.</i></p>
              
            <p className='my-4 text-zinc-700'>アルケミー・クリスタルボウルとは高純度の水晶とパワーストーン、貴金属、鉱物などを混ぜ合わせたボウルの楽器です。</p>
            <p className='my-4 text-zinc-700'>アメリカでは音響療法に積極的に活用されており脳波を落ち着かせ瞑想中の脳に現れるのと同じシータ波を発生させます。</p>
            <p className='my-4 text-zinc-700'>複数のクリスタルボウルが奏でる音は豊かに響き合い私たちを包んで心身を心地よく振動させ、</p>
            <p className='my-4 text-zinc-700'>その豊かな倍音と振動は私たちの心身の不調を正してくれます。</p>
            <p className='my-4 text-zinc-700'>クリスタルボウルの優しい穏やかな音色をお楽しみください。</p>

            <Card/>
            
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