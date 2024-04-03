import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import filterLogo from "../utils/assets/logos/Vector (1).png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 666,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  border: "none",
};

export default function FilterRoleModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roleName, setRoleName] = React.useState("");
  const [organizationName, setOrganizationName] = React.useState("");
  const [createdDate, setCreatedDate] = React.useState("");
  const [roleState, setRoleState] = React.useState("");
  const [roleID, setRoleID] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const clearFields = () => {
    setRoleName("");
    setOrganizationName("");
    setCreatedDate("");
    setRoleState("");
    setRoleID("");
  };
  const checkValidation = (field: string, value: any) => {
    let isValid = false;
    let Validation = {
      isValid: false,
      errorMessage: "",
    };
    console.log("field:", field);
    switch (field) {
      case "roleID":
        Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
        Validation.errorMessage = "enter valid role ID";
        console.log("roleid case");
        break;

      case "organizationName":
        Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
        Validation.errorMessage = "enter valid organization name";
        console.log("org case");
        break;
    }
    return Validation;
  };
  const handleChange = (e: any, field: string) => {
    const value = e.target.value;
    const Validation = checkValidation(field, value);

    console.log("validation:", Validation);
    if (!Validation.isValid) {
      setErrorMessage(Validation.errorMessage);
    } else {
      setErrorMessage("");
    }
    setRoleID(value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: "#4D47C3",
          fontFamily: "Montserrat",
          gap: 1,
          marginRight: 3,
        }}
      >
        <img
          src={filterLogo}
          alt="logo for the filter button"
          className="filter-logo"
        />
        Filter
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="add-modal-heading">
            <p>Filters</p>
            <div className="head-clear">
              <button className="clear-filter-button" onClick={clearFields}>
                Clear Filter
              </button>
              <div className="close-modal" onClick={handleClose}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <Divider />
          <div className="input-field">
            <div className="input-data">
              <p className="input-field-name">Role Name</p>
              <input
                type="text"
                className="place-input"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Organization Name</p>
              <input
                type="text"
                className="place-input"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              ></input>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
            <div className="input-data">
              <p className="input-field-name">Created Date</p>

              <input
                type="text"
                className="place-input"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Role State</p>

              <select
                id="status"
                name="status"
                className="place-input"
                value={roleState}
                onChange={(e) => setRoleState(e.target.value)}
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
                className={`place-input ${errorMessage && "error"}`}
                style={
                  (errorMessage && {
                    background: "#FF00001A",
                    border: "1px solid #FF0000",
                  }) ||
                  {}
                }
                pattern="[0-9A-Za-z]{6}"
                title="Please enter a 6-digit alphanumeric value"
                value={roleID}
                onChange={(e) => handleChange(e, "roleID")}
              ></input>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </div>
          <div>
            <button className="modal-add-button" onClick={handleClose}>
              Continue
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
