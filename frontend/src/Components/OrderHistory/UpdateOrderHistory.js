// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Box, Typography, Fade, Backdrop, Modal, TextField } from '@mui/material';

// const UpdateOrderHistory = ({ id, updateAddress }) => {
//     const [open, setOpen] = useState(false);
//     const [address, setAddress] = useState('');
//     const [mobileNo, setMobileNo] = useState('');
//     const [pincode, setPincode] = useState('');

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleSubmit = async () => {
//         try {
//             await axios.post("http://localhost:5000/booking/updateAddress", { address, mobileNo, pincode, _id: id });
//             updateAddress(id, { address, mobileNo, pincode });
//             handleClose();
//         } catch (error) {
//             console.error("Error updating address:", error);
//             // Handle error if needed
//         }
//     }

//     const handleAddressChange = (event) => setAddress(event.target.value);
//     const handleMobileNoChange = (event) => setMobileNo(event.target.value);
//     const handlePincodeChange = (event) => setPincode(event.target.value);

//     return (
//         <div>
//             <Button onClick={handleOpen} style={{ backgroundColor: "green" }}>Update Address</Button>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{ timeout: 500 }}
//             >
//                 <Fade in={open}>
//                     <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
//                         <Typography id="transition-modal-title" variant="h6" component="h2">
//                             Update Address
//                         </Typography>
//                         <TextField
//                             label="Address"
//                             value={address}
//                             onChange={handleAddressChange}
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         />
//                         <TextField
//                             label="Mobile No"
//                             value={mobileNo}
//                             onChange={handleMobileNoChange}
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         />
//                         <TextField
//                             label="Pincode"
//                             value={pincode}
//                             onChange={handlePincodeChange}
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         />
//                         <Typography style={{ float: "right" }}>
//                             <Button onClick={handleSubmit}>Save</Button>
//                         </Typography>
//                     </Box>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }

// export default UpdateOrderHistory;
