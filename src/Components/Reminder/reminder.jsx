import React, {Component} from 'react'
import '../../App.css'
import NoteService from '../../services/noteService';
import TakeNote from '../Take a note/takeanote'
import DisplayReminder from '../DisplayReminder/displayReminder';

class Reminder extends Component {
    constructor(){
        super()
        this.state={
          notes:[]
        }
    }
    componentDidMount(){
        this.getReminderNote();
    }
   
    getReminderNote =()=>{
        new NoteService().getReminderNote().then((result)=>{
            console.log("result",result)
            this.setState({
                notes:result.data.data.data
            })
            console.log("result",this.state.notes)
        })
    }
    render() { 
        console.log(this.state.notes,"notes reminder")
        return ( 
            <div>
                <TakeNote updateReminderData={this.getReminderNote}/>
                <DisplayReminder NotesArray={this.state.notes} updateReminderUpdate={this.getReminderNote}/>    
            </div>
         );
    }
}
 
export default Reminder;