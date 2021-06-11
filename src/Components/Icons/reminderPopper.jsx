import React from 'react';
import '../../App.css'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, Card, CardContent, ClickAwayListener, Divider, Grid } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import moment from "moment";


const Reminder= (setDateTimeChip, setDisplayDateTime, item)=> {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [showReminder, setShowReminder] = React.useState(false);
  const [showDateTime, setShowDateTime] = React.useState(false);
  
  const handleDateChange = (day) => {
    setShowDateTime(false)
    setShowReminder(false)
    let time = ''
    let date = ''
    if(day === 'today'){
        date = moment(selectedDate).format("MMM Do YY")
        time = '8:00PM'
    }else if(day === 'tomorrow'){
        date = moment(selectedDate).add(1,'day').format("MMM Do YY")
        time = '8:00AM'
    }
    else{
        date = moment(selectedDate).format("MMM Do YY")
        time = moment(selectedDate).format("LT")
    }
    if(item !== undefined){
      setDateTimeChip(selectedDate)
    }else{
      setDateTimeChip(selectedDate)
      setDisplayDateTime(date+' '+time)
    }
  };
   

    return (
      <ClickAwayListener onClickAway={()=> setShowReminder(false)}>
        <div>
          <AddAlertOutlinedIcon className="icon-size"   onClick={() => setShowReminder(!showReminder)}/>
          {showReminder ? (
            <div className="dateTimeContainer">
              <Card style={{ width: 300, height: 280 }}>
                <div className="dateTimeCardContainer">
                  <CardContent className="dateTimeCardContentReminder">
                    Reminder:
                  </CardContent>
                </div>
                <CardContent className="dateTimeCardContentStyle">
                <div className="dateTimeSubCardcontentStyle"
                    onClick={()=>handleDateChange('today')}
                >
                   Later Today
                  <div>8:00PM</div>
                </div>
                <div className="dateTimeSubCardcontentStyle"
                    onClick={()=>handleDateChange('tomorrow')}
                >
                  Tomorrow
                  <div>8:00AM</div>
                </div>
                <div className="dateTimeSubCardcontentStyle"
                    onClick={()=>handleDateChange('tomorrow')}
                >
                  Next Week
                  <div>8:00AM</div>
                </div>
                <div
                  className="pickDateTimeLabel"
                  onClick={() => setShowDateTime(!showDateTime)}
                >
                  <QueryBuilderIcon style={{ marginRight: "4%" }} />
                  Pick date & time
                </div>
              </CardContent>
              </Card>
            </div>
          ) : null}
          {showDateTime ? (
             <div style={{ position: "absolute" }}>
              <Card style={{ width: 300, height: 250 }}>
                <CardContent
                  className="dateTimePickerContainer"
                  onClick={() => setShowDateTime(!showDateTime)}>
                    <ArrowBackIcon style={{ marginRight: "7%" }} />
                    <div>Pick date & time</div>
                </CardContent>
                <Divider />
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar={false}
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker"
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <div className="saveButton">
                <Button color="primary" variant="text" onClick={()=>handleDateChange()}>
                  save
                </Button>
              </div>
            </div>
              </Card>
             </div>
             )  : null}
        </div>
      </ClickAwayListener>

    )
}
export default Reminder;