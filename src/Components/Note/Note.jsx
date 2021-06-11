import React, {Component} from 'react'
import TakeNote from '../Take a note/takeanote'
import DisplayNote from '../DisplayNote/displayN';
import '../../App.css'
import UserService from '../../services/userService';


class Note extends Component {
   constructor(props){
    super(props)
        this.state={
            notes:[]
        }
    }
    getAllNotes=()=>{
             new UserService().getAllNotes().then((result)=>{
                console.log(result.data.data.data,"get all notes")
                let arrayData=result.data.data.data;
                this.setState({
                    notes:arrayData
                }) 
            }).catch(error =>{
                this.setState({
                    open: true
                })
        
            })
        
    };
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.notes != nextState.notes){
            return true
        }
        return false;
    }
    componentDidMount(){
        this.getAllNotes()
    }
    render() { 
        console.log(this.state.notes)
        return (
            <div>
                <TakeNote getAll={this.getAllNotes}/>
                <DisplayNote  NotesArray={this.state.notes} getNote={this.getAllNotes}/>
            </div>
          );
    }
}

export default Note;