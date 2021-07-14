import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Container,
} from "@material-ui/core";
import NavBar from "../../NavBar";
import Footer1 from "../../Footer";
import Grid from "@material-ui/core/Grid";
import OrderSingle from "./OrderSingle";
import {API_URL} from "../../../config";


const useStyles = makeStyles((theme) => ({
    containerGrid: {
        marginTop: 50,
        textAlign: 'left',
        fontWeight: 'bold',
        [theme.breakpoints.down("sm")]: {
            display: 'none !important'
        },
    },
    filterLabel: {
        color: theme.palette.secondary.dark,
        fontSize: 24,
        fontWeight: 'bold',
        top: '10px',
        position: 'relative',
    },
    filterDiv: {
        margin: '60px 0',
        float: 'left',
        display: 'inline-flex',

    },
    formControl: {
        width: 116,
        marginLeft: 10,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        }
    },
    textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(1),
        width: 200,
    },
    container: {
        margin: 'auto'
    }

}));

export default function OrderList() {
    const classes = useStyles();
    const [filter, setFilter] = useState('');
    const [orders, setOrders] = useState();

    const handleChange = (e) => {
        setFilter(e.target.value)
    };
    const getOrders = () => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + 'orders', requestOptions)
            .then(async (response) => {
                const data = await response.json();
                setOrders(data);
            })
    };

    useEffect(() => {
        getOrders();
    }, [])
    return (
        <>
            <NavBar/>
            <Container maxWidth="lg">
                <Grid container spacing={2} className={classes.containerGrid}>
                    <Grid item xs={6} sm={6} md={6}/>
                    <Grid item xs={2} sm={2} md={2}>
                        Date
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        Status
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        Total
                    </Grid>
                </Grid>
                {orders && orders.map((order, index) => (
                    <OrderSingle
                        name={order.customerId.firstName + '  ' + order.customerId.lastName}
                        orderNumber={order.orderNumber}
                        date={order.createdAt.split('T')[0]}
                        status={order.status}
                        price={order.total}
                        id={order._id}
                    />

                ))}
            </Container>
            <Footer1/>
        </>
    )

}
