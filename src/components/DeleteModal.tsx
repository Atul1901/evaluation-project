import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../App.css";
import { Divider } from "@mui/material";
import deleteLogo from "../utils/assets/logos/Vector.png";
import { useDispatch } from "react-redux";
import { deleteRole } from "../utils/redux/reducers/roles/RoleSlice";

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

export default function DeleteModal({ uniqID }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const onSumbit = () => {
    dispatch(deleteRole(uniqID));
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ fontFamily: "Montserrat" }}>
        <img src={deleteLogo} alt="delete logo" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="add-modal-heading">
            <p style={{ color: "#424B5A" }}>Delete</p>
          </div>
          <Divider />
          <p>Are you sure you want to delete this role</p>
          <div className="delete-buttons">
            <button className="cancel-button" onClick={handleClose}>
              cancel
            </button>
            <button className="yes-button" onClick={onSumbit}>
              Yes Delete!
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
