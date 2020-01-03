import React from "react"

import Layout from "../components/layout"
import styles from "./index.module.scss";
import SEO from "../components/seo"
import { useSpring, animated } from 'react-spring'

const IndexPage = () => {
  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    }
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section className={`${styles.section__main} ${styles.text_center}`}>
        <div className={`${styles.section__main__top} ${styles.flex_center}`}>
          <animated.h1 style={props}>Nenad Manoilov</animated.h1>
        </div>
        <div className={`${styles.section__main__heading} ${styles.flex_center}`}>
          <p>
            Web Designer and Developer based in San Antonio, Texas
            </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
