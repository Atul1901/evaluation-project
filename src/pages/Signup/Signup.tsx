import { Toolbar, IconButton, Typography, Checkbox } from "@mui/material";
import Logo from "../../utils/assets/logos/Logo.png";
import Person from "../../utils/assets/logos/person.png";
import Social from "../../utils/assets/logos/social.png";
import React from "react";
import { checkValidation } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../../utils/redux/reducers/roles/RoleSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = React.useState({
    name: "",
    phoneNum: "",
    emailId: "",
    dob: "",
    wru: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = React.useState({
    name: "",
    phoneNum: "",
    emailId: "",
    dob: "",
    wru: "",
    password: "",
  });

  const onHandleChange = (event: any, field: string) => {
    let { value } = event.target;
    const Validation = checkValidation(field, value);
    if (!Validation.isValid) {
      setErrorMessage({ ...errorMessage, [field]: Validation.errorMessage });
    } else {
      setErrorMessage({ ...errorMessage, [field]: "" });
    }

    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onRegister = () => {
    dispatch(addLoginUser(inputData));
    navigate("/signin");
  };

  return (
    <div className="wrapper">
      <div className="left-wrapper">
        <div className="left-container">
          <Toolbar sx={{ height: 10 + "px" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={Logo} alt="this is the logo of squadra" />
            </IconButton>
            <Typography variant="h6" component="div" sx={[styles.header]}>
              Squadra
            </Typography>
          </Toolbar>

          <div>
            <Typography component="div" sx={[styles.signUpText]}>
              Sign Up to
            </Typography>
            <Typography component="div" sx={[styles.exploreText]}>
              squadra to explore the app
            </Typography>

            <div className="img-login-text">
              <div className="info-text-container">
                <Typography component="div" sx={[styles.infoText]}>
                  If you already have an account
                </Typography>
                <div className="info-text-box">
                  <Typography component="div" sx={[styles.infoText]}>
                    You can
                  </Typography>
                  <Typography
                    component="div"
                    sx={[
                      styles.infoText,
                      { color: "#4D47C3", fontWeight: 500 },
                    ]}
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Login here !
                  </Typography>
                </div>
              </div>
              <img
                className="person-img"
                src={Person}
                alt="this is the logo of squadra"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="right-content">
          <Typography component="div" sx={[styles.signUpTitle]}>
            Sign Up
          </Typography>
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => onHandleChange(e, "name")}
              className={"place-input-sign"}
              placeholder="Enter your name"
            ></input>
            {errorMessage.name && (
              <p className="error-text">{errorMessage.name}</p>
            )}
            <input
              type="text"
              onChange={(e) => onHandleChange(e, "phoneNum")}
              className={"place-input-sign"}
              placeholder="Phone number"
            ></input>
            {errorMessage.phoneNum && (
              <p className="error-text">{errorMessage.phoneNum}</p>
            )}
            <input
              type="text"
              onChange={(e) => onHandleChange(e, "emailId")}
              className={"place-input-sign"}
              placeholder="Enter your email Id"
            ></input>
            {errorMessage.emailId && (
              <p className="error-text">{errorMessage.emailId}</p>
            )}
            <input
              placeholder="DOB"
              className={"place-input-sign"}
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              max={new Date().toISOString().split("T")[0]}
              id="date"
            />

            <input
              type="text"
              onChange={(e) => onHandleChange(e, "wru")}
              className={"place-input-sign"}
              placeholder="Who you are?"
            ></input>
            <input
              type="text"
              onChange={(e) => onHandleChange(e, "password")}
              className={"place-input-sign"}
              placeholder="Password"
            ></input>
          </div>
          <div className="tnc-box">
            <Checkbox />
            <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
              <Typography component="div" sx={[styles.tncText]}>
                I accept the
              </Typography>
              <Typography
                component="div"
                sx={[styles.tncText, { color: "#3E7ADE" }]}
              >
                terms and conditions
              </Typography>
            </div>
          </div>

          <button onClick={onRegister} className={"reg-button"}>
            Register
          </button>
          <Typography component="div" sx={[styles.continueText]}>
            or continue with
          </Typography>
          <div className="social-logo-box">
            <img
              className="social-logo"
              src={Social}
              alt="this is the logo of squadra"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

const styles = {
  header: {
    color: "black",
    fontFamily: "Prompt",
    fontWeight: 600,
    fontSize: "24px",
  },

  signUpText: {
    color: "black",
    fontFamily: "Prompt",
    fontWeight: 600,
    fontSize: "54px",
  },

  exploreText: {
    color: "black",
    fontFamily: "Prompt",
    fontWeight: 500,
    fontSize: "30px",
  },

  infoText: {
    color: "black",
    fontFamily: "Prompt",
    fontWeight: 400,
    fontSize: "20px",
  },

  signUpTitle: {
    color: "black",
    fontFamily: "Prompt",
    fontWeight: 500,
    fontSize: "32px",
    marginBottom: "10px",
  },
  tncText: {
    color: "#B5B5B5",
    fontFamily: "Prompt",
    fontWeight: 400,
    fontSize: "16px",
  },
  continueText: {
    color: "#B5B5B5",
    fontSize: "16px",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
