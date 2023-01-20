import styles from './maincontainer.module.scss'
import FlatImage from '../Assets/images/8401.jpg'
import Image from 'next/image'

const MainContainer: React.FC = () => {

  return (
    <section className={styles.container}>
      <div data-aos="fade-right" className={styles.box}>
        <h5>CONHEÇA A GUIDANC 📚</h5>
        <h1>Mentoria para DEVs. Um jeito novo de entrar no mercado!</h1>
        <p>Que tal receber mentoria de um especialista da área para se preparar para o mercado enfrentando desafios do ambiente real de trabalho?</p>
        <button>Garanta sua vaga<i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div data-aos="fade-left" className={styles.image}>
        <Image
          src={FlatImage}
          alt='FlatImage of a man siting in a egg chair using a notebook'
          style={{ borderRadius: '2rem', width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  )
}

export default MainContainer