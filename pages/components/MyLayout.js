import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
const backImage = require('../../public/IMG_0341.png');





const layoutStyle = {
  margin: 0,
  padding: 0,
  border: '2px solid #5f4b8b',

 
};

const imageStyle = {
  width: 400,
  padding: 40,
  
};

const Layout = props => (
  <div style={layoutStyle}>
   <Grid>
  <Header />
    {props.children}
    
    <img 
      src={backImage} 
      style={imageStyle}
      />
      </Grid>


  </div>
);

export default Layout;