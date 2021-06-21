import React from 'react'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import pin from '../../assets/pinn.svg';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
// import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import NoteService from '../../services/noteService';
import './takeanote.css'
import { Button } from '@material-ui/core';
import { Chip } from '@material-ui/core';
import moment from 'moment';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Icon from '../Icons/icon';
import DoneIcon from '@material-ui/icons/Done';

const styles = {
    underline: {
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};
class TakeNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            title:"",
            note:"",
            response:false,
            color:"",
            reminder:"",
            isArchived:false
        }
    }
    handleNoteOpen = () => {
        this.setState({open:false}, () => {console.log(this.state)})
    }
    handleNoteclose = () => {
        let userData={
            isArchived:this.state.isArchived,
            title: this.state.title,
            description: this.state.note,
            reminder:this.state.reminder,
            color:this.state.color
        }
        if(this.state.title !=="" && this.state.description !==""){
            new NoteService().addNote(userData).then((data)=>{
                console.log("note added",data);
                this.props.getAll()
                this.props.updateReminderData()
                console.log(this.props.updateReminderData(),"update reminder method");
                console.log( this.props.getAll(),"get all note method");
            }).catch(error =>{
                this.setState({
                    open: true
                }, () => { console.log(this.state)})
                console.log("error",error)
            })
        }
    };
    getArchivedNote =()=>{
        this.setState({
            isArchived:true
        })
    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => { console.log(this.state); })
    }
    
    getReminderData =(date,time)=>{
        if(date!==null && time !==null){
            let reminder =moment(date).format("MMM D")+","+moment(time).format("h:mm:A");
            this.setState({
                reminder:reminder
            })
            console.log("reminder",reminder)
            console.log(moment(date).format("MMM D"));
            console.log(moment(time).format("h:mm:A"));
        }
    }
    handleReminder = () => {
        this.setState({
            reminder:null
        })
    }
    handleColor = (colorVal) =>{
        console.log("color",colorVal)
        this.setState({
            color:colorVal
        })
    }
    render() { 
        console.log("take a note",this.props.NotesArray)
        console.log(this.props.getAll,"getAll")
        const { classes } = this.props;
        return ( 
            <div className="note">
                {this.state.open ? (
                    <div className="take-note"
                    onClick={this.handleNoteOpen}>
                    <div style = {{width: '110px', color:'#5F6368'}}>
                        Take a note...
                    </div>
                    <div className="take-note-icon">
                            <div className="take-icon">
                                <CheckBoxOutlinedIcon />
                            </div>
                            <div className="take-icon">
                                <BrushOutlinedIcon />
                            </div>
                            <div className="take-icon">
                                <ImageOutlinedIcon />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="take-note take-note-expand">
                            <div className="take-note-input">
                                <div className="title-pin">
                                    <TextField
                                        className={classes.underline}
                                        name="title"
                                        onChange={this.handleInput}
                                        placeholder="Title"
                                        multiline
                                    />
                                    <img className="pin" src={pin} alt="" />
                                </div>
                                <TextField
                                    className={classes.underline}
                                    name="note"
                                    onChange={this.handleInput}
                                    placeholder="Take a note.."
                                    multiline
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                           <div className="chip">
                               {this.state.reminder !== "" &&  (
                           <div className="reminder">
                               <Chip
                                size="small"
                                label={this.state.reminder}
                                icon={< AccessTimeIcon />}
                                clickable
                                // color=""
                                onDelete={this.handleReminder}
                                deleteIcon={<DoneIcon />}
                            />
                           </div>
                                )}
                           </div>
                            
                            <div className="align-icon">
                                <Icon setColor={this.handleColor} getReminder={this.getReminderData} notes={this.props.NotesArray} archieve={this.getArchivedNote} getNote={this.props.getAll}/>
                                
                                <div className="close">
                                    <Button variant="text" size="small" onClick={() => {
                                        this.handleNoteclose();
                                    }}>
                                        Close
                                     </Button>
                                </div>
                            </div>
                        </div>

                )}
            </div>
         );
    }
}

export default (withStyles(styles)(TakeNote));