import { useEffect, useState, useContext } from "react";
import React from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Toast from '../../Toast';
function SignInForm() {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [formInput, setFormInput] = React.useState({
    email: "",
    password: "",
  });

  //   const [resMsg, setResMsg] = useState("");
  //   const [resMsgSuccess, setResMsgSuccess] = useState("");

  const emailHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };
  const passwordHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        password: event.target.value,
      };
    });
  };
  const formData = {
    email: formInput.email,
    password: formInput.password,
  };
  const isValidEmail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };
  const submitHandler = async (event) => {
    let error = "";

    // if(formInput.user_email=='' && error ==''){
    //     error = "Please enter your email";
    //     setResMsg(error);
    // }
    if (!isValidEmail(formInput.email) && error == "") {
      error = "Please Enter a valid email!!";
      //   setResMsg(error);
    }
    if (formInput.password == "" && error == "") {
      error = "Please enter your password";
      //   setResMsg(error);
    }

    console.log(error);

    if (error == "") {
      // console.log(formData);
      await loginUser(formData);
      // Toast('success');
    } else {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // console.log(formData);
    event.preventDefault();
  };

  const loginUser = async (formData) => {
    try {
      axios
        .post("http://localhost:5000/user/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data.data);

          sessionStorage.setItem("user", JSON.stringify(response.data.data));
          
          sessionStorage.setItem("token", response.data.token);
         
          AuthCtx.setIsLoggedIn(true);

          toast.success("Logged in Succesfully", {
            position: toast.POSITION.TOP_RIGHT,
          });

          // navigate("/admin/add/product");
          navigate("/admin");
          // Toast('Logged in Succesfully');
        })
        .catch((error) => {
          // console.log(error);
          // setResMsg(error.response.data.message);
          console.log(error);
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } catch (err) {
      // console.log(err);
      console.log(err);
      //   setResMsg(err.response.data.message);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  // const showToastMessage = () => {
  //     toast.success('Success Notification !', {
  //         position: toast.POSITION.TOP_RIGHT
  //     });
  // };
  useEffect(() => {
    // setResMsg("");
    // setResMsgSuccess("");
  }, [formInput]);

  return (
    
    <div>
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" , backgroundColor: "#eee" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h1 className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </h1>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              autoComplete="email"
                              className="form-control"
                              onChange={emailHandler}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              className="form-control"
                              onChange={passwordHandler}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={submitHandler}
                          >
                            Login
                          </button>
                          </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignInForm;
