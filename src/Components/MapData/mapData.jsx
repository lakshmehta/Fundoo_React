import React from 'react'
import NoteCard from '../Card/notecard'
export default function MapData(props) {
    console.log(props.notes,"===props dot noter")
    return (
        <div className="noteDisplay"> 
        <div className="notes-box" style={{marginTop:'80px'}}>
            {props.notes.reverse().map((value)=>
                <NoteCard view={props.gridView} value={value}/>
            )}
        </div>          
    </div>
    )
}
