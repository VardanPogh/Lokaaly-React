import {
    Button,
    Checkbox,
    Grid,
    makeStyles,
    Paper,
    withStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    item: {
        width: "100%",
        height: "313px",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderRadius: 0,
        backgroundSize: 'cover',
    },
    setBg: {
        font: "normal normal regular 16px Nunito",
        color: "#FFFFFF",
    },
    imgClose: {
        height: "24px",
        minWidth: "24px",
        margin: "16px",
    },
}));

const CustomCheckbox = withStyles({
    root: {
        color: "#FFFFFF",
        "&$checked": {
            color: "#000",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function SinglePhoto(props) {
    const classes = useStyles();
    return (
        <Grid
            item
            direction="column"
            xs={6}
            md={3}
        >
            <Paper className={classes.item}
                   style={{backgroundImage: `url(${props.image})`}}>
                <Button className={classes.imgClose}>
                    <img src="/img/close-24px.svg" alt="alter"/>
                </Button>

                <Grid container alignItems="center">
                    <CustomCheckbox/>
                    <div className={classes.setBg}>Set as a background</div>
                </Grid>
            </Paper>

        </Grid>
    );
}
