import Layout from './components/MyLayout';
import Link from 'next/link';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


import Drawer from '@material-ui/core/Drawer';




const drawerWidth = 240;

const imageStyle = {
  width:"60%",
  paddingLeft: 50,
  float: "right",
  marginRight: 0,
  marginLeft: 30,
  color: "#030303"
};



const useStyles = makeStyles(theme => ({

  root: {
    width:"60%",
    paddingLeft: 10,
    paddingRight: 10,
    float: "right",
    marginRight: 0,
    marginLeft: 10,
    color: "#030303",
    flexGrow: 1,
    fontSize: 20,
    paddingRight: 10,
   marginTop: 10,
    padding: 10,

   
    
  },
  img: {
    margin: 'auto',
    display: 'inline',

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
    width: '60%',
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






export default function About() {
    const classes = useStyles();


  return (
  
    <div className="shiftdivabout">
    
      <Typography variant="h3"
   
      >About</Typography>
 
 
   
      <div>

   
      <h2 > 
      Full Stack Web Developer with a B.A. in English from Haverford College and a PhD in English from UT Austin. <br></br>
      </h2>   <h4>Skills include: HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node, MySQL, Postgres, Mongo, Node, APIs, Express, Angular, React, Redux, React-Native, Next, GraphQL, Typescript, Docker, AWS Services, Unity, Python, Agile, DevOps, Unity. </h4>
   
     </div>
    <Layout >

      </Layout>
  

    </div>
      );
}
