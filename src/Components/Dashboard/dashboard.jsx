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
            page:"Keep",
            gridView:false,
            search: "",
            searchElement:[],
            SearchedData:[]
        }
    }
    handleSearchNote=(value)=>{
        this.setState
        ({
            search:value
        })
        console.log(this.state.search,"laksh")
        this.filterSearchNote(value)
    }
    getDataFromNote=(data)=>{
        this.setState({searchElement:data})
        console.log("getting from get note", data);
    }
    onClickGrid=()=>{
        this.setState({
          gridView:!this.state.gridView
        })
        console.log(this.state.gridView,"gridView")
    }
    toSetPage=(page)=>{
        this.setState({page:page})
        console.log(page)
    }
    displayRenderData =(data) =>{
        console.log(data,"render data")
        return <MapData gridView={this.state.gridView} notes={data}/>
    }
    
    
    
    rendering=()=>{
        if(this.state.page =="keep"){
            return <Note searchNote={this.getDataFromNote} gridView={this.state.gridView} render={this.displayRenderData}/>
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
// console.log(this.state.gridView,"dashboard view");
        return ( 
            <div>
                <Header onChange={this.toSetPage} gridView={this.onClickGrid} view={this.state.gridView} handleSearch={this.handleSearchNote} searchNote={this.state.searchNote} search={this.state.search}/>
                {this.rendering()}
            </div>
            );
    }
}
 
export default Dashboard;