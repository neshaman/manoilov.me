import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import styles from "./contactForm.module.scss";

const useStyles = makeStyles(mainTheme => ({
  root: {
    '& > *': {
      margin: mainTheme.spacing(1),
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

export default function ContactForm() {
  const classes = useStyles();

  return (
    <section className={styles.section__contact}>
      <CssBaseline />
      <Container maxWidth="sm">
        <form
          action="/success"
          className={classes.root}
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          autoComplete="off"
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
            rowsMin={5}
            placeholder="Your message to me"
            name="message"
            type="text"
          />
          <div data-netlify-recaptcha="true"></div>
          <ThemeProvider theme={theme}>
            <p className={styles.center}>
              <Button
                // variant="contained"
                type="submit"
                disableElevation
                color="primary"
                className={styles.primary_btn}
              >
                Send to Me
              </Button>
            </p>
          </ThemeProvider>
        </form>
      </Container>
    </section>
  )
}
