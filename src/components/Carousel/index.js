import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    dashboardCarousel: {
        "& .carousel .control-dots": {
            top: "-5rem",
            position: "relative",
            height: "2rem",
        },
        "& ul, & .carousel.carousel-slider": {
            height: "800px",
            [theme.breakpoints.down("md")]: {
                height: "500px",
            },
        },
    },
    carousel1Div: {
        backgroundImage: `url("img/carousel1.jpg")`,
        height: "800px",
        [theme.breakpoints.down("md")]: {
            height: "500px",
            paddingBottom: "100px",
            backgroundImage: `url("img/carousel1_mobile.jpg")`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    carousel2Div: {
        backgroundImage: `url("img/carousel2.jpg")`,
        height: "800px",
        [theme.breakpoints.down("md")]: {
            height: "500px",
            paddingBottom: "100px",
            backgroundImage: `url("img/carousel2_mobile.jpg")`,

        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    carousel3Div: {
        backgroundImage: `url("img/carousel3.jpg")`,
        height: "800px",
        [theme.breakpoints.down("md")]: {
            height: "500px",
            paddingBottom: "100px",
            backgroundImage: `url("img/carousel3_mobile.jpg")`,

        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    textDiv: {
        [theme.breakpoints.up("sm")]: {
            paddingTop: "105px",
            float: "right",
            paddingRight: "17%",
            right: '10%',
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        [theme.breakpoints.down("md")]: {
            position: 'relative',
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        textTransform: "uppercase",
        position: "relative",
        textAlign: "left",
    },
    car2textDiv: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        },
        [theme.breakpoints.down("md")]: {
            paddingTop: "18px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: '55%',
        },
        textTransform: "uppercase",
        position: "relative",
        textAlign: "left",
        '& p': {
            marginTop: 20,
            marginBottom: 20,
        }
    },
    car3textDiv: {
        [theme.breakpoints.up("sm")]: {
            paddingTop: "177px",
            paddingRight: "400px"
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        [theme.breakpoints.down("md")]: {
            paddingTop: "18px",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        textTransform: "uppercase",
        position: "relative",
        textAlign: "left",
        '& p': {
            marginTop: 20,
            marginBottom: 20,
        }
    },
    p1: {
        color: theme.palette.secondary.main,
        fontSize: "30px",
    },
    c2p1: {
        color: '#370b48',
        float: 'left',
        width: '38%',
        fontSize: '32px',
        left: '18%',
        position: 'relative',
        fontWeight: 'bold',
        [theme.breakpoints.down("md")]: {
            color: '#370b48',
            float: 'left',
            width: '100%',
            fontSize: '20px',
            left: 0,
            position: 'relative',
            fontWeight: 'bold',
            paddingTop: '61%'
        },
    },
    c3p1: {
        color: '#ffffff',
        float: 'right',
        width: '38%',
        fontSize: '32px',
        left: '18%',
        position: 'relative',
        fontWeight: 'bold',
        [theme.breakpoints.down("md")]: {
            color: '#ffffff',
            float: 'left',
            width: '100%',
            fontSize: '20px',
            left: 0,
            position: 'relative',
            fontWeight: 'bold',
            paddingTop: '61%'
        },
    },
    p2: {
        color: theme.palette.text.main,
        fontSize: "30px",
    },
    p3: {
        color: theme.palette.secondary.main,
        fontSize: "30px",
        marginBottom: 15
    },
    searchInput: {
        background: "#F5F5F5",
        borderRadius: "23px",
        color: "#C5C5C5",
        "& svg": {
            color: "#929292",
        },

        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "& .MuiOutlinedInput-input": {
            padding: "4% 14px",
        },
        width: "380px",
        [theme.breakpoints.down("sm")]: {
            width: "280px",
            '.MuiOutlinedInput-adornedStart': {
                paddingTop: '11px',
            }
        }
    },
    searchDiv: {

        width: "432px",
        height: "46px",
        display: "inline-flex",
        "& button": {
            width: "96px",
            left: "-3rem",
            borderRadius: "23px",
            textTransform: "capitalize",
        },
    },
    coloredSpan: {
        color: theme.palette.text.main
    }
}));
export default function DashboardCarousel() {
    const classes = useStyles();
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            autoPlay={true}
            infiniteLoop={true}
            className={classes.dashboardCarousel}
        >

            <div className={classes.carousel1Div}>
                <div className={classes.textDiv}>
                    <p className={classes.p1}>Discover local </p>
                    <p className={classes.p2}>talented home-chefs</p>
                    <p className={classes.p3}>near you</p>
                    <div className={classes.searchDiv}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            className={classes.searchInput}
                            placeholder="Search for vendors"
                        />
                        <Button fullWidth variant="contained" color="primary">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.carousel2Div}>
                <div className={classes.car2textDiv}>
                    <label className={classes.c2p1}>Order your favorite <span className={classes.coloredSpan}>home-made food</span> from
                        the comfort of
                        your
                        couch</label>
                </div>
            </div>
            <div className={classes.carousel3Div}>
                <div className={classes.car2textDiv}>
                    <label className={classes.c3p1}>
                        We deliver your <span className={classes.coloredSpan}>home-made food</span> to your doorstep in
                        no time!
                    </label>
                </div>
            </div>
        </Carousel>

    );
}
