import Image from 'next/image'
import { Inter } from 'next/font/google'
import Request from '../components/request'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-slate-300 w-screen h-screen '>
      <div className='flex flex-col items-center space-y-8'>


<div className="aspect-square relative h-full w-72 mt-20 md:w-96">
      {/* <Logo className="hidden  absolute left-2 w-1/2 z-5 fill-red/[0.5]"></Logo> */}
      {/* hi emiliaoo*/}

      <Image
        src="/images/marin.png"
        className="object-cover z-0 "
        fill
        alt="marin is the cutest!"
      ></Image>
    </div>


  <div>
  <a className='text-4xl text-white'>
    Site in progress!
  </a>
  </div>

  <div>
  <Request/>
  </div>




  <div className ="absolute bottom-8  hover:text-slate-600 hover:text-lg hover:fill-slate-600">
  <Link href="https://youtube.com/@marinzsh">

    <div className="flex flex-row  space-x-4">
    <p>Marin&apos;s Youtube </p>
    <svg className=""fill="white"width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
    </div>
</Link>

</div>



</div>
    </main>
  )
}