import React,{Component} from 'react'
import '../../App.css'
import TrashIcon from '../../assets/trash.png';


class Trash extends Component {
    render() { 
        return ( 
            <div className="trash">
                <img src={TrashIcon} alt="trash logo" className="trashlogo"/>
            </div>
         );
    }
}
 
export default Trash;