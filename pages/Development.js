import Layout from './components/MyLayout';
import Link from 'next/link';
import useSWR from 'swr';
import MyAppStyles from './_app'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Header from './components/Header';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';


const drawerWidth = 240;

const imageStyle = {
  width:600,

  paddingLeft: 0,
  float: "center",
  marginRight: 0,
  marginLeft: 0
};

const PraxImage = require('../public/Prax.png');
const SpotImage = require('../public/Spot.png');
const SlideImage = require('../public/SlideCast.png');
// const backImage = require('../public/IMG_0341.png');
// const backImage = require('../public/IMG_0341.png');


const useStyles = makeStyles(theme => ({
toproot: {
    marginTop: 20,
    flexGrow: 1,
    fontSize: 20,
    paddingRight: 20,
   
    padding: 10,
    marginLeft: 150,
    backgroundColor: "#6387A6",
    marginLeft: 130
    
},
  root: {
 
    flexGrow: 1,
    fontSize: 20,
    paddingRight: 20,
   
    padding: 10,
    marginLeft: 130,
    backgroundColor: "#6387A6",
    marginLeft: 130
    
  },
  img: {
    margin: 'auto',
    display: 'inline',
marginBottom: 15
  },
  title: {
    marginLeft: 140,
    marginTop: 20,
    fontSize: 40,
    
  },
  qtn: {
    marginLeft: 130
  },
 
  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),

  },

}),

);


function fetcher(url) { 
  return fetch(url).then(r => r.json());

}


export default function Research() {
    const classes = useStyles();



  return (
  
<div className="shiftdivdevelopment">


  <td>
    <img className="photo"
    src={SlideImage} 
    style={imageStyle}
    />
  </td>
  <Link href="https://polar-caverns-23158.herokuapp.com/">  SlideCast: Voice-Activated Presentations
</Link>
  



  <td>
    <img className="photo"
    src={SpotImage} 
    style={imageStyle}
    />
  </td>
  <Link href="https://project-2-spotify.herokuapp.com/">Spotify Genre Map: Track Listeners Worldwide
</Link>


  <td>
    <img className="photo"
    src={PraxImage} 
    style={imageStyle}
    />
  </td>
  <tr>Prax: A Tool for Remote Musicians (forthcoming)
</tr>



<Layout >


</Layout>
</div>


 
  

     );
}
