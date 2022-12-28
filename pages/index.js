import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import SearchBox  from '../components/SearchBox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-red-300 h-screen'>
        <h1 className='text-5xl font-bold'>Welcome Good</h1>
        <SearchBox /> 
      </main>
    </>
  )
}
