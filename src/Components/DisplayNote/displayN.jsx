import React from 'react';
import pin from '../../assets/pinn.svg'
import { withStyles } from '@material-ui/core/styles';
import { Dialog, TextField } from '@material-ui/core';
import UserService from '../../services/userService';
import './displayN.css'
import Truncate from 'react-truncate';
import Button from '@material-ui/core/Button';
import Icon from '../Icons/icon'
import NoteCard from '../Card/notecard';
const styles ={
    underline: {    
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
}



class DisplayNote extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false,
            title:"",
            description:"",
            noteId:"",
            color:null
        }
    }
    handleNoteOpen = (key) => {
        this.setState({
            open:true,
            title:key.title,
            description:key.description,
            noteId:key.id
        })
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
    onUpdate=()=>{
        // let userData = {
        //     noteId: this.state.noteId,
        //     title: this.state.title,
        //     description: this.state.description
        // }
        console.log(this.state.title,this.state.description)
        let requestData = new FormData();
        requestData.set("noteId", this.state.noteId);
        requestData.set("title", this.state.title);
        requestData.set("description", this.state.description);
                if(this.state.title!=="" && this.state.description!==""){
            new UserService().updateNote(requestData).then((data) =>{
                console.log('Update Note',data)
                this.props.getNote()
                }).catch((error) =>{
                    console.log("error", error)
                })
            }
    }
    render() { 
        console.log(this.props.NotesArray,"getting notes")
        const {classes} = this.props;
        return ( 
            <>
                <div className="noteDisplay">
                    <div className="notes-box">
                       {this.props.NotesArray.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((key)=> 
                            <NoteCard  val={key}/> 
                       )}
                    </div>
                     

                    <Dialog open={this.state.open}>
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
                    </Dialog>         
                </div> 
            </>
         );
    }
}
 
export default (withStyles(styles)(DisplayNote));