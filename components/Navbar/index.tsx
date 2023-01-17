import styles from './navbar.module.scss'
import React, { useState } from 'react'

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1>{title}</h1>
        <i className="fa-solid fa-mug-hot"></i>
      </div>
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

      <a className={isOpen ? styles.icon : styles.iconActive} onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-bars fa-xl"></i></a>

      <a className={isOpen ? styles.iconActive : styles.close} onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-xmark fa-xl"></i></a>

      {isOpen && (
        <ul className={styles.mobileMenu}>
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
      )}

    </nav>
  )
}

export default Navbar