import styles from './footer.module.scss'

interface Props {
  title: string;
}

const Footer: React.FC<Props> = ({ title }) => {

  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <span>Todos os direitos reservados ©</span>
    </section>
  )
}

export default Footer