import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface Props {
  showSnackbar: boolean;
  setSnackBar: any;
  edit: string;
}

const SuccessPop: React.FC<Props> = ({ showSnackbar, setSnackBar, edit }) => {
  const handleClose = () => {
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
          The Role has been {edit} Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default SuccessPop;
