import React, {useEffect, useState} from "react";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import Divider from '@material-ui/core/Divider';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {API_URL} from "../../config";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
        mainTitle: {
            textAlign: 'center',
            fontSize: 38,
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            margin: 25,
        },
        title: {
            color: theme.palette.primary.main,
            fontSize: 32,
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 25,
        },
        description: {
            textAlign: 'center',
            margin: 25,
            padding: '0 20%',
            [theme.breakpoints.down("sm")]: {
                marginLeft: 'unset',
                width: '100%',
                padding: 0,
            },
        },
        contentDiv: {
            display: 'flex'
        }
    }))
;
export default function AboutUs() {
    const classes = useStyles();
    const [homeChef, setHomeChef] = useState();
    const [customer, setCustomer] = useState();

    const getAboutHomeChef = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Barear ' + sessionStorage.getItem('token'),
            },
        };
        fetch(API_URL + 'static/data?type=about_home_chef', requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status === 200) {
                    setHomeChef(data.text);
                }
            });
    };

    const getAboutCustomer = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Barear ' + sessionStorage.getItem('token'),
            },
        };
        fetch(API_URL + 'static/data?type=about_customer', requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status === 200) {
                    setCustomer(data.text ? data.text : data.type);
                }
            });
    };

    useEffect(() => {
        getAboutCustomer();
        getAboutHomeChef();
    }, [])


    return (
        <>
            <NavBar/>
            <p className={classes.mainTitle}>ABOUT US</p>
            <Divider/>
            <Container maxWidth="lg">

                <Grid container className={classes.contentDiv} spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <p className={classes.title}>Customers</p>
                        <p className={classes.description}>
                            {customer}
                        </p>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <p className={classes.title}>Home-Chefs</p>
                        <p className={classes.description}>
                            {homeChef}
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Footer1/>
        </>
    );
}
