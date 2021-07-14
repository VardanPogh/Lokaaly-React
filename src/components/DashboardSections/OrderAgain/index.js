import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import OrderCard from "../OrderCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    orderP: {
        textAlign: "left",
        color: theme.palette.primary.main,
        fontSize: "32px",
        font: "normal normal bold 32px/43px Nunito",
        marginTop: "100px",
        marginBottom: "56px",
        textTransform: "uppercase",
    },
    responsiveGrid: {
        [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between!important",
        }
    }
}));

export default function OrderAgain() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <p className={classes.orderP}>Order now</p>

            <Grid container justify="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={6} sm={3} md={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <OrderCard/>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <OrderCard/>
                </Grid>
            </Grid>
        </Container>
    );
}
