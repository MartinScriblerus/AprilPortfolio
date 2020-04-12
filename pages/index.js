import Layout from './components/MyLayout';
import Link from 'next/link';
import useSWR from 'swr';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import MyAppStyles from './_app'
import { SocialIcon } from 'react-social-icons';
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
  width:940,
  paddingLeft: 50,
  float: "right",
  marginRight: 0,
  marginLeft: 310
};

const backImage = require('../public/IMG.png');


const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 130,
    paddingTop: 5,
    color: '#1E2732'
  },
 
  title: {
    marginLeft: 100
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
  footer :{
    backgroundColor: '#0d0d0d',
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



export default function Blog() {
    const classes = useStyles();

    // const { data, error } = useSWR('/api/randomQuote', fetcher);
    // // The following line has optional chaining, added in Next.js v9.1.5,
    // // is the same as `data && data.author`
    // const author = data?.author;
    // let quote = data?.quote;

    // if (!data) quote = 'Loading...';
    // if (error) quote = 'Failed to fetch the quote.';


  return (
  
    <div className="shiftdiv">
      <div className={classes.root}>
      <Typography variant="h1"
      className={classes.title}
      >Matt Reilly</Typography>
      </div>
      <Layout >
    <div>
    <img className="photo"
    src={backImage} 
    style={imageStyle}
    />
    <div>
    <h1 
    className="bio"
    > I'm a writer, web developer, teacher, and musician from Austin, TX.</h1>    
    </div>
    </div>
    
      </Layout>
 
      <BottomNavigation className={classes.footer}>
      <SocialIcon className={classes.root} url="https://www.linkedin.com/in/matthew-reilly-91b316142/"/>
      <SocialIcon className={classes.root} url="https://twitter.com/A00PE"/>
      <SocialIcon className={classes.root} url="https://github.com/MartinScriblerus"/>
      </BottomNavigation>
      </div>
    
      );
}
