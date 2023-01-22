import styles from './catch.module.scss'

const Catch: React.FC = () => {

  return (
    <section className={styles.container}>
      <div data-aos="fade-up" className={styles.box}>
        <h1>Somos a primeira plataforma do Brasil focada em mentoria para desenvolvedores!</h1>
        <p>Curabitur eleifend ipsum nec est fringilla lobortis.</p> 
        <p>Phasellus dapibus blandit augue sed condimentum. Fusce vitae odio non velit aliquam condimentum non vulputate velit. </p>
      </div>
    </section>
  )
}

export default Catch