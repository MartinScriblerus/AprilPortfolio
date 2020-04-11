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
links: {
  width:100,
backgroundColor: '#0d0d0d'
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


const AlwaysImage = require('../public/hrcover.jpeg');
const ZebraImage = require('../public/hrzebracover.jpg');

export default function Research() {
    const classes = useStyles();



  return (
  
<div className="shiftdivdevelopment">


  <td>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Kidx4Fhj86Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </td>

  
  <img className="photo"
  src={AlwaysImage} 
  style={imageStyle}
  />

<h4>Doug Mosurock Review of Hidden Ritual <i>Always</i></h4>
  <p>With a lingering fear of stagnation in modern music that no amount of millennial whoops can paper over, it’s often those who can best reconfigure the existing pieces and parts of genres and histories that find the most original take on things. Austin’s Hidden Ritual performs this feat with ease on their second album Always. They take minimal, strummy, percussive post-punk (think the Feelies ca. Crazy Rhythms) and couch it in a murky, yet very carefully-filtered environment of reverb, synths, lounge motifs, and stock-still vocalese reminiscent of Ian Curtis or Ian McCullouch. The result is driving yet muted, combining the most effective parts of ‘50s/’60s sleepwalk pop gloom, the malaise of early Felt, Velvets-y strum, and disciplined mope – imagine Broadcast writing a new arrangement to the Chills’ “Pink Frost,” perhaps, and you’re getting warm. I’m sure you could throw another two dozen or so references against Always, and there’d be reason enough for them to stick. Hidden Ritual’s sound of now fits in remarkably well with the season of uncertainty in which we currently walk each day, as well as the decay of autumn and the lengthening of nights as the year inches towards a close. The second half of the record finds the group in more mood-inspiring, soundtrack-ish terrain. There’s not a lot going on in music as specific and put-together as Hidden Ritual right now, and the careful, by-the-numbers way in which they assemble these songs is likely to chafe a select few, but those folks were probably looking for something to hate anyway. It’s hard not to imagine this band taking off in some capacity, as they tick a lot of the boxes that make people seek out this sort of thing. Here’s to seeing where they go next, and to getting well lost in where they are now. (http://www.monofonuspress.com)
</p>

<img className="photo"
src={ZebraImage} 
style={imageStyle}
/>
<br/>
<div className={classes.links}>
</div>
<h2><Link href="https://dustedmagazine.tumblr.com/post/189649991247/dusteds-decade-picks-the-lists">Dusted Magazine 2010s Decade Picks</Link></h2>
<h2><Link href="https://www.imdb.com/name/nm7138532/">Hidden Ritual IMDB</Link></h2>







<Layout >


</Layout>
</div>


 
  

     );
}
