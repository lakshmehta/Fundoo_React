import React, { Component } from 'react';
import Icon from '../Icons/icon'
import moment from 'moment';
import { Chip, Dialog, InputBase } from '@material-ui/core';
import NoteService from '../../services/noteService';
import NoteCard from '../Card/notecard';
import Button from '@material-ui/core/Button';
class DisplayReminder extends Component {
    constructor(){
        super()
        this.state={
            title: "",
            description: "",
            open: false,
            noteId: "",
            color:null,
            reminder:"",  
        }
    }
    handleClose = () => {
        console.log("i am working");
        this.setState({open: !this.state.open})
        console.log(this.state.open);
    };

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    handleDescription = (event) => {
        this.setState({description: event.target.value})
    }
    handleClickOpen = (value) =>{
        this.setState({
            open: true,
            noteId: value.id,
            title: value.title,
            description: value.description,
            reminder:value.reminder
        })
    }
    updateReminderNote = () =>{
        let data={
            title: this.state.title,
            description: this.state.description,
            noteId: this.state.noteId,
            reminder: this.state.reminder
        }
        new NoteService().addReminder(data).then((result)=>{
            console.log(result,"display reminder")
            this.props.updateReminderNote();
            // eslint-disable-next-line no-lone-blocks
            {this.handleClose()}
        })
    }
    updateReminder = (date, time) =>{
        if (date !== null && time !== null) {
            let reminder = moment(date).format("MMM D")+", "+ moment(time).format("h:mm:A");
            this.setState({
                reminder: reminder,
            });
        this.updateReminderNote();
        }
    }
    render() { 
        console.log(this.props.NotesArray," note array")
        return ( 
         <div className="noteDisplay">
            <div className="notes-box">
                {this.props.NotesArray.filter((data)=>data.isArchived==false).filter((data)=>data.isDeleted==false).map((value)=>
                {
                    console.log(value,"value")
                return(
                    <div>
                 
                    <NoteCard
                        value={value}
                        updateReminderNote={this.updateReminderNote}
                        updateReminder={this.updateReminder}
                        handleClickOpen={this.handleClickOpen}
                    />
                </div>
                )}
                )}
            </div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <div className="dialog-body">
                    <InputBase
                         multiline
                         className="inputbas"
                         placeholder= " Title"
                         fullWidth
                         onChange={this.handleTitle}
                         defaultValue={this.state.title}
                         inputProps={{ 'aria-label': 'Title ' }}
                        />
                        <InputBase
                            multiline
                            className="inputbas"
                            placeholder= " Title"
                            fullWidth
                            onChange={this.handleDescription}
                            defaultValue={this.state.description}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />
                        <div>
                            {this.props.NotesArray.remainder !== null && (
                                <div className="reminder">
                                <Chip
                                    onClick={this.editReminder}
                                    label={this.state.reminder}
                                    onDelete={() => this.removeReminder(this.props.NotesArray)}
                                />
                                </div>
                            )}
                        </div>
                        <div
                        style={{
                            padding: "10px",
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <div className="dialog-icon">
                                <Icon val={this.props.value}/>
                            </div>
                            <Button className="dialog-close"
                             onClick={()=>this.updateReminderNote()}>
                                Close
                            </Button>
                        </div>
                        {/* <div className="dialog-icon">
                            <Icon/>
                            <div className="dialog-close">
                                <input type="button" onClick={(e)=> this.updateReminderNote()} value="close"/>
                            </div>
                        </div> */}
                </div>
            </Dialog>
        </div>
         );
    }
}
 
export default DisplayReminder;