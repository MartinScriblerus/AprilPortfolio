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
  width:350,
  height: 350,
  paddingLeft: 0,
  float: "center",
  marginRight: 0,
  marginLeft: 0
};

const ECSImage = require('../public/ECS_Cover.png');
const MPImage = require('../public/ECF_Cover.jpeg');
const ECFImage = require('../public/MP_Cover.jpeg');
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
    backgroundColor: "#E13A41",
    marginLeft: 130
    
},
  root: {
 
    flexGrow: 1,
    fontSize: 20,
    paddingRight: 20,
   
    padding: 10,
    marginLeft: 130,
    backgroundColor: "#E13A41",
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

    // const { data, error } = useSWR('/api/randomQuote', fetcher);
    // // The following line has optional chaining, added in Next.js v9.1.5,
    // // is the same as `data && data.author`
    // const author = data?.author;
    // let quote = data?.quote;

    // if (!data) quote = 'Loading...';
    // if (error) quote = 'Failed to fetch the quote.';


  return (
  

 <div className="publications">  

    <div className="shiftdivresearch">
 

      <h1
      className={classes.title}
      >Selected Research</h1>
    
 
   
   
       <p className={classes.toproot}> 
      Double Agent: Alexander Pope and the Afterlives of Scriblerian Satire (under review / forthcoming book)</p>
       <p className={classes.root}> 
      “The Life and Literary Fictions of May Drummond, Quaker Female Preacher.” Eighteenth-Century 
      Fiction, 28.2 (2016): 287–312.</p>
      <p className={classes.root}> 
      “Byron’s Babel: Scriblerian Orientalism and the Romantic-Era Pope Controversy.” Modern Philology, 
      113.2 (2015): 224–45.</p> 
      <p className={classes.root}> 
      “‘No Eye has seen nor Ear has heard’: Arabic Sources for Quaker Subjectivity in Unca Eliza 
      Winkfield’s The Female American.” Eighteenth-Century Studies, 44.2 (2011): 261–85. 
     </p> 
    <p className={classes.root}> 
    Within's Wonderscope App Offers a Portal to Educational AR via Clio's Cosmic Quest Game. Next Reality (September 9 2019)
    </p> 
     <Layout >

      </Layout>
  
</div>
</div>
      );
}
