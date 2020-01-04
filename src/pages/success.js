import React from 'react';
import Helmet from 'react-helmet';
import styles from "./index.module.scss"
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(mainTheme => ({
  margin: {
    margin: '2em 0',
  },
}));

export default function Success(props) {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Success Page</title>
        <meta name="description" content="Success Page" />
      </Helmet>
      <section className={`${styles.section__main} ${styles.text_center}`}>
        <div className={`${styles.section__main__top} ${styles.flex_center}`}>
          <h1>Thank you for contacting me!</h1>
        </div>
        <div className={`${styles.section__main__heading} ${styles.flex_center}`}>
          <p>
            I'll get back to you as soon as I can
            <br />
            <Link className={classes.margin} href="/" color="inherit">
              Go Back/Continue
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
