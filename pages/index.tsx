import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"
import Loading from '../components/loading'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [data, setData] = useState('')

  const handleClick = async () => {
    setLoading(true)
    const res = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })

    if (res.status !== 200) {
      setLoading(false)
      return
    }

    const data = await res.json()
    setData(data.response)
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>QA LCC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`absolute ${loading ? 'grid place-content-center inset-0 opacity-100' : 'opacity-0'} transition-all duration-300`}>
        <Loading className={`${loading ? 'w-16 h-16 md:w-18 md:h-18' : ''}`} />
      </div>

      <main className="flex w-full flex-1 flex-col bg-white">
        {/*Question Section*/}
        <div className='flex justify-center items-center bg-primary p-5 rounded-b-3xl'>
          <section className='flex flex-col items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-white text-4xl'>LCC DICE</h2>
              <div className='border-2  inline-block mb-2 w-3/4' />
            </div>

            <div className="flex item-center justify-center shadow-xl bg-white w-full rounded-full overflow-hidden">
              <input
                onChange={(e) => setPrompt(e.target.value)}
                type={'text'}
                name={'prompt'}
                className='w-full placeholder:text-[#b8b8b8] font-bold px-4 py-3 outline-none'
                placeholder='¿A que sabe zkittles?' />
              <button
                onClick={handleClick}
                className='grid place-content-center px-3'
              >
                <AiOutlineSend className='w-7 h-7 text-[#b8b8b8]' />
              </button>
            </div>
          </section>
        </div>
        {/*Answer Section*/}
        <div>
          <section className='font-semibold p-6'>
            {data ? <p className='font-bold'>LCC DICE: <span className='font-medium'>{data}</span></p> : ''}
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
