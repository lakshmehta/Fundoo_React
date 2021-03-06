import React,{Component} from 'react'
import '../../App.css'
import NoteService from '../../services/noteService';




class Trash extends Component {
    constructor(){
        super()
        this.state={
            open: false,
            notes:[],
            title:"",
            description:"",

        }
    }
    getNote=(value)=>{
        console.log("getTrashNote")
        new NoteService().getTrashNote().then((data)=>{
            console.log(data)
            this.setState({
                notes:data.data.data.data
            })
            console.log(this.state.notes)
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
    componentDidMount(){
        this.getNote()
    }
    handleNoteclose = () => {
        this.setState({
            open:!this.state.open
        })
    }
    render() { 
        console.log(this.state.notes)
        return ( 
            <div className="cont">
            <span className="heading">Notes in Trash are deleted in 7 days</span>
                <div className="noteDisplay"> 
                    {/* <div className="notes-box" style={{justifyContent:'center'}}>
                        {this.state.notes.filter(data=>data.isDeleted === true).map((val)=>
                            <div className="align-title-des" key={val} style={{background:val.color}}>
                                <div  className="title-note">
                                   {val.title}
                                </div> 
                                <div className="description-note">
                                  {val.description}
                                </div>
                                <div className="note-icons">
                                    <div className="note-icon-hover">
                                        <DeleteForeverIcon className="icon-size" onClick={()=>this.delNoteF(val)}/>
                                        <RestoreFromTrashIcon className="icon-size"  onClick={()=>this.restoreNote(val)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>  */}
                    {this.props.render(this.state.notes)}
                </div>
            </div>
         );
    }
}
 
export default Trash;  