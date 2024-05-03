import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar.js';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import { Home } from './HomePage.js';
import Footer from './Components/Footer/Footer.js';
import { ContactUs } from './Components/ContactDetails/ContactUs.js';
import MainSignup from './User/MainSignup.js';
import BasicCard from './Components/ServiceElements/BasicCard.js';
// import { CatagoryPage } from './Components/CatagoryPage.js';
import { CatagoryPage } from './Components/CatagoryPage.js';
import { AboutUs } from './Components/AboutUs/AboutUs.js';
import { BookNow } from './Components/ServiceBooking/BookNow.js';
import { BookApointment } from './Components/ServiceBooking/BookApointment.js';
import { AdminDashboard } from './Admin/AdminDash/AdminDashboard.js';
import Add from './Admin/Usercurd/adduser/Add.jsx';
// import FullFeaturedCrudGrid from './Admin/EmployeeData.js';
import User from './Admin/Usercurd/getuser/User.jsx';
import Edit from './Admin/Usercurd/updateuser/Edit.jsx';
import Emp from './Admin/Empcurd/getemp/Emp.jsx';
import EmpAdd from './Admin/Empcurd/addemp/EmpAdd.jsx';
import EmpEdit from './Admin/Empcurd/updateemp/EmpEdit.jsx';
import EmpDashboard from './Admin/EmployeeDash/EmpDashboard.js.jsx';
// import PrivateRoute from './PrivateRoute.js';
// import { useAuth } from './AuthContext';
import AllService from './Admin/ServiceCurd/getservice/Service.js';
import AService from './Admin/ServiceCurd/additionService/addService.js';
import UpdateService from './Admin/ServiceCurd/updateemp/updateService.jsx';
import { ProtectRoute } from './User/SignIn/ProtectRoute.js';
import { AuthState } from './store/AuthState';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './store/AuthContext.js';
import EditProfile from './Admin/EmployeeDash/Operations/EditProfile.js';
import ServiceDetails from './Admin/EmployeeDash/Operations/MyServices/getservice/ServiceDetails.js';
import AddService from './Admin/EmployeeDash/Operations/MyServices/additionService/AddService.js';
import UpdService from './Admin/EmployeeDash/Operations/MyServices/updateemp/updService.jsx';
import { BoookNowState } from './store/BookNowState.js';
import EmpBookings from './Admin/EmployeeDash/Operations/Bookings/EmpBookings.js';
import OrderHistory from './Components/OrderHistory/OrderHistory.js';
import { jwtDecode } from 'jwt-decode';
import NotFound from './Notfound.js';
function App() {
    // const AuthCtx = useContext(AuthContext)
    // const [userType, setUserType] = useState("");
    // const userType =localStorage.getItem('userType');
    // console.log(userType)
    // useEffect(() => {
    //     // console.log(localStorage.)
    //     // setUserType(localStorage.getItem('userType'));
    // },[AuthCtx.isLoggedIn])
    const token = localStorage?.getItem('token') ?? "";
    let decoded;
    if (token) {
        decoded = jwtDecode(token);
    }
    // const id = decoded.userId;
    // const email = decoded.email;
    const role = decoded?.role ?? "";
    console.log(role)
    return (
        <div className="App">
            <BrowserRouter>
                <BoookNowState>
                    <AuthState>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path="login" element={<MainSignup />} />
                            <Route path="mybookings" element={<OrderHistory />} />
                            <Route path="ContactUs" element={<ContactUs />} />
                            <Route path="AboutUs" element={<AboutUs />} />
                            {/* <Route path="/catagory/:catagoryName" component={<CatagoryPage />} /> */}
                            <Route path="catagory/saloon" element={<CatagoryPage category="Saloon" />} />
                            <Route path="catagory/driver" element={<CatagoryPage category="Driver" />} />
                            <Route path="catagory/cleaner" element={<CatagoryPage category="Home Cleaner" />} />
                            <Route path="catagory/carpenter" element={<CatagoryPage category="Carpenter" />} />
                            <Route path="catagory/plumber" element={<CatagoryPage category="Plumber" />} />
                            <Route path="catagory/electrician" element={<CatagoryPage category="Electrician" />} />
                            <Route path="catagory/mechanics" element={<CatagoryPage category="Mechanics" />} />
                            <Route path="catagory/painter" element={<CatagoryPage category="Painter" />} />


                            <Route element={<ProtectRoute />}>

                                {/* {role === 'admin' ? <> <Route path="admin" element={<AdminDashboard />}></Route>
                                    <Route path='admin/user' element={<User />} />
                                    <Route path='admin/user/add' element={<Add />} />
                                    <Route path='admin/user/update/:id' element={<Edit />} />
                                    <Route path='admin/employee' element={<Emp />} />
                                    <Route path='admin/employee/add' element={<EmpAdd />} />
                                    <Route path='admin/employee/update/:id' element={<EmpEdit />} />
                                    <Route path="admin/service" element={<AllService />} />
                                    <Route path="admin/service/add" element={<AService />} />
                                    <Route path='admin/service/update/:id' element={<UpdateService />} />
                                </> : <Route path="notfound" element={<NotFound />} />
                                }
                                {role === 'employee' ? <><Route path="employee" element={<EmpDashboard />} />
                                    <Route path="employee/profile" element={<EditProfile />} />
                                    <Route path="employee/myservices" element={<ServiceDetails />} />
                                    <Route path="employee/myservices/add" element={<AddService />} />
                                    <Route path="employee/myservices/update/:id" element={<UpdService />} />
                                    <Route path="employee/bookings" element={<EmpBookings />} /></> : <Route path="notfound" element={<NotFound />} />
                                }

                                {role === 'user' ? <>
                                    <Route path="booknow" element={<BookNow />} />
                                    <Route path="bookapointment" element={<BookApointment />} /> </> : <Route path="notfound" element={<NotFound />} />

                                } */}



                                

                                <Route path="booknow" element={<BookNow />} />
                                <Route path="bookapointment" element={<BookApointment />} />


                                <Route path="admin" element={<AdminDashboard />}></Route>
                                <Route path='admin/user' element={<User />} />
                                <Route path='admin/user/add' element={<Add />} />
                                <Route path='admin/user/update/:id' element={<Edit />} />
                                <Route path='admin/employee' element={<Emp />} />
                                <Route path='admin/employee/add' element={<EmpAdd />} />
                                <Route path='admin/employee/update/:id' element={<EmpEdit />} />
                                <Route path="admin/service" element={<AllService />} />
                                <Route path="admin/service/add" element={<AService />} />
                                <Route path='admin/service/update/:id' element={<UpdateService />} />



                                <Route path="employee" element={<EmpDashboard />} />
                                <Route path="employee/profile" element={<EditProfile />} />
                                <Route path="employee/myservices" element={<ServiceDetails />} />
                                <Route path="employee/myservices/add" element={<AddService />} />
                                <Route path="employee/myservices/update/:id" element={<UpdService />} />
                                <Route path="employee/bookings" element={<EmpBookings />} />


                                {/* )} */}
                            </Route>
                        </Routes>
                    </AuthState>
                </BoookNowState>
            </BrowserRouter>
            <Footer />
        </div>
    );

}


export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from './HomePage.js';
// import Footer from './Components/Footer/Footer.js';
// import { ContactUs } from './Components/ContactDetails/ContactUs.js';
// import MainSignup from './User/MainSignup.js';
// import { CatagoryPage } from './Components/CatagoryPage.js';
// import { AboutUs } from './Components/AboutUs/AboutUs.js';
// import { BookNow } from './Components/ServiceBooking/BookNow.js';
// import { BookApointment } from './Components/ServiceBooking/BookApointment.js';
// import { AdminDashboard } from './Admin/AdminDash/AdminDashboard.js';
// import Add from './Admin/Usercurd/adduser/Add.jsx';
// import User from './Admin/Usercurd/getuser/User.jsx';
// import Edit from './Admin/Usercurd/updateuser/Edit.jsx';
// import Emp from './Admin/Empcurd/getemp/Emp.jsx';
// import EmpAdd from './Admin/Empcurd/addemp/EmpAdd.jsx';
// import EmpEdit from './Admin/Empcurd/updateemp/EmpEdit.jsx';
// import EmpDashboard from './Admin/EmployeeDash/EmpDashboard.js.jsx';
// import AllService from './Admin/ServiceCurd/getservice/Service.js';
// import AService from './Admin/ServiceCurd/additionService/addService.js';
// import UpdateService from './Admin/ServiceCurd/updateemp/updateService.jsx';
// import { ProtectRoute } from './User/SignIn/ProtectRoute.js';
// import { AuthState } from './store/AuthState';
// import { useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import NotFound from './NotFound.js';

// function App() {
//     const token = localStorage.getItem('token');
//     const decoded = token ? jwtDecode(token) : null;
//     const role = decoded?.role ?? "";

//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <AuthState>
//                     <Navbar />
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path="login" element={<MainSignup />} />
//                         <Route path="mybookings" element={<OrderHistory />} />
//                         <Route path="ContactUs" element={<ContactUs />} />
//                         <Route path="AboutUs" element={<AboutUs />} />
//                         <Route path="catagory/saloon" element={<CatagoryPage category="Saloon" />} />
//                         <Route path="catagory/driver" element={<CatagoryPage category="Driver" />} />
//                         <Route path="catagory/cleaner" element={<CatagoryPage category="Home Cleaner" />} />
//                         <Route path="catagory/carpenter" element={<CatagoryPage category="Carpenter" />} />
//                         <Route path="catagory/plumber" element={<CatagoryPage category="Plumber" />} />
//                         <Route path="catagory/electrician" element={<CatagoryPage category="Electrician" />} />
//                         <Route path="catagory/mechanics" element={<CatagoryPage category="Mechanics" />} />
//                         <Route path="catagory/painter" element={<CatagoryPage category="Painter" />} />

//                         <Route element={<ProtectRoute />}>
//                             {role === 'admin' && (
//                                 <>
//                                     <Route path="admin" element={<AdminDashboard />} />
//                                     <Route path='admin/user' element={<User />} />
//                                     <Route path='admin/user/add' element={<Add />} />
//                                     <Route path='admin/user/update/:id' element={<Edit />} />
//                                     <Route path='admin/employee' element={<Emp />} />
//                                     <Route path='admin/employee/add' element={<EmpAdd />} />
//                                     <Route path='admin/employee/update/:id' element={<EmpEdit />} />
//                                     <Route path="admin/service" element={<AllService />} />
//                                     <Route path="admin/service/add" element={<AService />} />
//                                     <Route path='admin/service/update/:id' element={<UpdateService />} />
//                                 </>
//                             )}
//                             {role === 'employee' && (
//                                 <>
//                                     <Route path="employee" element={<EmpDashboard />} />
//                                     <Route path="employee/profile" element={<EditProfile />} />
//                                     <Route path="employee/myservices" element={<ServiceDetails />} />
//                                     <Route path="employee/myservices/add" element={<AddService />} />
//                                     <Route path="employee/myservices/update/:id" element={<UpdService />} />
//                                     <Route path="employee/bookings" element={<EmpBookings />} />
//                                 </>
//                             )}
//                             {role === 'user' && (
//                                 <>
//                                     <Route path="booknow" element={<BookNow />} />
//                                     <Route path="bookapointment" element={<BookApointment />} />
//                                 </>
//                             )}
//                             <Route path="*" element={<NotFound />} />
//                         </Route>
//                     </Routes>
//                 </AuthState>
//             </BrowserRouter>
//             <Footer />

//         </div>
//     );
// }

// export default App;
