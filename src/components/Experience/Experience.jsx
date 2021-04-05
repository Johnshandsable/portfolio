import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Experience() {
  const useStyles = makeStyles({
    title: {
      color: 'black',
      fontSize: 32,
    },
    subTitle: {
      fontFamily: 'Crimson Pro, serif',
      fontSize: 22,
    },
  });
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <center>
        <img
          src="https://img.icons8.com/clouds/100/000000/source-code.png"
          alt="frontend icon"
        />
        <Typography className={classes.title} gutterBottom>
          Frontend
        </Typography>
        <li>HTML / CSS</li>
        <li>SASS / LESS</li>
        <li>Javascript / jQuery </li>
        <li>React / Redux / Sagas</li>

        <img
          src="https://img.icons8.com/clouds/100/000000/server.png"
          alt="server icon"
        />
        <Typography className={classes.title} gutterBottom>
          Server
        </Typography>
        <li>Express / Node</li>
        <li>Javascript</li>
        <li>Python / Django / Flask</li>
        <li>REST API Design</li>

        <img
          src="https://img.icons8.com/clouds/100/000000/data-configuration.png"
          alt="database icon"
        />
        <Typography className={classes.title} gutterBottom>
          Database
        </Typography>
        <li>Mongo DB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
      </center>
    </Grid>
  );
}

export default Experience;
