import React from 'react'
import NoteCard from '../Card/notecard'
export default function MapData(props) {
    return (
        <div className="noteDisplay"> 
        <div className="notes-box" style={{marginTop:'80px'}}>
            {props.notes.reverse().map((value)=>
                <NoteCard value={value}/>
            )}
        </div>          
    </div>
    )
}
