import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

// Material UI
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import AboutSection from "../AboutSection/AboutSection";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2d3436",
      },
      secondary: {
        main: "#6c5ce7",
      },
      type: "light",
    },
    typography: {
      fontFamily: "'Dancing Script', cursive",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Grid container spacing={3}>
            <AboutSection />
            <ProjectsSection />
            <Experience />
            <Footer />
          </Grid>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
