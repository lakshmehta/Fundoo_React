import React,{} from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
// import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import '../SideNav/sideNav.css';

const drawerWidth = 240;

const styles = theme =>  ({
  drawer: {
    marginTop: '30px',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  listItems: {
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    fontSize: '.775rem',
    fontWeight:'bold',
    lineHeight:'1.25rem',
    paddingleft: '24px',
    color: '#202124',
    borderRadius: '0 25px 25px 0',
  
  '&:focus':{
    backgroundColor: '#feefc3',
    borderRadius: '0 25px 25px 0',
  },
drawerPaper: {
    width: drawerWidth,
    marginTop: "70px",
},
},

})





class SideNav extends React.Component {
    constructor(props){
        super(props)
        this.state={
          open : false,
          
        }
    }
    handleDrawerOpen = () => {
      console.log("drawer open")
       this.setState({open: true}) 
    };
     handleDrawerClose = () => {
       console.log("drawer close")
        this.setState({open: false})
    };
    render() { 
      const { classes } = this.props;
      const { theme } = this.props;
        return ( 
            <div className="root">
       <Drawer
          variant="permanent"
          className={this.props.open ? classes.drawerOpen : classes.drawerClose}
          classes={{
            paper:this.props.open ? classes.drawerOpen : classes.drawerClose 
          }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]:this.props.open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={this.handleDrawerClose}>
            {/* {theme.dire === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        <List>
          <ListItem className={classes.ListItem}>
            <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem className={classes.ListItem}>
            <ListItemIcon><NotificationsOutlinedIcon/></ListItemIcon>
            <ListItemText primary="Reminders"></ListItemText>
          </ListItem>
          <ListItem className={classes.ListItem}>
            <ListItemIcon><EditIcon/></ListItemIcon>
            <ListItemText primary="Edit labels"></ListItemText>
          </ListItem>
          <ListItem className={classes.ListItem}>
            <ListItemIcon><ArchiveIcon/></ListItemIcon>
            <ListItemText primary="Archieve"></ListItemText>
          </ListItem>
          <ListItem className={classes.ListItem}>
            <ListItemIcon><DeleteOutlineIcon/></ListItemIcon>
            <ListItemText primary="Trash"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
         );
    }
}
 
export default withStyles(styles) (SideNav);