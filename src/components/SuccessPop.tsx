import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface Props {
  showSnackbar: boolean; // Define boolean prop
}

const SuccessPop: React.FC<Props> = ({ showSnackbar }) => {
  const [isAlert, setAlert] = useState<boolean>(true);

  const handleClose = () => {
    setAlert(false);
  };

  return (
    <>
      <Snackbar
        sx={{
          borderRadius: 5,
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1000}
        open={showSnackbar && isAlert}
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