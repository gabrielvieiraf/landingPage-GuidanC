import styles from './catch.module.scss'

const Catch: React.FC = () => {

  return (
    <section className={styles.container}>
      <div data-aos="fade-up" className={styles.box}>
        <h1>Somos a primeira plataforma do Brasil focada em mentoria para desenvolvedores!</h1>
        <p>Uma plataforma onde você irá aprender a como se tornar um desenvolvedor, e para sua primeira experiência, desenvolver projetos reais com a orientação de mentores, simulando um ambiente real de trabalho.</p>
      </div>
    </section>
  )
}

export default Catch