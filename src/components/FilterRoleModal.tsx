import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import filterLogo from "../utils/assets/logos/Vector (1).png";
import { useDispatch } from "react-redux";
import { filterRole } from "../utils/redux/reducers/FilterSlice";
import { useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roleName, setRoleName] = React.useState("");
  const [organizationName, setOrganizationName] = React.useState("");
  const [createdDate, setCreatedDate] = React.useState("");
  const [roleState, setRoleState] = React.useState("");
  const [roleID, setRoleID] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [filter, setFilter] = React.useState([]);

  const data = useSelector((state: any) => {
    return state.roles;
  });
  console.log(data, "redux-data");
  console.log("usen name:", data[0].user_name);

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
    switch (field) {
      case "roleID":
        Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
        Validation.errorMessage = "enter valid role ID";
        break;

      case "organizationName":
        Validation.isValid = /^[0-9A-Za-z]{0,6}$/.test(value);
        Validation.errorMessage = "enter valid organization name";
        break;
    }
    return Validation;
  };
  const handleChange = (e: any, field: string) => {
    const value = e.target.value;
    const Validation = checkValidation(field, value);

    if (!Validation.isValid) {
      setErrorMessage(Validation.errorMessage);
    } else {
      setErrorMessage("");
    }
    setRoleID(value);
  };

  const onSubmit = () => {
    const reqData = {
      user_name: roleName,
      organization_name: organizationName,
      created_date: createdDate,
      role_state: roleState,
      role_id: roleID,
    };
    const filterData = data.filter(
      (data: any) =>
        roleName === data.user_name ||
        organizationName === data.organization_name ||
        createdDate === data.created_date ||
        roleState === data.role_state ||
        roleID === data.role_ID
    );
    // setFilter([...filterData]);
    dispatch(filterRole(filterData));
    console.log("filterdata:", filterData);
    handleClose();
  };

  // const filteredFormDetails = data.filter:any(
  //             (data) =>
  //                data.company_name === formDetails.company_name &&
  //                data.company_email_ID === formDetails.company_email_ID &&
  //                data.valid_till === formDetails.valid_till &&
  //                data.organization_name === formDetails.organization_name &&
  //                data.companys_ID === formDetails.companys_ID
  //          );
  //          setFilterData([...filteredFormDetails]);
  // formdetails has all the data to filter

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
            <button className="modal-add-button" onClick={onSubmit}>
              Continue
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
