import React, {Component} from 'react'
import TakeNote from '../Take a note/takeanote'
import DisplayNote from '../DisplayNote/displayN';
import '../../App.css'
import NoteService from '../../services/noteService';


class Note extends Component {
   constructor(props){
    super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        this.getAllNotes()
    }
    getAllNotes=()=>{
             new NoteService().getAllNotes().then((result)=>{
                console.log(result.data.data.data,"get all notes")
                this.setState({
                    notes:result.data.data.data
                }) 

                console.log("notes",this.state.notes)
            }).catch(error =>{
                this.setState({
                    open: true
                })
        
            })
        
    };
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.notes != nextState.notes){
    //         return true
    //     }
    //     return false;
    // }
    
    render() { 
        console.log(this.state.notes,"Notes")
        return (
            <div>
                <TakeNote getAll={this.getAllNotes}/>
                <DisplayNote  NotesArray={this.state.notes} getNote={this.getAllNotes}/>
            </div>
          );
    }
}

export default Note;