import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OrderCard from "../../DashboardSections/OrderCard";


const useStyles = makeStyles((theme) => ({

    categoryP: {
        textAlign: "left",
        color: theme.palette.primary.main,
        fontSize: "32px",
        font: "normal normal bold 32px/43px Nunito",
        marginTop: "100px",
        marginBottom: "56px",
        textTransform: "uppercase",
    },
    responsiveGrid: {
        margin: '20px 0',
    }
}));
export default function MyOrders() {
    const classes = useStyles();

    return (
        <>
            <p className={classes.categoryP}>My Orders</p>
            <Grid container justify="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <OrderCard/>
                </Grid>
            </Grid>
        </>
    )

}

