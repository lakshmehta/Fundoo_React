import React from 'react'
import {   Dialog,TextField } from '@material-ui/core';
import Icon from '../Icons/icon'
import '../../App.css'


class NoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
                <div className="align-title-des" style={{background:this.props.val.color}}>
                        <div  className="title-note">
                           {this.props.val.title}  
                        </div> 
                        <div className="description-note">
                           {this.props.val.description}
                        </div>
                        <Icon Notes={this.props.val}/>
                    </div>
        
         );
    }
}
 
export default NoteCard;