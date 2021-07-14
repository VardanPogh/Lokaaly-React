import React from 'react'
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import DashboardCarousel from "../Carousel";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CategoryMain from "../DashboardSections/CategoryMain";
import OrderAgain from "../DashboardSections/OrderAgain";
import AppSection from "../DashboardSections/AppSection";
import PopularVendors from "../DashboardSections/PopularVendors";

const useStyles = makeStyles(theme => ({}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <>
            <NavBar/>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <DashboardCarousel/>
                    <CategoryMain/>
                    {/*<OrderAgain/>*/}
                    <AppSection/>
                    {/*<PopularVendors/>*/}
                </Grid>
            </Grid>
            <Footer1/>
        </>
    )

}

