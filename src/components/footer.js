import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss";

export default () => {

  return (
    <footer className={styles.footer__main}>
      <div>Handcrafted by <Link to="/">Me</Link> | </div>
      <div>&nbsp;© {new Date().getFullYear()}</div>
    </footer>
  )
};