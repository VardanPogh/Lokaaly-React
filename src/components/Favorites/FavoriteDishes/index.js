import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Grid,
} from "@material-ui/core";
import OrderCard from "../../DashboardSections/OrderCard";


const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: "100px",
    },
    responsiveGrid: {
        marginTop: theme.spacing(2),
    }

}));

export default function FavoriteDishes(props) {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center" alignItems="center" className={classes.responsiveGrid} spacing={2}>
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
    );
}
