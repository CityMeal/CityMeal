import React from 'react';
import Filter from './Filter'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Rating from './Rating';
import { createMuiTheme, useMediaQuery } from '@material-ui/core';


const themes2 = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 340,
      md: 360,
      lg: 411,
      xl: 700,
      tablet: 760,
      laptop: 1024,
      desktop: 1280,
    },
  }
})

const useStyles = makeStyles((theme) => ({
  zipcodeInput: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '5%',
    position: 'relative',
    top: -4 + 'em',
    left: 3 + 'em',
  },
  divStyle: {
    // border: 'solid green',
    width: '100 %',
    position: 'relative',
    top: '1em',

    // [theme.breakpoints.up('md')]: {
    //   // border: 'solid black',
    //   marginTop: '9em',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   // border: 'solid black',
    //   position: 'absolute',
    //   top: '4em'
    //   // marginTop: '9em',
    // },
    // [themes2.breakpoints.up('tablet')]: {
    //   border: 'solid green',
    //   width: '20em',
    //   margin: '3.2%',
    // },
    // [themes2.breakpoints.up('laptop')]: {
    //   position: 'absolute',
    //   top: '11em'
    // }

  },
  filterDiv: {
    // border: 'solid orange',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    position: 'relative',

    [themes2.breakpoints.between('xs', 'sm')]: {
      // border: 'solid black',
      width: '18em',

    },
    [themes2.breakpoints.up('tablet')]: {
      // border: 'solid pink',
      width: '30em'
    }
  },
  listWrap: {
    // border: 'solid red',
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll',
    boxSizing: 'border-box',

    // [theme.breakpoints.up('md')]: {
    //   // border: 'solid green',
    //   height: '65vh',
    // },
    [theme.breakpoints.up('lg')]: {
      // border: 'solid blue',
      height: '70vh',
    },
    [themes2.breakpoints.up('laptop')]: {
      // border: 'solid blue',
      height: '90vh',
    },

  },
  favBtn: {
    border: 'none',
    backgroundColor: 'white',
    width: '5%',
  },
  list: {
    // border: 0.5 +'px solid black',
    width: '25em',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    margin: '1.5%',
    boxShadow: (2 + 'px ' + 3 + 'px ' + 3 + 'px ' + 2 + 'px ' + ' lightgrey'),

    [themes2.breakpoints.up('tablet')]: {
      // border: 'solid pink',
      width: '22em',
    },
    [themes2.breakpoints.up('laptop')]: {
      width: '35em',
      left: '6%',
      margin: '1em',
    }
  },
  directionBtn: {
    // border: 'solid red',
    position: 'relative',
    left: -0.5 + 'em',
    marginTop: '3%',
    marginBottom: '3%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '8%',
  },
  pic: {
    display: 'flex',
    paddingLeft: '5%',
  },
}));
function constructStreetViewURL(location) {
  let url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${location.latitude},${location.longitude}&key=${process.env.REACT_APP_API_KEY}`
  return url
}

function List(props) {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <div className={classes.filterDiv}>
        <Filter />
        <TextField id="standard-search" label="zipcode" type="search" />
      </div>
      <div addfav={props.addFav} className={classes.listWrap}>
        {props.locations.map(location => (
          <Box className={classes.list} maxWidth="xl" key={location.id} >
            <Box className={classes.pic} borderRadius={16} width={1 / 2}><img height="auto" width="100%" padding-left="3%" src={constructStreetViewURL(location)} alt="map" /></Box>
            <Box className={classes.info} width={1 / 2}>
              <p>{location.name}</p>
              <p>{location.city}</p>
              <Rating />
              <button className={classes.favBtn} onClick={props.addFav} name={location.id}>❤️</button>
              <Button variant="contained" color="primary" className={classes.directionBtn}><a style={{ textDecoration: "none", color: "white" }} href={`https://www.google.com/maps/place/` + location.siteAddress.split(" ").join("+")} target="_blank">GET DIRECTION</a></Button>

            </Box>
          </Box>
        ))}
      </div>
    </div>
  )
}

export default List