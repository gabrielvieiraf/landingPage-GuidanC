import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MainContainer from '@/components/MainContainer'
import Catch from '@/components/Catch'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar title='Guidanc' />
      <MainContainer />
      <Catch />
      <Benefits />
      <About />
      <Footer title='Guidanc' />
    </>
  )
}

export default Home