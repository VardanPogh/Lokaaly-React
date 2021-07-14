import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Container,
} from "@material-ui/core";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import CustomTabs from "./CustomTabs";


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
    }

}));

export default function FavoritesPage() {
    const classes = useStyles();

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" className={classes.favoriteContainer}>
                <CustomTabs/>
            </Container>
            <Footer1/>
        </>
    );
}
