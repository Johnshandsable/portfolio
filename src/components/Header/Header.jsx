import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
    textAlign: 'left',
    width: '100%',
  },
  secondary: {
    fontFamily: 'Crimson Pro, serif',
    marginLeft: 25,
    textAlign: 'left',
  },
  button: {
    fontFamily: 'Crimson Pro, serif',
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
          download
          href={process.env.PUBLIC_URL + 'ShandsJohn-R.pdf'}
          color="secondary"
          variant="contained"
          starticon={<GetAppIcon />}
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
