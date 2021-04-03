import './App.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      backgroundColor: '#506477',
    },
    end: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.grow} container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{
              fontFamily: 'monaco',
              color: '#df4576',
            }}
          >
            John Shands
          </Typography>
          <Typography
            variant="h4"
            style={{
              color: '#27e8a7',
            }}
          >
            Full-Stack Developer
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.end}>
          <Button variant="outlined">Resume</Button>
          <Button variant="outlined">Projects</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
