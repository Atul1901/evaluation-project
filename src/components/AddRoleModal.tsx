import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import "../App.css";

import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import DatePicking from "./DatePicking";
import { getUsersData } from "../utils/DummyData";

import { useDispatch } from "react-redux";
import { addRole } from "../utils/redux/reducers/roles/RoleSlice";
import uniqid from "uniqid";
import SuccessPop from "./SuccessPop";

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

export default function AddRoleModal() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [isSnackBar, setSnackBar] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const [inputData, setInputData] = React.useState({
    roleName: "",
    organizationName: "",
    createdDate: "",
    roleState: "",
    roleID: "",
    uniqID: "",
  });

  const onHandleChange = (event: any, name: string) => {
    let { value } = event.target;
    console.log("name:", name, "value:", value);
    value = value.toUpperCase();
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reset = () => {
    setInputData({
      roleName: "",
      organizationName: "",
      createdDate: "",
      roleState: "",
      roleID: "",
      uniqID: "",
    });
  };

  const onSubmit = () => {
    const reqData = {
      user_name: inputData.roleName,
      organization_name: inputData.organizationName,
      created_date: inputData.createdDate,
      role_state: inputData.roleState,
      role_id: inputData.roleID,
      uniq_id: uniqid(),
    };
    console.log("data:", inputData);
    handleClose();
    setSnackBar(true);
    console.log(isSnackBar, "snackBar");
    getUsersData.data.push(reqData);
    dispatch(addRole(reqData));
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ backgroundColor: "#4D47C3", fontFamily: "Montserrat" }}
      >
        Add
      </Button>
      <SuccessPop showSnackbar={isSnackBar} />
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="add-modal-heading">
            <p>Add Role</p>
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
                onChange={(e) => onHandleChange(e, "roleName")}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Organization Name</p>
              <input
                type="text"
                className="place-input"
                onChange={(e) => onHandleChange(e, "organizationName")}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Created Date</p>

              <div>
                <DatePicking
                  setInputData={setInputData}
                  inputData={inputData}
                />
              </div>
            </div>
            <div className="input-data">
              <p className="input-field-name">Role State</p>

              <select
                id="status"
                name="status"
                className="place-input"
                onChange={(e) => onHandleChange(e, "roleState")}
              >
                <option value=""></option>
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
                onChange={(e) => onHandleChange(e, "roleID")}
              ></input>
            </div>
          </div>
          <div>
            <button className="modal-add-button" onClick={onSubmit}>
              ADD
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
