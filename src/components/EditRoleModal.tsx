import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";

import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

import edit from "../utils/assets/logos/Edit.png";
import DatePicking from "./DatePicking";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  border: "none",
};

export default function EditRoleModal({ item }: any) {
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
        <img src={edit} alt="edit logo" />
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
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
            <p>Edit Role</p>
            <div className="close-modal" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <Divider />
          <div className="input-field">
            <div className="input-data">
              <p className="input-field-name">Role Name</p>
              <input
                type="text"
                className="place-input"
                placeholder={item.user_name}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Organization Name</p>
              <input
                type="text"
                className="place-input"
                placeholder={item.organization_name}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Created Date</p>
              {/* <input type="text" className="place-input"></input> */}
              <DatePicking item={item} />
            </div>
            <div className="input-data">
              <p className="input-field-name">Role State</p>
              {/* <input type="text" className="place-input"></input> */}
              <select id="status" name="status" className="place-input">
                <option value="">{item.role_state}</option>
                <option
                  value="active"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Active
                </option>
                <option
                  value="inactive"
                  style={{ fontFamily: "Poppins", fontWeight: 400 }}
                >
                  Inactive
                </option>
              </select>
            </div>
            <div className="input-data">
              <p className="input-field-name">Role ID</p>
              <input
                type="text"
                className="place-input"
                placeholder={item.role_id}
              ></input>
            </div>
          </div>
          <div>
            <button className="modal-add-button">Update</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
