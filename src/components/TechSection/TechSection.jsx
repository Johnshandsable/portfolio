import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function TechSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'monaco',
            }}
          >
            Languages
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            style={{
              fontFamily: 'monaco',
            }}
          >
            <li>HTML / CSS</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'monaco',
            }}
          >
            Tools / Frameworks
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            style={{
              fontFamily: 'monaco',
            }}
          >
            <li>Bootstrap / Material UI</li>
            <li>Git / GitHub</li>
            <li>Node / Express</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Redux / Sagas</li>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TechSection;
