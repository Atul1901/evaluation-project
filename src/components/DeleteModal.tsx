import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";

import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import deleteLogo from "../utils/assets/logos/Vector.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  border: "none",
};

export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        // variant="contained"
        sx={{ fontFamily: "Montserrat" }}
      >
        <img src={deleteLogo} alt="delete logo" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="add-modal-heading">
            <p style={{ color: "#424B5A" }}>Delete</p>
          </div>
          <Divider />
          <p>Are you sure you want to delete this role</p>
          <div className="delete-buttons">
            <button className="cancel-button">cancel</button>
            <button className="yes-button">Yes Delete!</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
