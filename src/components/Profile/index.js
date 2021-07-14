import React from 'react'
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import {makeStyles} from "@material-ui/core/styles";
import DashboardCarousel from "../Carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderCard from "../DashboardSections/OrderCard";
import ProfileAccordion from "./Accordion";
import MyOrders from "./Orders";
import ProfileDetails from "./ProfileDetails";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiAccordionSummary-content': {
            flexGrow: 0,
        },
    },
    expandIcon: {
        order: -1
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
    },
    addButton: {
        background: theme.palette.primary.main,
        width: '209px',
        float: 'right',
        borderRadius: '29px',
        opacity: 1,
        height: '46px',
        color: '#F0D283'
    },
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
export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <NavBar/>
            <DashboardCarousel/>
            <Container maxWidth="lg">
                <ProfileDetails/>
                <ProfileAccordion/>
                <MyOrders/>
            </Container>
            <Footer1/>
        </>
    )

}

