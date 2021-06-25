import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import '../Header/header.css';
import SideNav  from '../SideNav/sideNav';
import KeepIcon from '../../assets/keep.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import Search from '../Search/search'
const drawerWidth = 240;

const styles = theme =>  ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});



class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
          drawerOpen: false,
          heading:"Keep",
          
        }
        this.drawerOpen = this.handleDrawerOpen.bind(this)
        this.drawerClose = this.handleDrawerClose.bind(this)
    }
    
    onSelection = (head) => {
      this.setState({heading:head})
      this.props.onChange(head)
    }
    handleDrawerOpen = () => {
      console.log("drawer open")
      this.setState({drawerOpen: !this.state.drawerOpen}) 
   };
    handleDrawerClose = () => {
      console.log("drawer close")
       this.setState({drawerOpen: false})
   };
    render() { 
      const { classes } = this.props;
        return ( 
            <div className="grow">
              <CssBaseline/>
            <AppBar  position="fixed" 
             className={clsx(classes.appBar, {
             [classes.appBarShift]: this.state.open,
             })}>
              <Toolbar className="AppBar">
                <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={clsx(classes.menuButton, {
                  [classes.hide]: this.state.open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
                <img src={KeepIcon} alt="KeepIcon" className="Iconpng"/>
                <span className="gb_5d">{this.state.heading}</span> 
                <div>
                  <Search handleSearchNote={this.props.handleSearch}/>
                  {/* <div className="searchIcon">
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search"
                    className="inputInput"
                    inputProps={{ 'aria-label': 'search' }}
                  /> */}
                </div>
                <div className="grow"/>
                <div className="sectionDesktop">
                  <IconButton  >
                    <Badge color="black">
                      <RefreshOutlinedIcon/>
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge color="black">
                      {this.props.view === true ?<ViewAgendaOutlinedIcon onClick={()=>this.props.gridView()}/>:
                      <AppsOutlinedIcon onClick={()=>this.props.gridView()}/> }
                      
                    </Badge>
                  </IconButton>
                  <IconButton
                    color="black"
                  >
                    <SettingsOutlinedIcon/>
                  </IconButton>
                  </div>
                  <div>
                  <IconButton
                    color="black"
                  >
                    <AppsOutlinedIcon/>
                  </IconButton>
                  <IconButton
                    color="black"
                  >
                    <Avatar>L</Avatar>
                  </IconButton>
               </div>
              </Toolbar>
            </AppBar>
            <SideNav open={this.state.drawerOpen} 
            drawerOpen={this.handleDrawerOpen} 
            drawerClose={this.handleDrawerClose} 
            onChange={this.onSelection} 
            selectedRoute={this.state.heading} 
            />
          </div>
         );
    }
}
 
export default withStyles(styles)(Header);