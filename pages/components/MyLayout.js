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

const styles = {
  link: {
    backgroundColor: '#212121',
   
  }
}

export default function SubheaderDividers() {
  // const classes = useStyles();

  return (
    <List id="bigList">
      <h2 >Portfolio Links:</h2>
      <ListItem>
  
          <a href="//vital-sys.s3-website.us-east-2.amazonaws.com/">
        
              VitalSys: A Chaos Tutorial and Demo App
          
          </a>
     
     

      </ListItem>

      <Divider component="li" />
      <li>
        <div
          className="dividerFullWidth"
          
         
          display="block"
          variant="caption"
        >
   
          Technologies Used: Angular/Typescript, Express, AWS, Docker, PM2, A-Frame, Rita.js, PostgresSQL   
        </div>
      </li>




      <ListItem>
    
              <a href="//prax-space.com">
            
                  Prax: A Tool for Remote Musicians
            
              </a>
         

        </ListItem>
      <Divider component="li" variant="inset" />
        <li>
          <div
          className="dividerFullWidth"
            
            display="block"
            variant="caption"
          >
          Technologies Used: React, Express, SQL, WebRTC, Sockets, Firestore/Firebase, Web Audio API
    
          </div>
        </li>
      
      
        <ListItem>
        
            <a style={styles.link} href="//project-2-spotify.herokuapp.com/">
            
              Spotify Genre Map: Track Listeners Worldwide
   
            </a>
       
        </ListItem>
        
        <Divider component="li" />
        <li>
          <div
          className="dividerFullWidth"
       
        display="block"
        variant="caption"
      >
      Technologies Used: HTML/CSS/Javascript/JQuery, Express, SQL, Mapbox, Heroku  

      </div>
      
    </li>
  

      <ListItem>
 
      <a href="//slidecast2019.web.app/">
     
          SlideCast: Voice-Activated Presentations
     
      </a>

    </ListItem>
    <Divider component="li" />
    <li>
      <div
        className="dividerFullWidth"
      
        display="block"
        variant="caption"
      >
      Technologies Used: React/Redux, Google Speech-to-Text API

      </div>
    </li>
  
 
  
      </List>
    
  );
}


