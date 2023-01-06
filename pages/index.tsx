import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {FaRegEnvelope} from "react-icons/fa"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <div className='shadow-2xl flex w-2/3 max-w-4xl'>
        {/*Question Section*/}
        <div className='bg-[#4CFFA3] w-3/5 p-5 rounded-l-2xl'>
          <div className='py-10'>
            <h2 className='font-bold text-white'>¡HOLA!</h2>
            <div className='border-2 w-10 border-white-400 inline-block mb-2'></div>
            <div className="flex flex-col item-center ">
              <div className="bg-white max-w p-2 ">
                <FaRegEnvelope className='text-gray-400'/>
                <input type="text" placeholder='¿A que sabe zkittles?'/>
                </div>
            </div>
          </div>
        </div>
        {/*Answer Section*/}
        <div className='bg-white w-2/5 rounded-r-2xl'>Answer</div>
       </div>
      </main>

      <footer className="flex text-white h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.instagram.com/lacaradelcannabis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className='text-[#4CFFA3]'>La Cara del Cannabis</span>{' '}
          
        </a>
      </footer>
    </div>
  )
}

export default Home
