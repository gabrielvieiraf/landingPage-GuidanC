import { NextPage } from 'next';
import styles from '../styles/404.module.scss'

const Error404: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Whoops! Você se perdeu, página não encontrada!</p>
      <a href="/">Volte para o início</a>
    </div>
  )
}

export default Error404;