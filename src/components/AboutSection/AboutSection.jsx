import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function AboutSection() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#b2bec3",
      marginLeft: 10,
      marginRight: 10,
      height: 265,
    },
    title: {
      fontSize: 30,
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card className={classes.root}>
        <CardContent>
          <center>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              About
            </Typography>
            <Typography gutterBottom>
              Hello, I'm John 👋 I'm a full-stack developer with a history in
              Data Management and building data pipelines. Most of my experience
              is with SQL, R, and Python for general-purpose applications and
              scripting.
            </Typography>
          </center>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AboutSection;
