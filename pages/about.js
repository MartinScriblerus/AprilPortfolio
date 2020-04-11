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
  width:470,
  paddingLeft: 50,
  float: "right",
  marginRight: 0,
  marginLeft: 310
};

const backImage = require('../public/IMG_0341.png');


const useStyles = makeStyles(theme => ({

  root: {
 
    flexGrow: 1,
    fontSize: 20,
    paddingRight: 20,
   marginTop: 10,
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
    marginLeft: 30,
    fontSize: 40
  },
  qtn: {
    marginLeft: 130
  },
  img: {
    margin: 'auto',
    display: 'inline',
    width: '100%',
    maxHeight: '100%',
    
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



export default function About() {
    const classes = useStyles();

    const { data, error } = useSWR('/api/randomQuote', fetcher);
    // The following line has optional chaining, added in Next.js v9.1.5,
    // is the same as `data && data.author`
    const author = data?.author;
    let quote = data?.quote;

    if (!data) quote = 'Loading...';
    if (error) quote = 'Failed to fetch the quote.';


  return (
  
    <div className="shiftdivabout">
      <div className={classes.root}>
      <h1
      className={classes.title}
      >About</h1>
      </div> 
 
   
      <div>
      <img className="photo"
      src={backImage} 
      style={imageStyle}
      />
   
      <h4 className={classes.root}> 
      Full Stack Web Developer with a B.A. in English from Haverford College and a PhD in English from UT Austin. 
      Writer of peer-reviewed publications and popular journalism on topics like frontier technology and the history
      of satire. Web designer with skills in Javascript, React, Java, SQL, and GraphQL, and with particular interests in 
      voice capture and text analysis, AV media streaming, mixed reality, mapmaking, and data science for the arts. Longtime educator 
      and instructor at Austin Community College, who is well-positioned to thrive in the new world of remote teaching and teamwork. 
      When I'm not researching and developing, I'm either playing music in the Austin band Hidden Ritual or enjoying life with my wife and one-year old son. 
     </h4>  
     </div>
    <Layout >

      </Layout>
  

    </div>
      );
}
