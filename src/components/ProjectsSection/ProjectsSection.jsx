import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CodeIcon from "@material-ui/icons/Code";

function ProjectsSection() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      // backgroundColor: "#b2bec3",
      marginLeft: 10,
      marginRight: 10,
      height: 425,
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
      description: `Native Plantly is a full-stack CRUD application built using
      React, Node, PostgreSQL, and Express. Features include users
      being able to search for native plants by their location. Data
      is populated by NatureServe and Trefle.io. Users can also create
      gardens to add, remove, and edit plants at their will.`,
      source: `https://github.com/Johnshandsable/native-plantly`,
    },
    {
      title: "Weekend Movie",
      img: "screen3.png",
      description: `Native Plantly is a full-stack CRUD application built using
      React, Node, PostgreSQL, and Express. Features include users
      being able to search for native plants by their location. Data
      is populated by NatureServe and Trefle.io. Users can also create
      gardens to add, remove, and edit plants at their will.`,
      source: `https://github.com/Johnshandsable/native-plantly`,
    },
    {
      title: "Olive",
      img: "screen4.png",
      description: `Native Plantly is a full-stack CRUD application built using
      React, Node, PostgreSQL, and Express. Features include users
      being able to search for native plants by their location. Data
      is populated by NatureServe and Trefle.io. Users can also create
      gardens to add, remove, and edit plants at their will.`,
      source: `https://github.com/Johnshandsable/native-plantly`,
    },
  ];

  return (
    <>
      {projects.map((project) => {
        return (
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.title}
                  image={process.env.PUBLIC_URL + project.img}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary" endIcon={<CodeIcon />}>
                  View Source
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ProjectsSection;
