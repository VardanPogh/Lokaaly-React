import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Container, Grid,
} from "@material-ui/core";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import ViewCard from "./ViewCard";
import {API_URL} from "../../config";


const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: "100px",
    },
    p1: {
        fontSize: "24px",
        color: "#565656",
    },
    div_price: {
        color: "#74368C",
        fontSize: "24px",
        marginTop: "15px",
    },
    paragraph: {
        textAlign: "left",
        marginTop: "25px",
    },
    div_chooseDate: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#565656",
        marginTop: "32px",
    },
    btns_choose_date: {
        backgroundColor: "#99CC9E",
    },
    div_quantity: {
        marginTop: "40px",
        color: "#565656",
    },
    div_choose_btns: {
        marginTop: "16px",
    },
    div_sauce: {
        marginTop: "40px",
        color: "#565656",
        fontSize: "16px",
        fontWeight: "bold",
    },
    div_customize: {
        marginTop: "33px",
        fontSize: "16px",
        color: "#565656",
        fontWeight: "bold",
    },
    text_area: {
        marginTop: "35px",
        fontSize: "16px",
        fontFamily: "Nunito",
        fontWeight: "300",
    },
    btn_favorites: {
        width: "200px",
        height: "46px",
        color: "#74368C",
        border: "1px solid #74368C",
        borderRadius: "20px",
        marginLeft: "40px",
        marginTop: "30px",
    },
    btns_order: {
        backgroundColor: "#74368C",
        width: "160px",
        height: "46px",
        color: "#F0D283",
        fontSize: "16px",
        borderRadius: "20px",
        fontWeight: "700"
    },
    btns_bottom: {
        marginTop: "40px",
    },
    favoriteContainer: {
        marginTop: 128
    },
    titleP: {
        textAlign: "left",
        color: theme.palette.primary.main,
        fontSize: "32px",
        font: "normal normal bold 32px/43px Nunito",
        marginTop: "100px",
        marginBottom: "56px",

        textTransform: "uppercase",
    },
    responsiveGrid: {
        marginTop: theme.spacing(2),
    }

}));

export default function Dishes() {
    const classes = useStyles();
    const [dishes, setDishes] = useState();

    useEffect(() => {
        let token = localStorage.getItem("token");
        let vendorId = localStorage.getItem("vendorId");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };
        fetch(API_URL + "products?vendorId=" + vendorId, requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    console.log('data ', data);
                    const tempData = data.map((item) => {
                        return (
                            <Grid item xs={8} sm={3}>
                                <ViewCard data={item}/>
                            </Grid>
                        )
                    });
                    setDishes(tempData);
                } else {
                    console.log('error ', data)
                }
            })
    }, []);

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" className={classes.favoriteContainer}>
                <p className={classes.titleP}>My Dishes</p>

                <Grid container className={classes.responsiveGrid} spacing={2}>
                    {dishes}
                </Grid>
            </Container>
            <Footer1/>
        </>
    );
}
