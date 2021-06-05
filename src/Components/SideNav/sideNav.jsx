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
    marginTop:'25px',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop:'25px',
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
    webkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    webkitBordeRadius: '0 25px 25px 0',
    borderRadius: '0 25px 25px 0',
    color: '#202124',
    display: 'flex',
    webkitAlignItems: 'center',
    alignItems: 'center',
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    fontSize: '.875rem',
    fontWeight: "500",
    lineHeight: '1.25rem',
    height: '48px',
    minWidth: '48px',
    overflow: 'hidden',
    width:'100%',
    backgroundColor: '#fff',
    borderRadius: '25px 25px 25px 25px',
  },
  newListItems:{
    webkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    webkitBordeRadius: '0 25px 25px 0',
    borderRadius: '0 25px 25px 0',
    color: '#202124',
    display: 'flex',
    webkitAlignItems: 'center',
    alignItems: 'center',
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    fontSize: '.875rem',
    fontWeight: "500",
    lineHeight: '1.25rem',
    height: '48px',
    minWidth: '48px',
    overflow: 'hidden',
    width:'100%',
    backgroundColor: '#FEEFC3',
    borderRadius: '25px 25px 25px 25px',
  },
drawerPaper: {
    width: drawerWidth,
    marginTop: "70px",
},
})





class SideNav extends React.Component {
    constructor(props){
        super(props)
        this.state={
          open : false,
          head:""
        }
    }
    handleDrawerOpen = () => {
      console.log("drawer open")
       this.props.drawerOpen() 
    };
     handleDrawerClose = () => {
       console.log("drawer close")
        this.props.drawerClose()
    };
    onChange = (head) =>{
      this.props.onChange(head)
    }
    render() { 
      const { classes } = this.props;
      // const { theme } = this.props;
        return ( 
            <div className="root">
       <Drawer
          variant="permanent"
          className={this.props.open ? classes.drawerOpen : classes.drawerClose}
          classes={{
            paper:this.props.open ? classes.drawerOpen : classes.drawerClose 
          }}
          anchor='left'>
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
          {/* <IconButton onClick={this.handleDrawerClose}> */}
            {/* {theme.dire === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          {/* </IconButton> */}
        <List  onMouseEnter={this.handleDrawerOpen} onMouseLeave={this.handleDrawerClose}>
          <ListItem className={this.props.selectedRoute == "Keep" ? classes.newListItems : classes.listItem} button={true} onClick={()=>this.onChange("Keep")} >
            <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem className={this.props.selectedRoute == "Reminders" ? classes.newListItems : classes.listItems} button={true}  onClick={()=>this.onChange("Reminders")}>
            <ListItemIcon><NotificationsOutlinedIcon/></ListItemIcon>
            <ListItemText primary="Reminders" ></ListItemText>
          </ListItem>
          <ListItem className={this.props.selectedRoute == "EditLabels" ? classes.newListItems : classes.listItems} button={true} onClick={()=>this.onChange("EditLabels")}>
            <ListItemIcon><EditIcon/></ListItemIcon>
            <ListItemText primary="EditLabels"></ListItemText>
          </ListItem>
          <ListItem className={this.props.selectedRoute == "Archieve" ? classes.newListItems : classes.listItems} button={true} onClick={()=>this.onChange("Archieve")}>
            <ListItemIcon><ArchiveIcon/></ListItemIcon>
            <ListItemText primary="Archieve"></ListItemText>
          </ListItem>
          <ListItem className={this.props.selectedRoute == "Trash" ? classes.newListItems : classes.listItems} button={true} onClick={()=>this.onChange("Trash")}>
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