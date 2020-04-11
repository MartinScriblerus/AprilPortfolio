import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';


const useStyles = makeStyles(theme => ({
  root: {
 
    flexGrow: 1,
    fontSize: 30,
    backgroundColor: "#8AB5B3",
    marginLeft: 200
  },
  img: {
    margin: 'auto',
    display: 'inline',

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
const layoutStyle = {
  margin: 0,
  padding: 0,
  // border: '2px solid #8AB5B3',

};

const imageStyle = {
  width:470,
  paddingLeft: 50,
  float: "right",
  marginRight: 0,
  marginLeft: 310
};

const Layout = props => (
  
  <div style={layoutStyle}>
  <div className="shiftdiv">
  <Header />
    {props.children}
 
   
 

    </div>

  </div>
);

export default Layout;