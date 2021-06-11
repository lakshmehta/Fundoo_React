import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { StylesProvider } from "@material-ui/core/styles";
import './icon.css';
import Popper from './popper';
import UserService from '../../services/userService'
import { Menu, MenuItem } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
// import ThreeDots from './threedots'
import Reminder from './reminderPopper'
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

export default class Icon extends Component {
    constructor(){
        super()
        this.state={
            anchorEl:null,
            show:false
        }
    }
    handleClick = (event) =>{
        this.setState({
            anchorEl:event.currentTarget
        })
    }
    handleClose= () => {
        this.setState({
            anchorEl:null
        })
    }
    changeingShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    archieveNote=(val)=>{
        let data={
            noteIdList: [this.props.Notes.id],
            isArchived:true
        }
        new UserService().archiveNote(data).then((data)=>{
            console.log("data",data)
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    unArchieveNote=(val)=>{
        let data={
            noteIdList: [this.props.Notes.id],
            isArchived:false
        }
        new UserService().archiveNote(data).then((data)=>{
            console.log("data",data)
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    deleteNote=()=>{
        let data ={
            isDeleted:true,
            noteIdList: [this.props.Notes.id]
        }
        new UserService().deleteNote(data).then((data)=>{
            this.props.getNote()
            console.log(data)
            this.handleClose();
        }).catch((error)=>{
            console.log(error)
        })
    }
    // restoreNote=()=>{
    //     let data ={
    //         isDeleted:false,
    //         noteIdList: [this.props.Notes.id]
    //     }
    //     new UserService().deleteNote(data).then((data)=>{
    //         this.props.getNote()
    //         console.log(data)
    //         this.handleClose();
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    onSetColor=(color)=>{
        let Data ={
            noteIdList:[this.props.Notes.id],
            color:color.code
        }
        new UserService().changeColor(Data).then((data) =>{
            console.log('color of note',data);
            this.props.getNote();
        }).catch(error=>{
            console.log("color error",error);
        })
        console.log("Color",Data)
    }
    render() {
        console.log(this.props.Notes)
        return (
            <StylesProvider injectFirst>
                <div className="note-icons">
                    <div className="note-icon-hover">
                        <Reminder/>
                    </div>
                    <div className="note-icon-hover">
                        <PersonAddOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icon-hover">
                        <Popper putColor={(Data) => {
                            this.onSetColor(Data)}}
                        />
                    </div>
                    <div className="note-icon-hover"> 
                    {this.props.Notes.isArchived ? <UnarchiveOutlinedIcon onClick={()=>this.unArchieveNote(this.props.Notes)}/>
                    :
                        <ArchiveOutlinedIcon onClick={()=>this.archieveNote(this.props.Notes)}/>
                        }   
                    </div>
                    <div>
                        <div className="note-icon-hover">
                            <MoreVertIcon  onClick={(event)=>this.handleClick(event)}/> 
                        </div>
                       
                        <Menu
                            id="fade-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem 
                            onClick={()=>{
                                this.deleteNote();
                                this.handleClose()
                            }}>Delete</MenuItem>
                            <MenuItem onClick={this.handleClose}>Add label</MenuItem>
                            <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
                            <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
                            <MenuItem onClick={this.handleClose}>Show checkboxes</MenuItem>
                            <MenuItem onClick={this.handleClose}>Copy to Google Docs</MenuItem>
                        </Menu>
                    </div>
                </div>
            </StylesProvider>
        )
    }
}
