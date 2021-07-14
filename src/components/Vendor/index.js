import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import NavBar from "../NavBar";
import DashboardCarousel from "../Carousel";
import OrderCard from "../DashboardSections/OrderCard";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import AppSection from "../DashboardSections/AppSection";
import PopularVendors from "../DashboardSections/PopularVendors";
import Footer1 from "../Footer";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        marginTop: "100px",
    },
    vendorName: {
        marginTop: "28px",
        textAlign: 'left',
        color: "#565656",
        fontSize: '24px',
        font: 'normal normal bold 32px/43px Nunito',
    },
    leftMarginS: {
        marginLeft: "32px",
    },
    vendorAddress: {
        marginTop: "13px",
    },
    paragraph: {
        marginTop: "16px",
        textAlign: "left",
        fontSize: "16px",
        font: 'normal normal light Nunito',
    },
    photos: {
        color: "#74368C",
        textAlign: "left",
        marginTop: "48px",
        font: 'normal normal bold 32px Nunito',
    },
    photoGrid: {
        marginTop: "32px",
        '& img': {
            [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "10rem",
            },
        },
    },
    paper: {
        flexGrow: 1,
        maxWidth: "1130px",
    },
    toggleBtns: {
        display: "flex",
        flexDirection: "column",
        height: "200px",
        width: "222px",
        marginRight: 20,
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            height: "150px",
            width: "150px",
        },
    },
    toggleRoot: {
        border: "none",
        padding: 0,
        font: 'normal normal bold 32px Nunito',
        color: "#565656"
    },
    toggleLeftM: {
        marginLeft: "32px!important"
    },
    toggleSelected: {
        backgroundColor: "#74368C!important",
        color: "#FFFFFF!important"
    },
    menuGrid: {
        marginTop: "32px"
    },
    toggleGroup: {
        display: 'block',
        textAlign: 'left'
    }
}));

export default function Vendor(props) {
    const classes = useStyles();
    const [selectedMenu, setSelectedMenu] = React.useState('Popular');

    const handleMenuSelect = (event, newValue) => {
        setSelectedMenu(newValue);
    };

    return (
        <>
            <NavBar/>
            <DashboardCarousel/>
            <Container maxWidth="lg" className={classes.mainDiv}>
                <Grid container direction="row">
                    <img src="/img/mr_food.png" alt="mr food"/>
                    <Grid item className={classes.leftMarginS}>
                        <div className={classes.vendorName}>
                            Vendor name
                        </div>
                        <div className={classes.vendorAddress}>
                            <img src="/img/location_on-24px.svg" alt="mr food"/>
                            Calgary, AB, Canada
                        </div>
                    </Grid>
                </Grid>
                <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna</p>
                <div className={classes.photos}>Photos</div>
                <Grid container spacing={3} className={classes.photoGrid}>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <img src="/img/vendor_photos1.png"/>
                    </Grid>
                </Grid>
                <div className={classes.photos}>MENU</div>
                <div>
                    <ToggleButtonGroup className={classes.toggleGroup} exclusive value={selectedMenu}
                                       onChange={handleMenuSelect}>
                        <ToggleButton value="Popular" classes={{
                            label: classes.toggleBtns,
                            root: classes.toggleRoot,
                            selected: classes.toggleSelected
                        }}>
                            <img src="/img/star.svg"/>
                            Popular
                        </ToggleButton>
                        <ToggleButton value="Western" classes={{
                            label: classes.toggleBtns,
                            root: classes.toggleRoot,
                            selected: classes.toggleSelected
                        }}>
                            <img src="/img/pizza.svg"/>
                            Western
                        </ToggleButton>
                        <ToggleButton value="Drinks" classes={{
                            label: classes.toggleBtns,
                            root: classes.toggleRoot,
                            selected: classes.toggleSelected
                        }}>
                            <img src="/img/drinks.svg"/>
                            Drinks
                        </ToggleButton>
                        <ToggleButton value="Dessert" classes={{
                            label: classes.toggleBtns,
                            root: classes.toggleRoot,
                            selected: classes.toggleSelected
                        }}>
                            <img src="/img/dessert.svg"/>
                            Dessert
                        </ToggleButton>
                        <ToggleButton value="Barbecue" classes={{
                            label: classes.toggleBtns,
                            root: classes.toggleRoot,
                            selected: classes.toggleSelected
                        }}>
                            <img src="/img/barbeque.svg"/>
                            Barbecue
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <Grid container justify="space-between" className={classes.menuGrid}>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                    <div style={{marginTop: "32px", minWidth: "100%"}} xs={12} sm={12}></div>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                    <OrderCard xs={8} sm={3}/>
                </Grid>

            </Container>
            <AppSection/>
            <PopularVendors/>
            <Footer1/>
        </>
    );
}
