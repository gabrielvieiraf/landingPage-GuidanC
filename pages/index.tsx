import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MainContainer from '@/components/MainContainer'
import Benefits from '@/components/Benefits'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guidanc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' />
      </Head>

      <Navbar title='Guidanc' />
      <MainContainer />
      <Benefits/>
    </>
  )
}

export default Home