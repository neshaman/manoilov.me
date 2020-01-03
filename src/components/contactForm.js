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

// const StyledButton = withStyles({
//   root: {
//     background: '#16262b',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     '&:hover': {
//       color: 'white'
//     },
//   },

//   label: {
//     textTransform: 'capitalize',
//   },
// })(Button);

export default function ContactForm() {
  const classes = useStyles();

  return (
    <section className={styles.section__contact}>
      <CssBaseline />
      <Container maxWidth="sm">
        <form className={classes.root} name="contact" method="POST" data-netlify="true" autoComplete="off">
          {/* <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p> */}
          <TextField
            fullWidth
            id="standard-name-required"
            type="text"
            name="name"
            label="Your name"
          />
          {/* <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p> */}
          <TextField
            id="standard-email-required"
            type="text"
            name="email"
            label="Your email"
            fullWidth
          />
          {/* <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p> */}
          <TextareaAutosize
            aria-label="message"
            rowsMin={5}
            placeholder="Your message to me"
            name="message"
            type="text"
          />
          {/* <p>
            <button type="submit">Send</button>
          </p> */}
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
