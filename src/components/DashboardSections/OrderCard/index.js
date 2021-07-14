import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        font: "normal normal 800 24px/32px Nunito",
        padding: 0,
        width: "300px",
        height: "417px",
        [theme.breakpoints.down("sm")]: {
            width: "213px",
            height: "310px",
        },
        "&:nth-child(3n+1):not(:first-child)": {
            marginRight: 0,
        },
        "&:nth-child(6n+1)": {
            marginLeft: 0,
        },
        boxShadow: "0px 0px 19px #0000001F",
        "& .MuiCardHeader-action": {
            flex: "0 0",
        },
        "& .MuiCardHeader-content": {
            textAlign: "left",
        },
        "& .MuiCardHeader-root": {
            padding: "10px 16px 0 16px",
            height: "20px",
        },
        "& p": {
            margin: 6,
        },
        "& .MuiCardHeader-subheader": {
            position: "relative",
        },
        '@media (max-width: 730px)': {
            '& .MuiCardContent-root': {
                padding: 6
            },
            width: '100%',
            "& .MuiCardHeader-subheader": {
                fontSize: 13
            },
        }
    },
    media: {
        width: "190px",
        height: "180px",
        margin: "auto",
        borderRadius: "100px",
        '@media (max-width: 730px)': {
            width: '88px',
            height: '92px',
        }
    },
    favoriteIcon: {
        '@media (max-width: 730px)': {
            position: 'relative',
            left: 10,
        },
        backgroundColor: theme.palette.primary.main,
        width: "24px",
        height: "24px",
        "& .MuiSvgIcon-root": {
            width: "16px",
            height: "15px",
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            "& .MuiSvgIcon-root": {
                color: theme.palette.primary.main,
            },
        },
    },
    shoppingIcon: {
        '@media (max-width: 730px)': {
            position: 'relative',
            left: 10,
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiSvgIcon-root": {
                color: theme.palette.secondary.main,
            },
        },
        width: "28px",
        height: "28px",
        "& .MuiSvgIcon-root": {
            width: "20px",
            height: "20px",
        },
        marginTop: 5,
    },
    title: {
        color: theme.palette.secondary.dark,
        fontSize: 24,
        '@media (max-width: 730px)': {
            fontSize: 18,
        }
    },
    subTitle: {
        color: theme.palette.secondary.light,
        fontSize: 16,
        '@media (max-width: 730px)': {
            lineHeight: 1
        }
    },
    price: {
        color: theme.palette.primary.main,
        fontSize: 24,
    },
    orderButton: {
        color: theme.palette.text.main,
        borderRadius: "23px",
        padding: "8px 23px",
        margin: "auto",
        fontWeight: "700",
        backgroundColor: "#74368C",
        '@media (max-width: 370px)': {
            padding: '9px 8px',
        }
    },
}));

export default function OrderCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <IconButton aria-label="settings" className={classes.favoriteIcon}>
                            <FavoriteIcon color="secondary"/>
                        </IconButton>
                        <IconButton aria-label="settings" className={classes.shoppingIcon}>
                            <ShoppingCartIcon color="primary"/>
                        </IconButton>
                    </>
                }
                subheader="45 min"
            />
            <CardMedia
                className={classes.media}
                image="https://previews.123rf.com/images/denisfilm/denisfilm1801/denisfilm180101581/94321197-fried-juicy-breakfast-on-plate-various-food-in-white-plate-beautiful-looking-food-on-plate-.jpg"
                title="Paella dish"
            />
            <CardContent>
                <p className={classes.title}>Lorem ipsum</p>
                <p className={classes.subTitle}>Fresh mixed salad</p>
                <p className={classes.price}>$8.23</p>
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    className={classes.orderButton}
                    component={Link}
                    to="/food_single"
                >
                    Order now
                </Button>
            </CardActions>
        </Card>
    );
}
