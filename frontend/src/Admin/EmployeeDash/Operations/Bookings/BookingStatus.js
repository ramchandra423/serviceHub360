import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography, Fade, Backdrop, Modal } from '@mui/material';

const BookingStatus = ({ id, updateStatus }) => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('PENDING');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:5000/booking/updateStatus", { status: selectedStatus, _id: id });
            updateStatus(id, selectedStatus); // Call the updateStatus function from props
            handleClose();
        } catch (error) {
            console.error("Error updating status:", error);
            // Handle error if needed
        }
    }

    const handleStatusChange = (event) => setSelectedStatus(event.target.value);

    return (
        <div>
            <Button onClick={handleOpen} style={{ backgroundColor: "green" }}>Change Status</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Update the Status of Service
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <select value={selectedStatus} onChange={handleStatusChange}>
                                <option value="PENDING">PENDING</option>
                                <option value="REJECTED">REJECTED</option>
                                <option value="APPROVED">APPROVED</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>
                        </Typography>
                        <Typography style={{ float: "right" }}>
                            <Button onClick={handleSubmit}>Save</Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default BookingStatus;
