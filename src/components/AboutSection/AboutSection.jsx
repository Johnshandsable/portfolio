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
          d="M0,256L0,32L72,32L72,288L144,288L144,128L216,128L216,288L288,288L288,128L360,128L360,288L432,288L432,160L504,160L504,0L576,0L576,32L648,32L648,128L720,128L720,64L792,64L792,288L864,288L864,128L936,128L936,320L1008,320L1008,288L1080,288L1080,96L1152,96L1152,64L1224,64L1224,96L1296,96L1296,192L1368,192L1368,128L1440,128L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z"
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
