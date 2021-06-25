import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import '../Header/header.css'
export default function Search(props) {
  const [searchTerm,setSearchTerm] = useState("")
  // const [searchedNote,setSearchNote] = useState([])

  const handleChange = (e,value) => {
      
      console.log("Search method",value)
      
      setSearchTerm({searchTerm: value})
      props.handleSearchNote(value)
    
      console.log("Search term in search method",searchTerm)
  }
    return (
        <div>
            <div className="search">
                  <div className="searchIcon">
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search"
                    className="inputInput"
                    onChange={(e)=>handleChange(e,e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div> 
        </div>
    )
}
