import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function AboutSection() {
  const useStyles = makeStyles({
    root: {
      width: "99%",
      marginLeft: 10,
      marginRight: 10,
      minHeight: "30%",
    },
    title: {
      color: "black",
      fontSize: 32,
    },
    subTitle: {
      fontFamily: "Crimson Pro, serif",
      fontSize: 22,
      marginLeft: "25%",
      marginRight: "25%",
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#74b9ff"
          fillOpacity={1}
          d="M0,320L96,160L192,96L288,96L384,32L480,256L576,128L672,192L768,192L864,160L960,192L1056,96L1152,320L1248,160L1344,160L1440,64L1440,0L1344,0L1248,0L1152,0L1056,0L960,0L864,0L768,0L672,0L576,0L480,0L384,0L288,0L192,0L96,0L0,0Z"
        ></path>
      </svg>
      <center>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          About
        </Typography>
        <Typography className={classes.subTitle} gutterBottom>
          Hello, I'm John 👋 I'm a full-stack developer with a history in Data
          Management and building data pipelines.
        </Typography>

        <Typography
          className={classes.title}
          gutterBottom
          style={{
            marginTop: 40,
          }}
        >
          Projects
        </Typography>
      </center>
    </Grid>
  );
}

export default AboutSection;
