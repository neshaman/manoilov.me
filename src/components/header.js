import { Link } from "gatsby"
import React, { useState } from "react"
import styles from "./header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header__main}>
      <button className={menuOpen ? `${styles.menu_button} ${styles.menu_open}` : `${styles.menu_button}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={styles.menu_button__burger}></div>
      </button>
      <nav className={menuOpen ? `${styles.menu_open} ${styles.nav_menu}` : `${styles.nav_menu}`}>
        <Link to="#">Web Development</Link>
        <Link to="#">Photography & Video Editing</Link>
        <Link to="#">3D Animation</Link>
        <Link to="#">Contact Me</Link>
      </nav>
    </header>
  )
}

export default Header;
