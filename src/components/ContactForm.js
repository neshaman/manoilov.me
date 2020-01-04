import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import styles from "./contactForm.module.scss";

const useStyles = makeStyles(mainTheme => ({
  root: {
    '& > *': {
      margin: mainTheme.spacing(2),
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <section className={styles.section__contact}>

      <CssBaseline />
      <Container maxWidth="md">
        <h2 className={styles.section__title}>Get in Touch</h2>
        <p>Drop me a note, idea or question and and I'll get back to you as soon as possible.</p>
        <form
          className={`${classes.root} ${styles.form_font}`}
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            fullWidth
            id="standard-name-required"
            type="text"
            name="name"
            label="Your name"
            className={styles.form_font}
          />
          <TextField
            id="standard-email-required"
            type="text"
            name="email"
            label="Your email"
            fullWidth
          />
          <TextareaAutosize
            aria-label="message"
            rowsMin={7}
            placeholder="Your message to me"
            name="message"
            type="text"
            className={styles.contactArea}
          />
          <div data-netlify-recaptcha="true"></div>
          <p className={styles.center}>
            <button
              type="submit"
              className={styles.primary_btn}
            >
              Send to Me
              </button>
          </p>
        </form>
      </Container>
    </section>
  )
}
