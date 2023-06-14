import Image from 'next/image'
import { Inter } from 'next/font/google'
import Request from './api/request'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-slate-300 w-screen h-screen'>
      <div className='flex flex-col items-center justify-between space-y-8'>


      <div className="aspect-square relative h-full w-72 mt-24 md:w-96">
            {/* <Logo className="hidden  absolute left-2 w-1/2 z-5 fill-red/[0.5]"></Logo> */}
            {/* hi emiliaoo*/}

            <Image
              src="/marin.png"
              className="object-cover z-0 "
              fill
              alt="marin is the cutest!"
            ></Image>
          </div>


        <div>
        <a className='text-4xl'>
          Site in progress!
        </a>
        </div>

        <div>
        <Request/>
        </div>

      </div>


    </main>
  )
}
