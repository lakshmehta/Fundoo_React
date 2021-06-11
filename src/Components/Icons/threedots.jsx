import React from 'react';
import UserService from '../../services/userService'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteNote=()=>{
    let data ={
        isDeleted:true,
        // eslint-disable-next-line no-undef
        noteIdList: [props.Notes.id]
    }
    new UserService().deleteNote(data).then((data)=>{
        this.props.getNote()
        console.log(data)
        handleClose();
    }).catch((error)=>{
        console.log(error)
    })
}
  return (
    <div>
       <MoreVertIcon open={open} onClick={(event)=>handleClick(event)}/>
     <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}>
         <MenuItem 
            onClick={()=>{
            deleteNote();
            handleClose()
          }}>Delete
        </MenuItem>
          <MenuItem onClick={handleClose}>Add label</MenuItem>
          <MenuItem onClick={handleClose}>Add drawing</MenuItem>
          <MenuItem onClick={handleClose}>Make a copy</MenuItem>
          <MenuItem onClick={handleClose}>Show checkboxes</MenuItem>
          <MenuItem onClick={handleClose}>Copy to Google Docs</MenuItem>
      </Menu>
    </div>
  );
}