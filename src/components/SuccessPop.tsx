import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface Props {
  showSnackbar: boolean; // Define boolean prop
  setSnackBar: any;
}

const SuccessPop: React.FC<Props> = ({ showSnackbar, setSnackBar }) => {
  // const [isAlert, setAlert] = useState<boolean>(true);

  const handleClose = () => {
    // setAlert(false);
    setSnackBar(false);
  };

  return (
    <>
      <Snackbar
        sx={{
          borderRadius: 5,
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        open={showSnackbar}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", fontFamily: "Montserrat" }}
        >
          The Role has been added Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default SuccessPop;
