import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
// import './services.css'
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard() {
  return (
    <Card sx={{ width: "280px",margin:1 }}>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"
          // srcSet="https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography level="title-lg">Home Cleaning</Typography>
        <Typography level="body-sm">Manoj Sahoo</Typography>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          ₹2,900
          </Typography>
        </div>
        
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width:"50%" }}
        >
          <Link to='/booknow' style={{color:"white"}}>
          Book Now</Link>
        </Button>
        
      </CardContent>
    </Card>

  );
}
