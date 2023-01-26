import styles from './catch.module.scss'

const Catch: React.FC = () => {

  return (
    <section className={styles.container}>
      <div data-aos="fade-up" className={styles.box}>
        <h1>Sua primeira experiência como dev!</h1>
        <p>Uma plataforma onde você irá aprender a como se tornar dev. Para sua primeira experiência, você aprenderá a desenvolver projetos reais com a orientação de mentores, simulando um ambiente real de trabalho.</p>
      </div>
      <div data-aos="fade-up" className={styles.box}>
        <h1>Desenvolva-se!</h1>
        <p>Você também pode fazer nossas mentorias para subir de nível em sua carreira. Tendo uma boa visão do que é necessário para se desenvolver na área em que você deseja. </p>
      </div>
    </section>
  )
}

export default Catch