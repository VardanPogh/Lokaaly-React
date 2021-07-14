import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Grid,
} from "@material-ui/core";
import OrderCard from "../../DashboardSections/OrderCard";
import PopularVendorsSingle from "../../DashboardSections/PopularVendorsSingle";


const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: "100px",
    },
    responsiveGrid: {
        marginTop: theme.spacing(2),
    }

}));

export default function FavoriteVendors(props) {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center" alignItems="center" className={classes.responsiveGrid} spacing={2}>
                <Grid item xs={8} sm={3}>
                    <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>

                </Grid>
            </Grid>
        </>
    );
}
