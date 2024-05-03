import React, { useState } from "react";
import axios from "axios";
import { gridColumnPositionsSelector } from "@mui/x-data-grid";

function SignUpForm() {
  const [userType, setUserType] = useState("User");
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [empData, setEmpData] = useState({
    category: "",
    empName: "",
    empEmail: "",
    empPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleEmpChange = (evt) => {
    const { name, value } = evt.target;
    setEmpData({
      ...empData,
      [name]: value,
    });
  };

  const handleSignUp = async (evt) => {
    evt.preventDefault();
    try {
      let formData;
      if (userType === "Employee") {
        formData = empData;
        const response = await axios.post("http://localhost:5000/employee/signup", formData);
        console.log({employee:response})
      } else {
        formData = userData;
        const response = await axios.post("http://localhost:5000/user/signup", formData);
        console.log({user:response});
      }
      console.log("Signup successful");
      alert("Signed up successfully!");
      setUserType("User");
      setUserData({
        userName: "",
        email: "",
        password: "",
      });
      setEmpData({
        category: "",
        empName: "",
        empEmail: "",
        empPassword: "",
      });
    } catch (error) {
      alert(error)
      alert(empData.category)
      console.error("Error signing up:", error.message);
      setError(error.response ? error.response.data.message : "Unknown error occurred");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <div className="heading-signup">
      <h1>Create Account</h1>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <div className="radio-button">
        <label className="radio-button">
          <input
            type="radio"
            name="userType"
            value="User"
            checked={userType === "User"}
            onChange={() => setUserType("User")}
          />
          <span className="radio"></span>
          User
        </label>

        <label className="radio-button">
          <input
            type="radio"
            name="userType"
            value="Employee"
            checked={userType === "Employee"}
            onChange={() => setUserType("Employee")}
          />
          <span className="radio"></span>
          Employee
        </label>
      </div>
      </div>

      {userType === "Employee" ? (
        <form onSubmit={handleSignUp}>
          <div>
            <select name="category" onChange={handleEmpChange} defaultValue="">
              <option value="" disabled hidden>
                Select your Category
              </option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Driver">Driver</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Barber">Barber</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Home Cleaner">Home Cleaner</option>
            </select>
          </div>
          <input
            type="text"
            name="empName"
            value={empData.empName}
            onChange={handleEmpChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="empEmail"
            value={empData.empEmail}
            onChange={handleEmpChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="empPassword"
            value={empData.empPassword}
            onChange={handleEmpChange}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleSignUp}>
          <div>
            <input
              type="text"
              name="userName"
              value={userData.userName}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUpForm;
