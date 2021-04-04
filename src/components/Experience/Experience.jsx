import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Experience() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#b2bec3",
      marginLeft: 10,
      marginRight: 10,
      height: 265,
    },
    title: {
      fontSize: 24,
    },
  });
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Card className={classes.root}>
          <CardContent>
            <center>
              <img src="https://img.icons8.com/clouds/100/000000/source-code.png" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Frontend
              </Typography>
              <li>HTML / CSS</li>
              <li>SASS / LESS</li>
              <li>Javascript / jQuery </li>
              <li>React / Redux / Sagas</li>
            </center>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Card className={classes.root}>
          <CardContent>
            <center>
              <img src="https://img.icons8.com/clouds/100/000000/server.png" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Server
              </Typography>
              <li>Express / Node</li>
              <li>Javascript</li>
              <li>Python / Django / Flask</li>
              <li>REST API Design</li>
            </center>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Card className={classes.root}>
          <CardContent>
            <center>
              <img src="https://img.icons8.com/clouds/100/000000/data-configuration.png" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Database
              </Typography>
              <li>Mongo DB</li>
              <li>SQL</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </center>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Experience;
