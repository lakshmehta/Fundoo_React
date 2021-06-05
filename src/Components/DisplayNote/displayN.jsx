import React from 'react';
import pin from '../../assets/pinn.svg'
import { withStyles } from '@material-ui/core/styles';
import { Dialog, TextField } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import IconButton from '@material-ui/core/IconButton';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import UserService from '../../services/userService';
import './displayN.css'
import Truncate from 'react-truncate';
import Button from '@material-ui/core/Button';

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
        let userData = {
            noteId: this.state.noteId,
            title: this.state.title,
            description: this.state.description
        }
        console.log(this.state.title,this.state.description)
let requestData = new FormData();
requestData.set("noteId", this.state.noteId);
requestData.set("title", this.state.title);
requestData.set("description", this.state.description);
        if(this.state.title!=="" && this.state.description!==""){
            new UserService().updateNote(requestData).then((data) =>{
                console.log('Update Note',data)
            
                }).catch((error) =>{
                    console.log("error", error)
                })
            }
    }
    render() { 
        console.log(this.props.notesArray,"getting notes")
        const {classes} = this.props;
        return ( 
            <>
                <div className="noteDisplay">
                    <div className="notes-box">
                       {this.props.notesArray.map((key,index)=> 
                           
                            <div className="align-title-des">
                                <div onClick={() => this.handleNoteOpen(key)}>
                                    <div className="title-note">
                                        <h3>{key.title}</h3>
                                        <img src={pin} alt="" />
                                    </div>
                                    <div className="description-note">
                                        <Truncate lines={10} ellipsis={<span>...</span>}>
                                            {key.description}
                                        </Truncate>
                                    </div>
                                </div>
                            </div>
                            
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
                                <IconButton val={this.state.value}>
                                    <AddAlertOutlinedIcon  style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                                <IconButton val={this.state.value}>
                                    <PersonAddOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                                <IconButton val={this.state.value}>
                                    <PaletteOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                                <IconButton val={this.state.value}>
                                    <ImageOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                                <IconButton val={this.state.value}>
                                    <ArchiveOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                                <IconButton val={this.state.value}>
                                    <MoreVertOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                </IconButton>
                            </div>
                            <Button className="dialog-close"
                             onClick={()=>{this.handleNoteclose()}}>
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