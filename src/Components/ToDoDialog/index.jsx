import React from "react";
import "../../styles/header.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ToDoDialog = (props) => {
  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {props.element && props.element.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="image-div"><img className="inner-image" src={props.element && props.element.images.mobile}/></div>
          <div className="task-description" >{props.element && props.element.description}</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleModal(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToDoDialog;