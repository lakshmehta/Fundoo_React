import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
      borderRadius:'3px',
      maxWidth:'146px',
      display:'flex',
      flexDirection:'row',
      flexFlow:'wrap',
      padding: theme.spacing(1),
      backgroundColor:'white'
    },
})
);
const colors=[{
      code:'#FFFFFF',
    },
    {
        code:'#f28b82',
    },
    {
        code: '#fbbc04',
    },
    {
        code: '#fff475',
    },
    {
        code: '#ccff90',
    },
    {
        code: '#a7ffeb',
    },
    {
        code: '#cbf0f8',
    },
    {
        code: '#aecbfa',
    },
    {
        code: '#d7aefb',
    },
    {
        code: '#fdcfe8',
    },
    {  
        code: '#e8eaed',
    }
]


function SimplePopper(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }
    const open  = Boolean(anchorEl);
    const demo=(val)=>{
        return(
            <div className="color">
                <div style={{
                    backgroundColor:val.code,
                    color:val.code,
                    width:'28px',
                    height:'28px',
                    borderRadius:'15px',
                    cursor:'pointer'
                    }}
                    onClick={()=>{
                    props.putColor(val);
                    handleClick()}}>
                </div>
            </div>
        )
    }
    return(
        <>
            <PaletteOutlinedIcon className="icon-size" onClick={handleClick}/>
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition>
                <div className={classes.paper}>{colors.map(demo)}</div>
            </Popper>
        </>
    )
}



export default SimplePopper