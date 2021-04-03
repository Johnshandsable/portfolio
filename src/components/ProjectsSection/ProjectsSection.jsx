import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function ProjectsSection() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
  });

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Native Plantly"
              height="300"
              image={process.env.PUBLIC_URL + 'screen1.png'}
              title="Native Plantly"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Native Plantly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Native Plantly is a full-stack CRUD application built using
                React, Node, PostgreSQL, and Express. Features include users
                being able to search for native plants by their location. Data
                is populated by NatureServe and Trefle.io. Users can also create
                gardens to add, remove, and edit plants at their will.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Native Plantly"
              height="300"
              image={process.env.PUBLIC_URL + 'screen1.png'}
              title="Native Plantly"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A group project built over a day and a half. Group Giphy is a
                robust full-stack application built with the Giphy API. Users
                are able to store their favorite gifs, search for gifs, and
                delete gifs from their favorites list.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProjectsSection;
