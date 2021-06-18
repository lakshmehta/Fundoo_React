import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



export default function SimpleSnackbar(props) {
    return(
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.openStatus}
        autoHideDuration={3000}
        onClose={props.closeStatus}
        message={props.text}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={props.closeStatus}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.closeStatus}>
            <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    )
}