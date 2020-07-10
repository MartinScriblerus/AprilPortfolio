import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Image from "material-ui-image"
// next.config.js

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '80%',
//     marginRight: '10%',
//     marginLeft: '10%',
//     marginTop: '5%',
//     borderStyle: 'solid',
//     borderColor: '#ee7e5b',
//     borderWidth: '2px',
//     backgroundColor: '#212121',
//     color: '#f6f6f6',
//     fontSize: '26px',
//   },
//   h2: {
//     color: '#148aa3'
//   },
//   dividerFullWidth: {
//     margin: `15px 0 0 ${theme.spacing(2)}px`,
//     color: '#eed55b',
//     fontSize: '16px',
//     marginLeft: '13%',
//     marginRight: '13%'
//   },
//   dividerInset: {
//     margin: `15px 0 0 ${theme.spacing(9)}px`,
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const styles = {
  link: {
    backgroundColor: '#212121',
   
  }
}



export default function SubheaderDividers() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <List id="bigList">
      <h2 >Portfolio Links:</h2>


  <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="VitalSys"
          width= "100%"
          image="/static/VitalSysImg.png"
          title="VitalSys"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            VitalSys
          </Typography>
          <Typography variant="body2"  component="p">
       
          A system and tutorial demonstrating the capabilities of chaos engineering. While it may sound like a frightening concept, chaos engineering is actually a constructive, commonly used practice that originated at Netflix and has been adopted by companies like Microsoft, Facebook, and Visa. The chaos engineer causes controlled failures to test the vulnerabilities and weaknesses of a complex, distributed system. They make the system resilient enough to withstand network outages that are inevitable in cloud-based deployments with many moving parts and interdependencies.
         
       
This site uses containerization and service-oriented architecture to create system that rebuilds itself when you break it. We've encased a flock of paper planes in a VR canvas and provided a button that causes random destruction in this canvas. Each paper plane is actually a clone of our 'litbot' service, which is designed to output a Markov Chain-generated text (based on John Milton's depictions of Chaos in Paradise Lost) at the moment a plane goes down. The flock of circling planes visualizes our system of litbot services, which will replenish its number after destruction and stay up-and-running in spite of temporary chaos.
      
   
          Technologies Used: Angular/Typescript, Express, AWS, Docker, PM2, A-Frame, Rita.js, PostgresSQL   
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="//vital-sys.s3-website.us-east-2.amazonaws.com/" size="small" color="primary">
   
          VitalSys
          
        </Button>
        <Button href="//github.com/MartinScriblerus/vitalsys-backend" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


      


      <Divider component="li" />
 


    

      
    

      <Card >
      <CardActionArea>
        <CardMedia
          autoPlay={true}
          loop={true}
          component="video"
          height="100%"
          alt="Prax"
          image="/static/PraxVid.mp4"
          title="Prax"
          controls
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Prax
          </Typography>
          <Typography variant="body2"  component="p">
          This is a minimal implementation of a WebRTC audio/video connection. The audio/video stream works along with the latency-based metronome, but I will be updating this project over the coming months. The existing GitHub repository contains additional code for a computer-vision animated overlay with Tensorflow Posenet computer vision, as well as tools for pitch detection and remote synchronization. See the deployed site at prax-space.com
          Technologies Used: React, Express, SQL, WebRTC, Sockets, Firestore/Firebase, Web Audio API
    
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="//prax-space.com" size="small" color="primary">
          Prax
        </Button>
        <Button href="//github.com/MartinScriblerus/Prax" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>



      <Divider component="li" variant="inset" />
   
      
      




        <Card >
        <CardActionArea>
          <CardMedia
          autoPlay={true}
          loop={true}
          component="video"
          alt="Spotify Genre Map"
          width= "100%"
          image="/static/SpotifyGenreMapVid.mp4"
          title="Spotify Genre Map"
          controls
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Spotify Genre Map
            </Typography>
            <Typography variant="body2"  component="p">
            Four person collaboration that scrapes and maps Spotify's global listener data. Visualizes the top fifty cities for each of Spotify's 3,000 microgenres. Supplements Spotify by providing much-needed localization and genre-based data, which may be helpful for musicians planning a tour or marketers incorporating music into a regional campaign. Devised concept, implemented mapping functionality, and captured backend genre and geo data on the front end.
            Technologies Used: HTML/CSS/Javascript/JQuery, Express, SQL, Mapbox, Heroku  

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="//project-2-spotify.herokuapp.com/" size="small" color="primary">
            Spotify Genre Map
          </Button>
          <Button href="//github.com/luke-ols0/Spotify-Webscraper-Genre-Map" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
  


     
        
        <Divider component="li" />
        <li>
          <div
          className="dividerFullWidth"
       
        display="block"
        variant="caption"
      >
  
      </div>
      
    </li>
  

    <Card >
    <CardActionArea>
      <CardMedia
        component="img"
        alt="SlideCast"
        width= "100%"
        image="/static/SlidecastImage.png"
        title="SlideCast"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          SlideCast
        </Typography>
        <Typography variant="body2" component="p">
        Slidecast is a collaborative project that enables customizable voice control of Google Slides. The site not only aims to free public speakers from distracting clicking and confinement behind a computer, but it also opens the possibility for non-linear, voice-responsive slide changes. After signing in with Google authentication and granting access to their computer's microphone, a user may either build out their presentation by importing an existing Google Slideshow, or they may create a new Slideshow with images sourced from the Met's extensive API. After importing images, the user may attach keywords to invoke individual slides with their voice.
        Technologies Used: React/Redux, Google Speech-to-Text API

        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button href="//slidecast2019.web.app/" size="small" color="primary">
       SlideCast
      </Button>
      <Button href="//github.com/MartinScriblerus/SlidecastDeploy" size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>


   

    <Divider component="li" />
   
  

    



  
      </List>
    
  );
}


