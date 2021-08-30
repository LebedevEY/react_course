import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewChatFB } from "../../store/chats";
import { addNewMessageListFB } from "../../store/messages";

const selector = (state) => state.chats.chats;

export function AddNewChat() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = useState("");
  const chats = useSelector(selector);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleNewRoom = useCallback(
    (room) => {
      dispatch(addNewChatFB({ title: room, value: "" }));
      dispatch(addNewMessageListFB(room));
    },
    [dispatch],
  );

  const isExistRoom = !room || chats.find((item) => item.title === room);

  const confirmNewRoom = () => {
    handleNewRoom(room);
    setRoom(() => "");
    handleClose();
  };

  const handleChangeRoom = ({ target }) => {
    setRoom(() => target.value);
  };

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
          <Button
            disabled={isExistRoom}
            onClick={confirmNewRoom}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
