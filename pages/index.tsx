import type { NextPage } from 'next'
import Head from 'next/head'
import { AiOutlineSend } from "react-icons/ai"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>QA LCC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col bg-white">
        {/*Question Section*/}
        <div className='flex justify-center items-center bg-primary p-5 rounded-b-3xl'>
          <section className='flex flex-col items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-white text-4xl'>¡HOLA!</h2>
              <div className='border-2  inline-block mb-2 w-3/4' />
            </div>

            <div className="flex item-center justify-center shadow-xl bg-white w-full rounded-full overflow-hidden">
              <input type="text" className='w-full placeholder:text-[#b8b8b8] font-bold px-4 py-3 outline-none' placeholder='¿A que sabe zkittles?' />
              <div className='grid place-content-center px-3'>
                <AiOutlineSend className='w-7 h-7 text-[#b8b8b8]' />
              </div>
            </div>
          </section>
        </div>
        {/*Answer Section*/}
        <div className=''>
          <section className='font-semibold p-6'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quasi recusandae necessitatibus adipisci eum aperiam, odit consequuntur enim molestiae fugiat veritatis praesentium eius aspernatur minus, aliquam rerum laborum, doloremque vero fugit accusantium inventore! Natus quas placeat exercitationem, voluptas aperiam sapiente deserunt itaque ipsam vel tenetur voluptatem est eaque distinctio aut ut beatae consequuntur? Sint veritatis cupiditate reprehenderit labore impedit tenetur voluptates, voluptatem dicta in vel perferendis at, expedita corrupti eius beatae placeat totam et nemo ratione ullam. Quis, eligendi hic.</p>
          </section>
        </div>
      </main>

      <footer className="flex flex-col items-start text-white h-20 w-full justify-center border-t px-6">
        <span className='font-black text-xl'>Powered by</span>
        <div className='flex gap-2 font-semibold'>
          <a
            className="flex items-center justify-center gap-2"
            href="https://www.instagram.com/lacaradelcannabis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className='text-[#4CFFA3]'>
              La Cara del Cannabis
            </span>{' '}
          </a>
          <span className='col-start-2 w-min mx-auto'>
            &times;
          </span>
          <a
            className="flex items-center justify-center gap-2"
            href="https://www.github.com/omgismartinez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className='text-[#4CFFA3]'>Alvaro Martinez</span>{' '}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
