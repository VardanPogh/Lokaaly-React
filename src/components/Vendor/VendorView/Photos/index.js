import {Grid, makeStyles, Paper} from "@material-ui/core";
import React from "react";
import SinglePhoto from "../SinglePhoto";

const useStyles = makeStyles((theme) => ({
    maindDiv: {
        marginTop: "70px",
    },
    header: {
        font: "normal normal bold 32px Nunito",
        color: "#74368C",
        textTransform: "uppercase",
    },
    grid: {
        marginTop: "32px",
        flexGrow: 1,
    },
    item: {
        width: "100%",
        height: "313px",
        backgroundColor: "#F5F5F5",
        display: "flex",
        borderRadius: 0,
        flexDirection: "column",
        justifyContent: "center",
        '& img': {
            objectFit: 'scale-down',
        }
    },
    rowMargin: {
        width: "100%",
        marginTop: "32px"
    }
}));

export const Photos = () => {
    const classes = useStyles();
    return (
        <div className={classes.maindDiv}>
            <div className={classes.header}>Photos</div>
            <Grid container direction="row" className={classes.grid} justify="flex-start" alignItems="flex-start"
                  spacing={3}>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.item}>
                        <img src="/img/add_photo_alternate-24px.svg" alt="NoImage"/>
                    </Paper>

                </Grid>

                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <div xs={12} className={classes.rowMargin}></div>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
                <SinglePhoto image={"/img/restaurant_photo.svg"}/>
            </Grid>
        </div>
    );
};
