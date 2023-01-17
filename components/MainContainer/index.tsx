import styles from './maincontainer.module.scss'
import FlatImage from '../Assets/images/8401.jpg'

const MainContainer: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h5>BOAS-VINDAS A GUIDANC 📚</h5>
        <h1>Mentoria para DEVs. Um jeito novo de entrar no mercado!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button>Garanta sua vaga</button>
      </div>
      <div className={styles.image}>
        <img src={FlatImage.src} alt="" />
      </div>
    </section>
  )
}

export default MainContainer