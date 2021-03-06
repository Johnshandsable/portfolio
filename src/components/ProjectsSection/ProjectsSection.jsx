import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectsSection() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginLeft: 10,
      marginRight: 10,
      height: 600,
    },
    description: {
      height: 300,
    },
    link: {
      color: "#6c5ce7",
      fontSize: 18,
    },
    title: {
      color: "black",
      fontSize: 32,
    },
    subTitle: {
      fontFamily: "Crimson Pro, serif",
      fontSize: 22,
    },
    source: {
      fontFamily: "Crimson Pro, serif",
      fontSize: 18,
      paddingLeft: 10,
    },
    cardImage: {
      height: 200,
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "0 auto",
      display: "block",
    },
  });
  const classes = useStyles();

  const projects = [
    {
      title: "Native Plantly",
      img: "screen1.png",
      description: `Native Plantly is a full-stack CRUD application built using
      React, Node, PostgreSQL, and Express. Features include users
      being able to search for native plants by their location. Data
      is populated by NatureServe and Trefle.io. Users can also create
      gardens to add, remove, and edit plants at their will.`,
      source: `https://github.com/Johnshandsable/native-plantly`,
    },
    {
      title: "Group Giphy",
      img: "screen2.png",
      description: `Group Giphy is a search and favoriting
      application which allows the user to save gifs and sort them into categories.
      This project was built over a day and utilizing React, Redux, Redux-Saga and
      integrates them with the Giphy API.`,
      source: `https://github.com/Johnshandsable/group-giphy`,
    },
    {
      title: "Weekend Movie",
      img: "screen3.png",
      description: `Weekend Movie is a full-stack CRUD application built using
      React, Node, PostgreSQL, and Express. Features include users being able to
      search for movies, add movies into the database, and click on movies to
      be able to see descriptions about the movie.`,
      source: `https://github.com/Johnshandsable/weekend-movie`,
    },
    {
      title: "Olive",
      img: "screen4.png",
      description: `Olive is an open-source project designed to track client intake for
      local nonprofits in the Kansas City area. Features include being able to create an
      organization, logging users in for the service, and then track clients and services provided.`,
      source: `https://github.com/Johnshandsable/olive`,
    },
  ];

  return (
    <>
      {projects.map((project) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  component="img"
                  height={200}
                  alt={project.title}
                  image={process.env.PUBLIC_URL + project.img}
                  title={project.title}
                />
                <CardContent className={classes.description}>
                  <Typography
                    gutterBottom
                    className={classes.title}
                    variant="h5"
                    component="h2"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    className={classes.subTitle}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography color="secondary" className={classes.source}>
                  View on GitHub
                </Typography>
                <IconButton>
                  <Link className={classes.link} href={project.source}>
                    <GitHubIcon fontSize="medium" />
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ProjectsSection;
