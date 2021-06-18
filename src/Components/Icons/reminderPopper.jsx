import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {  CardContent } from "@material-ui/core";
import Popper from '@material-ui/core/Popper';
import DatePickers from './dataAtime';

const useStyles = makeStyles((theme) => ({
  paper: {
    width:'250px',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Reminder(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [dateTime, setDateTime] = React.useState(false)
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
    
  const callDateTime = () => {
    setDateTime(!dateTime)
  }
  
  const getData = (date, time) => {
    props.getReminder(date, time)
  }
  const handleClick= (newPlacement) => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

   

  return (
    <div>
      <AddAlertOutlinedIcon className="icon-size"  onClick={handleClick('bottom-start')} style={{cursor:"pointer"}}/>
      <Popper  open={open} anchorEl={anchorEl} placement={placement}>
      {dateTime ? <DatePickers setAll={callDateTime}  getReminder={getData} edit={false}/>:
        <div className={classes.paper}>
          <div className="dateTimeCardContainer" style={{justifyContent:'space-between'}}>
             <div className="dateTimeCardContentReminder">
               Reminder:
              </div>
          </div>
            <CardContent className="dateTimeCardContentStyle" style={{justifyContent:'space-between'}} >
              <div className="dateTimeSubCardcontentStyle" >
                Later Today
                <div style={{marginLeft:'10px'}}>8:00PM</div>
              </div>
              <div className="dateTimeSubCardcontentStyle" >
                Tomorrow
                <div>8:00AM</div>
              </div>
              <div className="dateTimeSubCardcontentStyle">
                Next Week
               <div>8:00AM</div>
              </div>
              <div className="pickDateTimeLabel"  onClick={callDateTime}>
                <QueryBuilderIcon style={{ marginRight: "4%" }} />
                  Pick date & time
              </div>
            </CardContent>
        </div>
      }
      </Popper>
    </div>
  );
}
