import React from 'react'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import pin from '../../assets/pinn.svg';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import IconButton from '@material-ui/core/IconButton';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UserService from '../../services/userService';
import './takeanote.css'
import { Button } from '@material-ui/core';




const styles = {
    underline: {
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};
class TakeNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            title:"",
            note:"",
            response:false
        }
    }
    handleNoteOpen = () => {
        this.setState({open:false}, () => {console.log(this.state)})
    }
    handleNoteclose = () => {
        let userData={
            title: this.state.title,
            description: this.state.note
        }
        if(this.state.title !=="" && this.state.description !==""){
            new UserService().addNote(userData).then((data)=>{
                console.log("note added",data);
                this.props.getAll()
                this.setState({
                    open:true,
                    title:"",
                    note:"",
                    response:true
                }, () => {console.log(this.state)})
            }).catch(error =>{
                this.setState({
                    open: true
                }, () => { console.log(this.state)})
                console.log("error",error)
            })
        }else{
            this.setState({
                open:true,
                title:"",
                note:"",
                response: true
            }, () => {console.log(this.state)} )
        }
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => { console.log(this.state); })
    }
    render() { 
        const { classes } = this.props;
        return ( 
            <div className="note">
                {this.state.open ? (
                    <div className="take-note"
                    onClick={this.handleNoteOpen}>
                    <div style = {{width: '110px', color:'#5F6368'}}>
                        Take a note...
                    </div>
                    <div className="take-note-icon">
                            <div className="take-icon">
                                <CheckBoxOutlinedIcon />
                            </div>
                            <div className="take-icon">
                                <BrushOutlinedIcon />
                            </div>
                            <div className="take-icon">
                                <ImageOutlinedIcon />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="take-note take-note-expand">
                            <div className="take-note-input">
                                <div className="title-pin">
                                    <TextField
                                        className={classes.underline}
                                        name="title"
                                        onChange={this.handleInput}
                                        placeholder="Title"
                                        multiline
                                    />
                                    <img className="pin" src={pin} alt="" />
                                </div>
                                <TextField
                                    className={classes.underline}
                                    name="note"
                                    onChange={this.handleInput}
                                    placeholder="Take a note.."
                                    multiline
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                            <div className="align-icon">
                                <div className="position">
                                    <IconButton>
                                        <AddAlertOutlinedIcon  style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                    <IconButton>
                                        <PersonAddOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                    <IconButton>
                                        <PaletteOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                    <IconButton>
                                        <ImageOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                    <IconButton>
                                        <ArchiveOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                    <IconButton>
                                        <MoreVertOutlinedIcon style={{fontSize:"medium",color:"black"}}/>
                                    </IconButton>
                                </div>
                                <div className="close">
                                    <Button variant="text" size="small" onClick={() => {
                                        this.handleNoteclose();
                                    }}>
                                        Close
                                     </Button>
                                </div>
                            </div>
                        </div>

                )}
            </div>
         );
    }
}

export default (withStyles(styles)(TakeNote));