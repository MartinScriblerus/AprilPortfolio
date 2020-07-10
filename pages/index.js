
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import SubheaderDividers from './components/MyLayout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Image from 'material-ui-image';
import { StylesProvider } from '@material-ui/core';



const styles = {
  link: {
    backgroundColor: '#212121',
   
  }
}

export default function Blog() {
  // const classes = useStyles();

  return (
 
      <Grid container spacing={3}>
     
    
      <Grid id="header" item xs={5}>
          <Image 
          className="photo"
          src="../static/reilly_portfolio.png"
        />
      </Grid>

      <Grid id="header" item xs={7}>
    <h1>Matt Reilly</h1>
    <Paper className="webDev"><h3>Web Developer from Austin, TX with a PhD in English from UT Austin.</h3></Paper>
    <Paper className="webDev2"><h3>Skills include: HTML5, CSS3, Javascript, JQuery, Node, MySQL, Postgres, Mongo, APIs, Angular, React, Redux, React-Native, Next, GraphQL, Docker, AWS, Google Cloud, Unity, Python.</h3></Paper>

      </Grid>

  

  
      <Grid id="leftGrid" item xs={12}>
   
        <SubheaderDividers/>
        <Grid id="icons" item xs={12}>
        <SocialIcon url="https://www.linkedin.com/in/matthew-reilly-91b316142/"/>
        <SocialIcon url="https://twitter.com/A00PE"/>
        <SocialIcon url="https://github.com/MartinScriblerus"/>
        </Grid>
      <Grid item xs={12}>

   </Grid>
    </Grid>  
  

      
  
 
</Grid>
  );
}
























