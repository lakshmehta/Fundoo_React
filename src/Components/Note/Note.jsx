import React, {Component} from 'react'
import TakeNote from '../Take a note/takeanote'
import DisplayNote from '../DisplayNote/displayN';
import '../../App.css'
import Bell from '../../assets/icon/bell.svg'
import UserService from '../../services/userService';
class Note extends Component {
   constructor(props){
    super(props)
        this.state={
            notes:[]
        }
    }
    getAllNotes=()=>{
        let userData={
            title:this.state.title,
            description:this.state.note
        }
            new UserService().getAllNotes(userData).then((data)=>{
                console.log(data.data.data.data)
                this.setState({
                    notes:data.data.data.data
                }) 
            }).catch(error =>{
                this.setState({
                    open: true
                }, () => { console.log(this.state)})
                console.log("error",error)
            })
        
    };
    componentDidMount(){
        this.getAllNotes()
    }
    render() { 
        console.log(this.state.notes)
        return (
            <div>
                <TakeNote getAll={this.getAllNotes}/>
                <DisplayNote  notesArray={this.state.notes}/>
                {/* <img src={Bell} alt="Bell logo" className="bell"/> */}
            </div>
          );
    }
}

export default Note;