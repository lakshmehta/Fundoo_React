import React from 'react'
import NoteService from '../../services/noteService'
// import {   Dialog,TextField } from '@material-ui/core';
// import Icon from '../Icons/icon';
import '../../App.css'
import NoteCard from '../Card/notecard';

class Archive extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false,
            title:"",
            description:"",
            notes:[]
        }
    }
    // handleNoteOpen = (key) => {
    //     this.setState({
    //         open:true,
    //         title:key.title,
    //         description:key.description,
    //         noteId:key.id
    //     })
    // }
    // handleNoteclose = () => {
    //     this.setState({
    //         open:!this.state.open
    //     })
    // }
    
    // handleTitle = (input) =>{
    //     this.setState({
    //         title:input

    //     })
    //     console.log(input)
    // }
    
    // handleDescription = (input) =>{
    //     this.setState({
    //         description:input
    //     })
    //     console.log(input)
    // }
    getArchNote=()=>{
        new NoteService().getArchiveNote().then((data)=>{
            console.log(data)
            this.setState({
                notes:data.data.data.data
            })
            console.log(this.state.notes)
        }).catch((error)=>{
            console.log(error,"error")
        })
    }
    componentDidMount(){
        this.getArchNote()
    }
    render() { 
        console.log(this.state.notes)
        return ( 
                <div className="noteDisplay" > 
                    {/* <div className="notes-box" >
                        {this.state.notes.filter(data=>data.isArchived === true).reverse().map((value)=>
                            <NoteCard value={value} getArchNote={this.getArchNote()}/>
                        )}
                    </div>           */}
                    <div style={{marginTop:'80px'}}>{this.props.render(this.state.notes)}</div>
                    
                </div>
         );
    }
}
 
export default Archive;