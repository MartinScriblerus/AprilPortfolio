import Layout from './components/MyLayout';

import useSWR from 'swr';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import MyAppStyles from './_app'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Header from './components/Header';

import PropTypes from 'prop-types';



const drawerWidth = 240;

const imageStyle = {
  width:940,
  paddingLeft: 20,
  float: "right",
  marginRight: 0,
  // marginLeft: 310
};



const useStyles = makeStyles(theme => ({
  root: {
    // marginLeft: 120,
    backgroundColor: "#aaf",
    width:'70%'
  },

  title: {
    marginLeft: 10
  },
  qtn: {
    marginLeft: 10
  },
  img: {
    margin: 'auto',
    display: 'inline',
    width: '100%',
    maxHeight: '100%',
  },
  footer :{
    backgroundColor: '#aaf0d1',
    color: '#aaf0d1',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: '100vw'
  },
  MuiBottomNavigation: {
    backgroundColor: '#aaf',
    color: '#aaf0d1',
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



export default function Blog() {
    const classes = useStyles();



  return (
  
    <div className="shiftdiv">
     
      <Typography variant="h2">Matt Reilly</Typography>
     
      <Layout>
    <div>
 
    <div>
   
    <h4 
    className="bio"> I'm a writer, web developer, teacher, and musician from Austin, TX.</h4>    
 
    <video
    autoPlay
    muted
    loop
    style={{
      position: "relative",
      transition: "opacity, 2s ease-in-out",
      width: "100%",
      height: "80vh",
      left: 0,
      top: 0,
      bottom: 0,
      opacity: .6,
      filter: .8
    }}
  >
    <source src="./PraxGreen.mp4" type="video/mp4" />
  </video>
    </div>
    </div>
      </Layout>
 <div>

      </div>
  
 
      </div> 
      
      );
}
