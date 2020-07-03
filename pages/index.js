
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import SubheaderDividers from './components/MyLayout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Image from 'material-ui-image';
import { StylesProvider } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     color:'#ee7e5b',
//     backgroundColor:'#ee7e5b',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: '#ee7e5b',
//     backgroundColor:'#ee7e5b',
//   },
// }));

const styles = {
  link: {
    backgroundColor: '#212121',
   
  }
}

export default function Blog() {
  // const classes = useStyles();

  return (
 
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper id="titlePaper"><h1>Matt Reilly</h1></Paper>
       


     

        </Grid>
   
        <Grid item xs={8}>
          <Paper className="webDev"><h3>Full Stack Web Developer with a B.A. in English from Haverford College and a PhD in English from UT Austin.</h3></Paper>
         <Paper className="webDev2"><h3>Skills include: HTML5, CSS3, Javascript, JQuery, Node, MySQL, Postgres, Mongo, APIs, Angular, React, Redux, React-Native, Next, GraphQL, Docker, AWS, Google Cloud, Unity, Python.</h3></Paper>
          </Grid>
        <Grid item xs={4}>
        <Image 
        className="photo"
        src="../static/reilly_portfolio.png"
      />
        </Grid>


        <SubheaderDividers/>


      <Grid id="footer" item xs={12}>
      <SocialIcon className="icon" url="https://www.linkedin.com/in/matthew-reilly-91b316142/"/>
      <SocialIcon className="icon" url="https://twitter.com/A00PE"/>
      <SocialIcon className="icon" url="https://github.com/MartinScriblerus"/>
      </Grid>
</Grid>
  );
}
























