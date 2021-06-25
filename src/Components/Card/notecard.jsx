import React from 'react'
import Icon from '../Icons/icon'
import '../../App.css'
// import Button from '@material-ui/core/Button'
// import { Dialog, TextField } from '@material-ui/core';
import NoteService from '../../services/noteService';
import moment from "moment"
import { Chip } from '@material-ui/core';
import  DatePickers from '../Icons/dataAtime'


class NoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            openStatus:false,
            open: false,
            title:"",
            description:"",
            noteId:"",
            color:null,
            reminder:"",
            datePicker:false
        }
    }
    handleNoteclose = () => {
        this.setState({
            open:!this.state.open
        })
    }
    handleTitle = (input) =>{
        this.setState({
            title:input

        })
        console.log(input)
    }
    
    handleDescription = (input) =>{
        this.setState({
            description:input
        })
        console.log(input)
    }
    handleNoteOpen = (key) => {
        this.setState({
            openStatus:!key.openStatus,
            title:key.title,
            description:key.description,
            noteId:key.id
        })
    }
    updateReminderNote =() =>{
        console.log("update reminder",this.state.reminder);
        console.log("value: ",this.props.value);
        let data={
            noteIdList:[this.props.value.id],
            reminder:this.state.reminder
        }
        console.log("value after data: ",data);
        // console.log("update reminder",this.state.reminder)
        new NoteService().addReminder(data).then((result)=>{

            console.log("update reminder",this.state.reminder)
            // this.props.updateReminderNote();
            // eslint-disable-next-line no-lone-blocks
            {this.handleNoteclose()}
        })
    }
    updateReminder =(date, time)=> {
        if (date !== null && time !== null) {
            let reminder = moment(date).format("MMM D")+", "+ moment(time).format("h:mm:A");
            console.log("Reminder: ",reminder);
            this.setState({
                reminder: reminder,
            }, () => this.updateReminderNote());
            console.log("reminder date: ",date, "time ", time);
        // this.updateReminderNote();
        }
    }
    callChange = () =>{
        this.setState({datePicker:!this.state.datePicker})
    }
    removeReminder=(value)=>{
        let data = {
            noteIdList:[value.id],
            reminder:null
        }
        new NoteService().deleteReminder(data).then((then)=>{
            this.setState({
                reminder:null
            })
            this.props.updateReminderNote()
        }).catch((error)=>{
            console.log(error)
        })
    }
    setColor = (colorValue) => {
        this.setState({color: colorValue})
    }
 
    render() { 
        console.log(this.props.view);
        // var mom = moment(this.props.value.reminder).format("hA");
        // console.log(mom,"time")
        // const {classes} = this.props;
        return ( 
        <>     
        {/* <div className={this.props.view == true ? "notes-box":"notes-box-grid"}> */}
        <div  className={this.props.view == true ?"align-title-des": "align-title-des-grid"} style={{backgroundColor:this.props.value.color}} >
                    <div  className="title-note" style={{padding:'5px'}}>
                        {this.props.value.title}  
                    </div> 
                    <div className="description-note" style={{padding:'5px'}}>
                       {this.props.value.description}
                    </div>
                    <Chip
                        onClick={this.callChange}
                        label={moment(new Date(this.props.value.reminder)).format("MMM DD,h:mm A")}
                        onDelete={() => this.removeReminder(this.props.value)}
                        />
                        <Icon Notes={this.props.value} getArchNote={this.props.getArchNote}  setColor={this.setColor}/>
                </div>
        {/* </div> */}
               
                    <div>
                        {this.state.datePicker ?
                            <DatePickers
                                editPicker={this.callChange}
                                reminder={this.props.value.reminder}
                                edit={true}
                                dateTime={this.updateReminderNote}
                                updateReminder={this.updateReminder}
                            /> : null  
                    }
                    </div>
                    {/* <Dialog open={this.state.openStatus}>
                        <div className="dialog-body">
                            <TextField
                            className={classes.underline}
                            name="title"
                            defaultValue={this.state.title}
                            multiline
                            onChange={(input)=>this.handleTitle(input.target.value)}
                            />
                            <TextField
                            className={classes.underline}
                            name="desciption"
                            defaultValue={this.state.description}
                            multiline
                            onChange={(input)=>this.handleDescription(input.target.value)}
                            />
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
                             onClick={()=>{this.handleNoteclose();
                             this.onUpdate()
                             }}>
                                Close
                            </Button>
                        </div>
                    </Dialog>    */}
                    </>
         );
    }
}
 
export default NoteCard;