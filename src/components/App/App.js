import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';

import AboutSection from '../AboutSection/AboutSection';
import TechSection from '../TechSection/TechSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#df4576',
      },
      secondary: {
        main: '#27e8a7',
      },
      type: 'dark',
    },
    typography: {
      fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    },
  });

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      backgroundColor: '#506477',
      marginTop: '10%',
    },
    end: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  }));

  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Grid className={classes.grow} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" color="primary">
                John Shands
              </Typography>
              <Typography variant="h4" color="secondary">
                Full-Stack Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.end}>
              <Button
                component={Link}
                to={process.env.PUBLIC_URL + 'resume.pdf'}
                variant="outlined"
                endIcon={<GetAppTwoToneIcon />}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
          <AboutSection />
          <TechSection />
          <ProjectsSection />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
