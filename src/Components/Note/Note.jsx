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
                this.onTrigerSearch(this.state.notes)
                // this.props.filterSearchNote(this.state.notes)
                
            }).catch(error =>{
                this.setState({
                    open: true
                })
        
            })
        
    };
    onTrigerSearch=(data)=>{
        this.props.searchNote(data)
    }
    
    render() { 
        console.log(this.state.notes,"Notes")
        console.log(this.props.gridView,"grid view");
        return (
            <div>
                <TakeNote getAll={this.getAllNotes} NotesArray={this.state.notes}/>
                <DisplayNote view={this.props.gridView} NotesArray={this.state.notes} getNote={this.getAllNotes} render={this.props.render}/>
            </div>
          );
    }
}

export default Note;