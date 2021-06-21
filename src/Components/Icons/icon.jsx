import React, { Component } from 'react'
// import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { StylesProvider } from "@material-ui/core/styles";
import './icon.css';
import Popper from './popper';
import NoteService from '../../services/noteService'
import { Menu, MenuItem } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
// import ThreeDots from './threedots'
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import ReminderPopper from './reminderPopper';
// import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
export default class Icon extends Component {
    constructor(){
        super()
        this.state={
            anchorEl:null,
            show:false,
            reminder:"",
            open:false
        }
    }
    handleClick = (event) =>{
        this.setState({
            anchorEl:event.currentTarget,
        })
    }
    handleClose= () => {
        this.setState({
            anchorEl:null
        })
        
    }
    close =(event,reason)=>{
        if(reason === 'clickaway'){
            return
        }
        else{
            this.setState({
                open:false
            })
        }
    }
    changeingShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    archiveNote=()=>{
        let data={
            noteIdList: [this.props.Notes.id],
            isArchived:true
        }
        new NoteService().archiveNote(data).then((data)=>{
            console.log("data",data)
            this.props.getNote()
            this.setState({
                open:true
            })
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    unArchiveNote=()=>{
        let data={
            noteIdList: [this.props.Notes.id],
            isArchived:false
        }
        new NoteService().archiveNote(data).then((data)=>{
            this.props.getArchNote()
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
        new NoteService().deleteNote(data).then((data)=>{
            console.log("get note",this.props.getNote())
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
    //     new NoteService().deleteNote(data).then((data)=>{
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
        console.log(this.props.Notes.id)
        new NoteService().changeColor(Data).then((data) =>{
            console.log('color of note',data);
            this.props.getNote();
            console.log("getNote",this.props.getNote())
        }).catch(error=>{
            console.log("color error",error);
        })
        console.log("Color",Data)
    }
    delNoteF=()=>{
        let data ={
                    isDeleted:true,
                    noteIdList: [this.props.Notes.id]
                }
                console.log(this.props.Notes.id)
        new NoteService().deleteNotePermanently(data).then((res)=>{
            console.log(data,"delete")
            this.getNote()
        }).catch((error)=>{
            console.log(error,"error")
        })
    }
    restoreNote=()=>{
        let data ={
            isDeleted:false,
            noteIdList: [this.props.Notes.id]
        }
        new NoteService().deleteNote(data).then((data)=>{
            this.getNote()
            console.log(data)
            this.handleClose();
        }).catch((error)=>{
            console.log(error)
        })
    }
    getData = (date, time) =>{
        console.log("get reminder",this.props.getReminder)
        this.props.getReminder(date,time)
    }

    
    render() {
        console.log(this.props.Notes)
        return (
            <StylesProvider injectFirst>
                <div className="note-icons">
                {/* {this.props.Notes.isDeleted  ? 
                    <div className="trash-icon">
                        <DeleteForeverIcon className="icon-size" onClick={()=>this.delNoteF()}/>
                        <RestoreFromTrashIcon className="icon-size"  onClick={()=>this.restoreNote()} />
                        </div>
                    :<>  */}
                    
                    <div className="note-icon-hover">                  
                        <ReminderPopper
                            getReminder={this.getData}/>
                    </div>
                    <div className="note-icon-hover">
                        <PersonAddOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icon-hover">
                        <Popper putColor={(Data) => {
                            this.onSetColor(Data)}}
                            setColor={this.handleColor}
                        />
                    </div>
                    <div className="note-icon-hover">
                    {this.props.Notes ? <div> 
                    {this.props.Notes.isArchived ? (<UnarchiveOutlinedIcon onClick={()=>this.unArchiveNote()} />)
                    :(
                        <ArchiveOutlinedIcon className="icon-size" 
                        onClick={()=>this.archiveNote()
                        }/>
                    )}
                    </div> :<ArchiveOutlinedIcon className="icon-size" 
                        onClick={()=>this.props.archieve()
                        }/> }
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={()=>this.close()}
                        message="Note archived"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={()=>this.unArchiveNote(this.props.Notes)}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>this.close()}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />   
                    </div>
                    <div>
                        <div className="note-icon-hover">
                            <MoreVertIcon className="icon-size"  onClick={(event)=>this.handleClick(event)}/> 
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
                    {/* </>} */}
                </div>
            </StylesProvider>
        )
    }
}
