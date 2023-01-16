import styles from './navbar.module.scss'

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <nav className={styles.container}>
      <h1>{title}</h1>
      <ul className={styles.navMenu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar