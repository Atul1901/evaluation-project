import { Toolbar, IconButton, Typography, Checkbox } from "@mui/material";
import "./styles.css";
import Logo from "../../utils/assets/logos/Logo.png";
import Person from "../../utils/assets/logos/person.png";
import Social from "../../utils/assets/logos/social.png";
import DatePicking from "../../components/DatePicking";
import React from "react";
import { checkValidation } from "../../utils/helpers";
import { login_users } from "../../utils/redux/reducers/roles/RoleSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const login_data = useSelector(login_users);

  const navigate = useNavigate();
  const [inputData, setInputData] = React.useState({
    emailId: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = React.useState({
    emailId: "",
    password: "",
    wrongPassword: "",
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
    for (const user of login_data) {
      if (
        user.emailId === inputData.emailId &&
        user.password === inputData.password
      ) {
        navigate("/roles");
        return;
      }
    }
    setErrorMessage({
      ...errorMessage,
      ["wrongPassword"]: "Please enter valid credentials",
    });
    console.log("false");
    console.log("login-data >> ", login_data);
    console.log("input data > ", inputData);
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
              Sign In to
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
                      navigate("/signup");
                    }}
                  >
                    Register here !
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
            Sign In
          </Typography>
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => onHandleChange(e, "emailId")}
              className={"place-input-sign"}
              placeholder="Enter your email Id"
            ></input>

            <input
              type="text"
              onChange={(e) => onHandleChange(e, "password")}
              className={"place-input-sign"}
              placeholder="Password"
            ></input>
          </div>

          <Typography component="div" sx={[styles.forgetPass]}>
            Forgor password ?
          </Typography>

          {errorMessage.wrongPassword && (
            <p className="error-text">{errorMessage.wrongPassword}</p>
          )}

          <button onClick={onRegister} className={"reg-button"}>
            Login
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

export default Signin;

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
  forgetPass: {
    color: "#B5B5B5",
    fontFamily: "Prompt",
    fontWeight: 400,
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  continueText: {
    color: "#B5B5B5",
    fontSize: "16px",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
