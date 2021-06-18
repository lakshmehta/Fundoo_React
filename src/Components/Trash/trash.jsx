import React,{Component} from 'react'
import '../../App.css'
import NoteService from '../../services/noteService';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';



// const styles ={
//     underline: {    
//         "& .MuiInput-underline:before": {
//             position: 'fixed'
//         },
//         "& .MuiInput-underline:after": {
//             position: 'fixed'
//         }
//     }
// }
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
    delNoteF=(val)=>{
        let data ={
                    isDeleted:true,
                    noteIdList: [val.id]
                }
                console.log(val.id)
        new NoteService().deleteNotePermanently(data).then((res)=>{
            console.log(data,"delete")
            this.getNote()
        }).catch((error)=>{
            console.log(error,"error")
        })
    }
    restoreNote=(val)=>{
        let data ={
            isDeleted:false,
            noteIdList: [val.id]
        }
        new NoteService().deleteNote(data).then((data)=>{
            this.getNote()
            console.log(data)
            this.handleClose();
        }).catch((error)=>{
            console.log(error)
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
            <h1 className="heading">Notes in Trash are deleted in 7 days</h1>
                <div className="noteDisplay"> 
                    <div className="notes-box" style={{justifyContent:'center'}}>
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
                    </div> 
                </div>
            </div>
         );
    }
}
 
export default Trash;