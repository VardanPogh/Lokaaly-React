import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    containerGrid: {
        marginTop: 50,
        textAlign: 'left',
    },
    cardDiv: { //move to component
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
        },
        height: 159,
        background: '#F9F9F9',
        margin: '32px 0',
        '& .MuiGrid-item': {
            margin: 'auto 0',
        },
        textAlign: 'left',
        fontWeight: 'bold',
    },
    cardImage: {  //move to component
        width: 96,
        height: 95,
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: '40px',
    },
    countDiv: {
        width: '38px',
        height: '38px',
        background: '#FFFFFF',
        color: theme.palette.primary.main,
    },
    countLabel: {
        left: '40%',
        position: 'relative',
        top: '21%',
    },
    imgDiv: {
        display: 'inline-flex'
    },
    imgDivInner2: {
        margin: 'auto',
        marginLeft: 30,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    customerName: {
        fontSize: 24,
        color: theme.palette.secondary.dark,
        fontWeight: 'bold',
        margin: 10,
    },
    orderNumber: {
        fontSize: 16,
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        margin: 10,
    },
    colorRed: {
        color: 'red',
    },
    colorGreen: {
        color: 'green',
    },
    colorYellow: {
        color: '#F0D283',
    },
    priceSpan: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
        },
    }


}));

export default function DeliverySingle({name, orderNumber, date, status, price, id}) {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2} className={classes.cardDiv} component={Link} to={'/deliverydetails/' + id}>
                <Grid item xs={12} sm={6} md={6} className={classes.imgDiv}>
                    <div className={classes.imgDivInner2}>
                        <p className={classes.customerName}>{name}</p>
                        <p className={classes.orderNumber}>Order Number {orderNumber}</p>
                    </div>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    <span>{date}</span>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    {status == 'accepted' && (<span className={classes.colorGreen}>Accepted</span>)}
                    {status == 'paid' && (<span className={classes.colorGreen}>Paid</span>)}
                    {status == 'in_delivery' && (<span className={classes.colorYellow}>In Delivery</span>)}
                    {status == 'delivered' && (<span className={classes.colorYellow}>Delivered</span>)}

                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    <span className={classes.priceSpan}>{price} AED</span>
                </Grid>
            </Grid>
        </>
    );
}
