import React from 'react'
import Header from '../Header/header';
import Note from '../Note/Note'
import './dashboard.css'
import '../../App.css'
import Reminder from '../Reminder/reminder'
import Archieve from '../Archieve/archieve' 
import Trash from '../Trash/trash'






class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            page:"Keep"
        }
    }
    toSetPage=(page)=>{
        this.setState({page:page})
        console.log(page)
    }
    rendering=()=>{
        if(this.state.page =="keep"){
            return <Note/>
        }
        else if(this.state.page=="Reminders"){
            return <Reminder/>
        }
        else if(this.state.page=="Archieve"){
            return <Archieve/>
        }
        else if(this.state.page=="Trash"){
            return <Trash/>
        }
        else{
            return <Note/>
        }
    }
    render() { 
        return ( 
            <div>
                <Header onChange={this.toSetPage}/>
                {this.rendering()}
            </div>
            );
    }
}
 
export default Dashboard;