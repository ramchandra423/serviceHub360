import React, { useContext, useEffect, useState } from 'react';
import BasicCard from './ServiceElements/BasicCard';
import '../Components/catagoriespage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import BookNowContext from '../store/BookNowContext';

export const CatagoryPage = (props) => {
    const { category } = props // Extracting categoryName from URL params
    const [services, setService] = useState([]);
    const BookNowCtx = useContext(BookNowContext);

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/sapi/getall?category=${category}`);
            console.log(response)
            setService(response.data.data);
        }

        fetchData();

    }, [])

    return (
        <div className='Cs-container'>
            <div className='cats-title'>
                <span>{category}</span>
            </div>
            


            {
                services.map((x, index) => {
                    return (
                        <div className='S-card-container'>
                            <div>
                                <Card sx={{ width: "280px", margin: 1 }}>
                                    <AspectRatio minHeight="120px" Height="200px">
                                        <img
                                            src={x.imageUrl}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <Typography level="title-lg">{x.serviceName}</Typography>
                                    <Typography level="body-sm">{x.empName}</Typography>
                                    <CardContent orientation="horizontal">
                                        <div>
                                            <Typography level="body-xs">Total price:</Typography>
                                            <Typography fontSize="lg" fontWeight="lg">
                                                ₹{x.price}
                                            </Typography>
                                        </div>

                                        <Button
                                            variant="solid"
                                            size="md"
                                            color="primary"
                                            aria-label="Explore Bahamas Islands"
                                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width: "50%" }}
                                            onClick={()=>BookNowCtx.setService(x)}
                                        >
                                            <Link to='/booknow' style={{ color: "white" }}>
                                                Book Now</Link>
                                        </Button>

                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
