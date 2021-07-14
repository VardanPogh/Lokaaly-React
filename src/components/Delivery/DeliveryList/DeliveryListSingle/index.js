import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


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

    }


}));

export default function DeliveryListSingle({price, unitPrice, quantity, image, name}) {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2} className={classes.cardDiv}>
                <Grid item xs={2} sm={2} md={2}>
                    <div className={classes.imgDivInner2}>
                        <div>
                            <img
                                className={classes.cardImage}
                                src={image}/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} className={classes.imgDiv}>
                    <span>{name}</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <span>{quantity}</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <span>{unitPrice} AED</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <span>{price} AED</span>
                </Grid>
            </Grid>
        </>
    );
}
