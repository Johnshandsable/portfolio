import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h1"
          align="center"
          color="primary"
          className={classes.toolbarTitle}
        >
          John Shands
        </Typography>
        <Button
          component={Link}
          to={process.env.PUBLIC_URL + 'ShandsJohn-R.pdf'}
          color="secondary"
          variant="outlined"
          endIcon={<GetAppTwoToneIcon />}
        >
          Download Resume
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
