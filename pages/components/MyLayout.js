import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '80%',
    marginRight: '10%',
    marginLeft: '10%',
    borderStyle: 'solid',
    borderColor: '#148aa3',
    borderWidth: '2px',
    backgroundColor: '#212121',
    color: '#f6f6f6',
    fontSize: '26px',
  },
  h2: {
    color: '#ee7e5b'
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
    color: '#eed55b',
    fontSize: '16px',
    marginLeft: '13%',
    marginRight: '13%'
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

const styles = {
  link: {
    backgroundColor: '#212121',
   
  }
}

export default function SubheaderDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    <h2 className={classes.h2}>Portfolio Links:</h2>
      <ListItem>
        <Link href="//vital-sys.s3-website.us-east-2.amazonaws.com/">
          <a>
        
              VitalSys: A Chaos Tutorial and Demo App
          
          </a>
        </Link>
     

      </ListItem>

      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
   
          Technologies Used: Angular/Typescript, Express, AWS, Docker, PM2, A-Frame, Rita.js, PostgresSQL   
        </Typography>
      </li>




      <ListItem>
        <Link href="//prax-space.com">
              <a>
            
                  Prax: A Tool for Remote Musicians
            
              </a>
            </Link> 

        </ListItem>
      <Divider component="li" variant="inset" />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
          Technologies Used: React, Express, SQL, WebRTC, Sockets, Firestore/Firebase, Web Audio API
    
          </Typography>
        </li>
      
      
        <ListItem>
          <Link style={styles.link} href="//project-2-spotify.herokuapp.com/">
            <a>
            
              Spotify Genre Map: Track Listeners Worldwide
   
            </a>
          </Link>
        </ListItem>
        
        <Divider component="li" />
        <li>
          <Typography
        className={classes.dividerFullWidth}
        color="textSecondary"
        display="block"
        variant="caption"
      >
      Technologies Used: HTML/CSS/Javascript/JQuery, Express, SQL, Mapbox, Heroku  

      </Typography>
      
    </li>
  

      <ListItem>
      <Link href="//slidecast2019.web.app/">
      <a>
     
          SlideCast: Voice-Activated Presentations
     
      </a>
    </Link>
    </ListItem>
    <Divider component="li" />
    <li>
      <Typography
        className={classes.dividerFullWidth}
        color="textSecondary"
        display="block"
        variant="caption"
      >
      Technologies Used: React/Redux, Google Speech-to-Text API

      </Typography>
    </li>
  
 
  
      </List>
    
  );
}


