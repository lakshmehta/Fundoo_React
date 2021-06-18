import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import '../../App.css'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
const currencies = [
  {
    value: 'Do not repeat`',
    label: 'Do not repeat',
  },
  {
    value: 'Daily',
    label: 'Daily',
  },
  {
    value: 'Weekly',
    label: 'Weekly',
  },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
  {
    value: 'Yearly',
    label: 'Yearly',
  },
  {
    value: 'Custom',
    label: 'Custom',
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width:'250px',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginTop:theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(props.reminder);
  const [selectedTime, setSelectedTime] = React.useState(props.reminder);
  const [close, setClose] = React.useState(false)

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date,"date")
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    console.log(time,"time")
  }
  const onSave = () =>{
    setClose(!close)
    if(props.edit === true){
      console.log("if part onSave")
      props.updateReminder(selectedDate, selectedTime)
    }
    else{
      console.log("else part")
      props.getReminder(selectedDate, selectedTime)
    }
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.paper}>
       <form className={classes.container} noValidate>
         {/* <div className="dateTimePickerContainer">
         <ArrowBackIcon style={{ marginRight: "7%" }} />
         </div> */}
         <KeyboardDatePicker
            className={classes.textField}
            disableToolbar={false}
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
            "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            className={classes.textField}
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <TextField
          id="standard-select-currency"
          select
          className={classes.textField}
          defaultValue={currencies}
          Value={currencies}
          InputLabelProps={{
          shrink: true,
          }}
          inputProps={{
          step: 300, // 5 min
          }}
        >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>            
    </form>
    <div className="saveButton">
                <Button color="primary" variant="text" onClick={onSave}>
                  save
                </Button>
              </div>
    </div>
    </MuiPickersUtilsProvider>
  );
}
