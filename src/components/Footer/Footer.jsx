import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(4, 0),
      position: "relative",
      width: "100%",
      bottom: 0,
      height: 100,
    },
    link: {
      color: "black",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    footerTitle: {
      color: "black",
      fontFamily: "Crimson Pro, serif",
      fontSize: 20,
    },
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <IconButton>
          <Link
            className={classes.link}
            href="https://github.com/Johnshandsable"
          >
            <GitHubIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link
            className={classes.link}
            color="inherit"
            href="https://www.linkedin.com/in/john-shands/"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </IconButton>
        <center>
          <Typography className={classes.footerTitle}>
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              John Shands
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </center>
      </Container>
    </footer>
  );
}

export default Footer;
