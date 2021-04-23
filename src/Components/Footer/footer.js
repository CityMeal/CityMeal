import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="h6" style={{ color: "#D9D9D9" }} >
      ©2021CityMeal
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh', (to make the footer sticky)
  },
  footer: {
    // border: 'solid red',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '1%',
    paddingBottom: '1%',
    backgroundColor: '#325288',
    color: '#D9D9D9',
  },
  copyright: {
    display: 'flex',
    alignItems: 'flex-end'
  }
}));


function Footer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="xl">
          {/* <Link color="inherit" href="https://material-ui.com/"><Typography variant="h6">About CityMeal</Typography></Link>
          <Link color="inherit" href="https://material-ui.com/"><Typography variant="h6">About Team</Typography></Link>
          <Link color="inherit" href="https://material-ui.com/"><Typography variant="h6">Contact</Typography></Link> */}
          {/* <Typography variant="h6">About CityMeal</Typography>
          <Typography variant="h6">About Team</Typography>
          <Typography variant="h6">Contact</Typography> */}
        </Container>
        <div className={classes.copyright} >
          <Container maxWidth="xl">
            <Copyright />
          </Container>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
