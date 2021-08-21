import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewChat } from "../../store/chats";
import { addNewMessageList } from "../../store/messages";

export function AddNewChat() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleNewRoom = useCallback(
    (room) => {
      dispatch(addNewChat({ name: room, value: "" }));
      dispatch(addNewMessageList({ name: room }));
    },
    [dispatch],
  );

  const confirmNewRoom = () => {
    handleNewRoom(room);
    setRoom(() => "");
    handleClose();
  };

  const handleChangeRoom = ({ target }) => {
    setRoom(() => target.value);
  };

  const getValue = () => console.log(room);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new chat
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New chat</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the name of the new chat</DialogContentText>
          <TextField
            autoFocus={true}
            margin="dense"
            id="name"
            fullWidth={true}
            onChange={handleChangeRoom}
            value={room}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmNewRoom} color="primary">
            Add
          </Button>
          <Button onClick={getValue} color="primary">
            Log
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
