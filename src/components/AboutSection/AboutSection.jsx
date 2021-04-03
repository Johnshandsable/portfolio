import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function AboutSection() {
  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h4">About</Typography>
        <Typography variant="h5">
          Hello 👋 I'm John. I'm a full-stack developer with a brief history in
          Data Management.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutSection;
