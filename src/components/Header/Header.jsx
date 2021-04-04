import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GetAppTwoToneIcon from "@material-ui/icons/GetAppTwoTone";

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
    textAlign: "left",
  },
  secondary: {
    fontFamily: "Crimson Pro, serif",
    marginLeft: 25,
    textAlign: "left",
  },
  button: {
    fontFamily: "Crimson Pro, serif",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar>
        <Typography
          variant="h2"
          align="center"
          color="primary"
          noWrap
          className={classes.toolbarTitle}
        >
          John Shands
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          to={process.env.PUBLIC_URL + "ShandsJohn-R.pdf"}
          color="secondary"
          variant="contained"
          endIcon={<GetAppTwoToneIcon />}
        >
          Download Resume
        </Button>
      </Toolbar>
      <Typography
        className={classes.secondary}
        variant="h4"
        color="secondary"
        align="center"
        noWrap
      >
        Full-Stack Developer
      </Typography>
    </React.Fragment>
  );
}
