import React from 'react';
// import pin from '../../assets/pinn.svg'
// import { withStyles } from '@material-ui/core/styles';
import NoteService from '../../services/noteService';
import './displayN.css'
// import NoteCard from '../Card/notecard';
import Icon from '../Icons/icon'
import { Dialog, InputBase } from '@material-ui/core';





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
            new NoteService().updateNote(requestData).then((data) =>{
                console.log('Update Note',data)
                this.props.getNote()
                {this.handleNoteclose()}
                }).catch((error) =>{
                    console.log("error", error)
                })
            }
    }
    setColor = (colorValue) =>{
        this.setState({ color: colorValue })
    }

    render() { 
        console.log(this.props.NotesArray,"getting notes")
        return ( 
            <>
                <div className="noteDisplay">
                    <div className="notes-box">
                       {/* {this.props.NotesArray.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((key)=> 
                        <div className="align-title-des" style={{backgroundColor:key.color}} >
                           <div  className="title-note" style={{padding:'5px'}}>
                               {key.title}  
                           </div> 
                           <div className="description-note" style={{padding:'5px'}}>
                              {key.description}
                           </div>
                               <Icon Notes={key} getArchNote={this.props.getArchNote}/>
                       </div>
                       )} */}
                       {this.props.render(this.props.NotesArray)}
                    </div>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <div className="dialogbox">
                        <InputBase
                            multiline
                            className="inputbas"
                            placeholder=" Title"
                            fullWidth
                            onChange={this.handleTitle}
                            defaultValue={this.state.title}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />

                        <InputBase
                            multiline
                            className="inputbas"
                            placeholder=" Title"
                            fullWidth
                            onChange={this.handleDescription}
                            defaultValue={this.state.description}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />
                        <div className="enclose">
                            <Icon />
                            <div className="inp">
                                <input type="button" onClick={() => this.onUpdate()} value="close" />
                            </div>
                        </div>
                    </div>

                </Dialog>

                         
                </div> 
            </>
         );
    }
}
 
export default DisplayNote;