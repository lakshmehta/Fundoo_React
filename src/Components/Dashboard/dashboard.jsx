import React from 'react'
import Header from '../Header/header';
import Note from '../Note/Note'
import './dashboard.css'
import '../../App.css'
import Reminder from '../Reminder/reminder'
import Archieve from '../Archieve/archieve' 
import Trash from '../Trash/trash'
import MapData from '../MapData/mapData';





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
    displayRenderData =(data) =>{
        return <MapData notes={data}/>
    }
    rendering=()=>{
        if(this.state.page =="keep"){
            return <Note render={this.displayRenderData}/>
        }
        else if(this.state.page =="Reminders"){
            return <Reminder render={this.displayRenderData}/>
        }
        else if(this.state.page =="Archieve"){
            return <Archieve render={this.displayRenderData}/>
        }
        else if(this.state.page =="Trash"){
            return <Trash render={this.displayRenderData}/>
        }
        else{
            return <Note render={this.displayRenderData}/>
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