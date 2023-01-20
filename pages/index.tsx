import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MainContainer from '@/components/MainContainer'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <>
      <Head>
        <title>Guidanc - Mentoria para desenvolvedores</title>
        <meta name="description" content="Mentoria para desenvolvedores, feita por especialistas da área de desenvolvimento, um jeito novo de entrar no mercado enfrentando desafios do ambiente real de trabalho!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="GuidanC devs, GuidanC mentoria, GuidanC mentoria de desenvolvedores, GuidanC aula, GuidanC aula dev jr" />
        <link rel="icon" href="/favicon.ico" />
        {/* WRONG WAY TO GET FONT-AWESOME FOR REACT */}
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' />
      </Head>

      <Navbar title='Guidanc' />
      <MainContainer />
      <Benefits />
      <Footer title='Guidanc' />
    </>
  )
}

export default Home