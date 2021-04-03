import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AboutSection from '../AboutSection/AboutSection';
import Header from '../Header/Header';
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
          <Header />
          {/* <AboutSection />
          <TechSection />
          <ProjectsSection /> */}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
