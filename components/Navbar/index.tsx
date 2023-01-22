import styles from './navbar.module.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1>{title} <FontAwesomeIcon icon={faMugHot} className={styles.icon} /></h1>
      </div>

      <ul className={styles.navMenu}>
        <li>
          <a href="https://wa.me/5548984654553" target="_blank">ENTRE EM CONTATO</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar