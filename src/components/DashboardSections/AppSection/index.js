import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Grid, Hidden} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FCF5E2",
        position: "relative",
        height: "478px",
        [theme.breakpoints.down("sm")]: {
            height: "310px",
        },
        margin: "100px 0",
        "& img": {
            width: "440px",
            height: "494px",
            // margin: "48px 0",
            [theme.breakpoints.down("sm")]: {
                width: "133px",
                height: "165px",
            },
        },
    },
    containerDiv: {
        position: "relative",
        flexWrap: 'unset',
    },
    imgDiv: {
        position: "relative",
        width: "309px",
        height: "382px",
        [theme.breakpoints.down("sm")]: {
            width: "133px",
            height: "165px",
        },
    },
    appTextDiv: {
        position: "relative",
        textAlign: "left",
        width: "664px",
        padding: "105px 0",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "172px",
            padding: "10px 0",
        },

        "& p": {
            margin: "6px 0",
            padding: 0,
        },
    },
    p1: {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        fontSize: 40,
        height: "54px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            height: "auto",
        },
    },
    p2: {
        fontWeight: 900,
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontSize: 56,
        height: "77px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "26px",
            height: "auto",
        },
    },
    p3: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark,
        fontSize: 16,
        height: "44px",
        '@media (max-width: 730px)': {
            fontSize: 14,
            height: "125px",

        }
    },
    appDownloadDiv: {
        display: "inline-flex",
        marginTop: "18px",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            float: 'right',
        },
    },
    iosDiv: {
        background: `transparent url('/img/iosDownload.png') 0% 0% no-repeat padding-box`,
        backgroundRepeat: "round",
        width: "176px",
        height: "54px",
        marginRight: "24px",
        [theme.breakpoints.down("sm")]: {
            width: '150px',
            height: '46px',
        },
    },
    androidDiv: {
        background: `transparent url('/img/androindDownload.png') 0% 0% no-repeat padding-box`,
        backgroundRepeat: "round",
        width: "176px",
        height: "54px",
        [theme.breakpoints.down("sm")]: {
            width: '150px',
            height: '46px',
        },
    },
}));

export default function AppSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.containerDiv} justify="space-around">
                    <Grid item className={classes.imgDiv}>
                        <img alt="phone" src="/img/iPhone.png"/>
                    </Grid>
                    <Grid item className={classes.appTextDiv}>
                        <p className={classes.p1}>Get the</p>
                        <p className={classes.p2}>Lokaaly App</p>
                        <p className={classes.p3}>
                            Download now
                        </p>

                        <div className={classes.appDownloadDiv}>
                            <div className={classes.iosDiv}></div>
                            <div className={classes.androidDiv}></div>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>
);
}
