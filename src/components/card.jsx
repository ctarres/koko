/*  ./components/Card.jsx     */
import Image from 'next/image'

export const Card = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 gap-4 place-content-between content-center'>
        <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
            <div className='relative h-[16rem]'>
              <Image
                className='rounded-t-lg'
                src="/hiromi_1.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sound Bath （サウンドバス）</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">座ったり横になったり聴き方は自由です寝ていただいてもかまいませんリラックスして日常から少し離れた時間をお過ごしください</p>
            </div>
        </div>
        <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
          <div className='relative h-[16rem]'>
            <Image
              className='rounded-t-lg'
              src="/hiromi_2.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sound Healing （サウンドヒーリング​)</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">個人セッションで全身をクリスタルボウルで囲みボウルを身体の上にせておこなうヒーリングセッションです</p>
          </div>
        </div>
      </div>
    </>
  );
};