// import React, { useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import AuthContext from "../../store/AuthContext";
// function SignInForm() {
//   const AuthCtx = useContext(AuthContext)
//   const [credentials, setCredentials] = React.useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();
//   const handleChange = evt => {
//     const value = evt.target.value;
//     setCredentials({
//       ...credentials,
//       [evt.target.name]: value
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Send POST request to the backend login route
//       console.log(credentials)
//       const response = await axios.post("http://localhost:5000/user/login", credentials);
      
//       // Handle success\
//       console.log(response.data)
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("userType",response.data.role) 
//       AuthCtx.setIsLoggedIn(true);
//       console.log(response.data.message);
//       // alert("Login Sucess") // You can do something with the response here, like redirecting the user

//       navigate("/admin");
//     }
//       catch (error) {
//         toast("login Failes");
//         // alert(error)
//         // alert(empData.category)
//         console.error("Error signing up:", error.message);
//         // setError(error.response ? error.response.data.message : "Unknown error occurred");
//       }
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleSubmit}>
//         <h1>Sign in</h1>
        
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={credentials.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={credentials.password}
//           onChange={handleChange}
//         />
//         <a href="#" className="forgot-pass">Forgot your password?</a>
//         <button>Sign In</button>
//       </form>
//       <ToastContainer/>
//     </div>
//   );
// }

// export default SignInForm;

import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../store/AuthContext";

function SignInForm() {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext)
  const handleChange = evt => {
    const { name, value } = evt.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send POST request to the backend login route
      const response = await axios.post("http://localhost:5000/user/login", credentials);
      // console.log(response.data)

      // const empResponse = await axios.post("http://localhost:5000/employee/login",credentials);

      // const adminResponse = await axios.post("http://localhost:5000/admin/login", credentials);
      // Handle success
      let responseData=response.data;
      if(!response.data.success){
        throw(response.data.message)
      }
      // if (empResponse.data.success){
      //   responseData=empResponse.data;
      // }else if(adminResponse.data.success){
      //   responseData=adminResponse.data;
      // }else if(userResponse.data.success){
      //   responseData=userResponse.data;
      // }
      // else{
      //   console.log("Some Error")
      // }
      // const { data } = response;
      // console.log(responseData);
      // console.log(data.role)
      toast.success("Login Success");

      // Set the token in localStorage
      // localStorage.setItem("token", data.token);
      // AuthCtx.setIsLoggedIn(true);
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("userType",responseData.role) 
      AuthCtx.setIsLoggedIn(true);
      // Redirect the user
      
      if(responseData.role==='admin'){
        navigate("/admin")
      }   
      if(responseData.role==='employee'){
        navigate("/employee")
      }
      if(responseData.role==='user'){
        navigate("/")
      }
      
      
    } catch (error) {
      // Handle errors
      toast.error(error.message);
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <a href="#" className="forgot-pass">Forgot your password?</a>
        <button>Sign In</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default SignInForm;
