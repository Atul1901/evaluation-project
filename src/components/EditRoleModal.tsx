import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import edit from "../utils/assets/logos/Edit.png";
import DatePicking from "./DatePicking";
import { useDispatch } from "react-redux";
import { editRole } from "../utils/redux/reducers/roles/RoleSlice";
import { checkEmpty, checkError, checkValidation } from "../utils/helpers";
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

export default function EditRoleModal({ item }: any) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [isSnackBar, setSnackBar] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const [errorMessage, setErrorMessage] = React.useState({
    roleName: "",
    roleID: "",
    organizationName: "",
    createdDate: "",
    roleState: "",
  });

  const [inputData, setInputData] = React.useState({
    roleName: item.user_name,
    organizationName: item.organization_name,
    createdDate: item.created_date,
    roleState: item.role_state,
    roleID: item.role_id,
  });

  const isEmptyIsError = checkEmpty(inputData) || checkError(errorMessage);

  const onSubmit = () => {
    if (isEmptyIsError) {
      return;
    }
    const reqData = {
      user_name: inputData.roleName,
      organization_name: inputData.organizationName,
      created_date: inputData.createdDate,
      role_state: inputData.roleState,
      role_id: inputData.roleID,
      uniq_id: item.uniq_id,
    };
    handleClose();
    setSnackBar(true);
    dispatch(editRole(reqData));
  };

  const onHandleChange = (event: any, field: string) => {
    let { value } = event.target;
    const Validation = checkValidation(field, value);
    if (!Validation.isValid) {
      setErrorMessage({ ...errorMessage, [field]: Validation.errorMessage });
    } else {
      setErrorMessage({ ...errorMessage, [field]: "" });
    }
    value = value.toUpperCase();
    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ fontFamily: "Montserrat" }}>
        <img src={edit} alt="edit logo" />
      </Button>
      <SuccessPop
        showSnackbar={isSnackBar}
        setSnackBar={setSnackBar}
        edit={"editted"}
      />
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                value={inputData.roleName}
                onChange={(e) => onHandleChange(e, "roleName")}
                className={
                  errorMessage.roleName ? "place-input error" : "place-input"
                }
              ></input>
              {errorMessage.roleName && (
                <p className="error-text">{errorMessage.roleName}</p>
              )}
            </div>
            <div className="input-data">
              <p className="input-field-name">Organization Name</p>
              <input
                type="text"
                className="place-input"
                value={inputData.organizationName}
                onChange={(e) => onHandleChange(e, "organizationName")}
              ></input>
            </div>
            <div className="input-data">
              <p className="input-field-name">Created Date</p>
              <DatePicking
                item={item}
                setInputData={setInputData}
                inputData={inputData}
              />
            </div>
            <div className="input-data">
              <p className="input-field-name">Role State</p>
              <select
                id="status"
                name="status"
                className="place-input"
                onChange={(e) => onHandleChange(e, "roleState")}
              >
                <option value="">{inputData.roleState}</option>
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
                value={inputData.roleID}
                pattern="[0-9A-Za-z]{6}"
                title="Please enter a 6-digit alphanumeric value"
                className={
                  errorMessage.roleID ? "place-input error" : "place-input"
                }
                onChange={(e) => onHandleChange(e, "roleID")}
              ></input>
              {errorMessage.roleID && (
                <p className="error-text">{errorMessage.roleID}</p>
              )}
            </div>
          </div>
          <div>
            <button className="modal-add-button" onClick={onSubmit}>
              Update
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
