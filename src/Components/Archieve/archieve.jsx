import React from 'react'
import UserService from '../../services/userService'
import { withStyles } from '@material-ui/core/styles';
import {   Dialog,TextField } from '@material-ui/core';
import Icon from '../Icons/icon';
import '../../App.css'
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
        new UserService().getArchiveNote().then((data)=>{
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
            <div className="noteDisplay"> 
                <div className="notes-box">
                {this.state.notes.filter(data=>data.isArchived === true).reverse().map((val)=>
                    <NoteCard val={val}/>
                )}
            </div>          
        </div>
         );
    }
}
 
export default (withStyles(styles)(Archive));