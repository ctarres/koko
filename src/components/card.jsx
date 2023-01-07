/*  ./components/Card.jsx     */
import Image from 'next/image'

export const Card = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 place-content-between content-center'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <div>
              <Image
                className='rounded-t-lg'
                src="/sound_bath.jpeg"
                alt="Picture of the author"
                width={960}
                height={720}
              />
            </div>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sound Bath （サウンドバス）</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">座ったり横になったり聴き方は自由です寝ていただいてもかまいませんリラックスして日常から少し離れた時間をお過ごしください</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
          <div>
            <Image
              className='rounded-t-lg object-cover'
              src="/sound_bath2.jpeg"
              alt="Picture of the author"
              width={562}
              height={622}
            />
          </div>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sound Healing （サウンドヒーリング​)</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">個人セッションで全身をクリスタルボウルで囲みボウルを身体の上にせておこなうヒーリングセッションです</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
        </div>
      </div>
    </>
  );
};