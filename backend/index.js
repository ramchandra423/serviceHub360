// Import required modules
const express = require('express');

const userRoute = require("./routes/user");
const contactRoutes = require("./routes/contactus")
const { dbConn } = require("./database/connection");
const employeeRoutes = require("./routes/employee")
const route =require("./routes/userRoute");
const eproute =require("./routes/empRoute")
const serviceroute =require("./routes/serviceRoute")
const cors = require("cors")
const bookingroute=require("./routes/bookingRoute")
// Create an instance of Express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(cors())
dbConn();
// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/user", userRoute);
app.use("/employee", employeeRoutes);
app.use("/contact-us", contactRoutes);
app.use("/api", route);
app.use("/epapi",eproute);
app.use("/sapi",serviceroute);
app.use("/booking",bookingroute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
