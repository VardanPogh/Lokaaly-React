import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import {Avatar, Grid, Hidden} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from "@material-ui/core/Container";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import {API_URL} from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& .MuiLink-root": {
            verticalAlign: "middle",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    activeLink: {
        color: "#F0D283",
    },
    link: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        alignSelf: "center",
        fontSize: "16px",
        letterSpacing: "0px",
        color: "#FFFFFF",
        textDecoration: "none",
        fontFamily: "Nunito",
        fontWeight: "700",
    },
    ml_40: {
        marginLeft: 40,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0
        },
    },
    whiteButton: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "16px",
        borderRadius: "23px",
        color: theme.palette.secondary.main,
        textTransform: "capitalize",
        marginLeft: "24px",
        fontFamily: "Nunito",
        fontWeight: "900",
        background: theme.palette.primary.main,
        boxShadow: 'none',
        '&:hover': {
            background: 'none',
            boxShadow: 'none',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            paddingLeft: 0,
        },
    },
    dishesButton: {
        background: 'none',
        color: '#F0D283',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            background: 'none',
            boxShadow: 'none',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            paddingLeft: 0,
        },
    },
    formControl: {
        minWidth: 180,
        background: "white",
        height: "38px",
        borderRadius: "23px",
        marginLeft: "40px",
        "& label": {
            fontFamily: "Nunito",
            fontWeight: "900",
            verticalAlign: "middle",
            paddingLeft: "24px",
            transform: "unset",
            color: theme.palette.primary.main,
            paddingTop: "12px",
            fontSize: "16px",
            textTransform: "uppercase",
        },
        "& .MuiSelect-icon": {
            top: "calc(50% - 17px)",
            right: "24px",
        },
        "& .MuiInput-underline:before, & .MuiInput-underline:after": {
            display: "none",
        },
    },
    formControl1: {
        minWidth: 180,
        // background: "white",
        height: "38px",
        borderRadius: "23px",
        marginLeft: "40px",
        fontFamily: "Nunito",
        fontWeight: "900",
        verticalAlign: "middle",
        transform: "unset",
        color: theme.palette.secondary.main,
        fontSize: "16px",
        textTransform: "initial",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            paddingLeft: 0
        },
        // "&:hover": {
        //     background: "#565656",
        // },
    },
    customSelect: {
        // marginTop: "0 !important",
        padding: theme.spacing(1),
        width: "240px!important",
    },
    main: {
        display: "inline-flex",
        width: "100%",
    },
    logoDiv: {
        width: "200px",
        verticalAlign: "middle",
        paddingTop: "10px",
    },
    homeDiv: {
        justifyContent: "center",
        alignItems: "center",
        width: "auto"
    },
    buttonsDiv: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
    },
    center: {
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    btn_burger: {
        border: "none!important",
        outline: "none!important",
        padding: "0",
        margin: 0,
        boxShadow: "none",
        "&:focus": {
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
        },
        "&:hover": {
            boxShadow: "none",
        },
    },
    marginLeft: {
        marginLeft: "25px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            paddingLeft: 0
        },


    },
    profileText: {
        textTransform: "none!important",
        fontFamily: "Nunito",
        fontWeight: "800",
        fontSize: "16px",
        color: "#ffff",
        // letterSpacing: "0px",
        marginLeft: "8px"
    },
    cartButton: {
        margin: 'auto',
        '& img': {
            verticalAlign: 'middle',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 6
        },
    },
    drawerClass: {
        '& .MuiDrawer-paperAnchorRight': {
            width: 300,
            background: theme.palette.primary.main
        },
        color: '#ffffff',
        '& .MuiIconButton-label': {
            color: '#ffffff',

        }
    },
    drawerInner: {
        color: '#ffffff'
    }

}));

export default function NavBar() {
    const classes = useStyles();
    const [user, setUser] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const onLogoutClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("vendorId");
        localStorage.removeItem("role");
        window.location.reload();
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    let token = localStorage.getItem("token");

    let api_url;
    let vendorId;
    let role = localStorage.getItem('role');
    switch (role) {
        case 'vendor':
            vendorId = localStorage.getItem('vendorId');
            api_url = "vendors/" + vendorId;
            break;
        case 'customer':
            api_url = "users/profile";
            break;
        default:
            break;
    }


    async function fetchMyApi() {
        await fetch(API_URL + api_url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(async (response) => {
                const data = await response.json();
                setUser(data);
            }).catch((error) => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("vendorId");
                    localStorage.removeItem("role");
                }
            )
    }


    useEffect(() => {
        if (api_url) fetchMyApi()
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Grid
                        direction="row"
                        justify="space-between"
                        container
                        className={classes.main}
                    >
                        <Grid item className={classes.logoDiv} component={Link} to="/">
                            <img src="/img/NavBarIcon.svg" alt="nav"/>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item sm={7} className={classes.buttonsDiv}>
                                {
                                    token && user && user && user.role === 'customer' && (
                                        <>
                                            <Link to="/" className={`${classes.link} ${classes.homeDiv}`}>
                                                Home
                                            </Link>
                                            <Link
                                                 
                                                className={`${classes.link} ${classes.ml_40}`}
                                                to={"/contact"}
                                            >
                                                Contact Us
                                            </Link>
                                            <Grid container direction="row" style={{width: "auto"}}>
                                                <Link className={classes.cartButton} to="/cart">
                                                    <img
                                                        src="/img/basket_icon.svg"
                                                        alt="basket"
                                                        className={classes.marginLeft}
                                                    />
                                                </Link>
                                                <Button component={Link} to="/favorites" className={classes.marginLeft}>
                                                    <img
                                                        src="/img/favorites-icon.svg"
                                                        alt="favorites"
                                                    />
                                                </Button>
                                                <Button className={classes.marginLeft}>
                                                    <img
                                                        src="/img/person-24px.svg"
                                                        alt="person"
                                                    />
                                                    <div className={classes.profileText}>
                                                        {user.firstName + " " + user.lastName}
                                                    </div>
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    // color="secondary"
                                                    className={classes.whiteButton}
                                                    onClick={onLogoutClick}
                                                >
                                                    logout
                                                </Button>
                                            </Grid>
                                        </>
                                    )}
                                {!token &&
                                (<>
                                        <div>
                                            <Link to="/" className={`${classes.link} ${classes.homeDiv}`}>
                                                Home
                                            </Link>
                                            <Link
                                                 
                                                className={`${classes.link} ${classes.ml_40}`}
                                                to={"/contact"}
                                            >
                                                Contact Us
                                            </Link>
                                            <Button aria-controls="simple-menu" aria-haspopup="true"
                                                    onClick={handleClick} className={`${classes.formControl1} `}
                                                    style={{width: "243px"}}>
                                                Become a Partner
                                                {anchorEl
                                                    ? <ArrowDropDownIcon style={{marginLeft: "8px"}}/>
                                                    : <ArrowDropUpIcon style={{marginLeft: "8px"}}/>}
                                            </Button>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                                className={classes.customSelect}
                                            >
                                                <MenuItem onClick={handleClose} component={Link} to="/driver/register">Sign up as a Driver</MenuItem>
                                                <MenuItem onClick={handleClose} component={Link} to="/vendor/register">Sign
                                                    up as a Home Chef</MenuItem>
                                            </Menu>
                                        </div>
                                        <div>
                                            <Button
                                                variant="contained"
                                                // color="secondary"
                                                className={classes.whiteButton}
                                                component={Link}
                                                to="/login"
                                            >
                                                login
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                variant="contained"
                                                // color="secondary"
                                                className={classes.whiteButton}
                                                component={Link}
                                                to="/user/register"
                                            >
                                                Sign Up
                                            </Button>
                                        </div>
                                    </>
                                )}
                                {token && user && user.role === 'vendor' &&
                                (<>
                                        <div>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.dishesButton}
                                                component={Link}
                                                to="/dishes"
                                            >
                                                My Dishes
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.dishesButton}
                                                component={Link}
                                                to="/delivery"
                                            >
                                                Delivery
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.dishesButton}
                                                component={Link}
                                                to="/orderlist"
                                            >
                                                Orders
                                            </Button>
                                            <Button className={classes.marginLeft} component={Link} to="/vendorview">
                                                <img
                                                    src="/img/person-24px.svg"
                                                    alt="person"
                                                />
                                                <Button
                                                    className={classes.profileText}>
                                                    {user.firstName + " " + user.lastName}
                                                </Button>
                                            </Button>
                                            <Button
                                                variant="contained"
                                                // color="secondary"
                                                className={classes.whiteButton}
                                                onClick={onLogoutClick}
                                            >
                                                logout
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                className={classes.btn_burger}
                                variant="contained"
                                color="primary"
                                onClick={handleDrawerToggle}
                                startIcon={<Avatar src="/img/menu-24px.svg"/>}
                            ></Button>
                            <Drawer
                                variant="temporary"
                                anchor={'right'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                className={classes.drawerClass}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                                    X
                                </IconButton>
                                <div className={classes.drawerInner}>
                                    {
                                        token && user && user && user.role === 'customer' && (
                                            <>
                                                <List>
                                                    <ListItem button key={'Home'}>
                                                        <Link to="/" className={`${classes.link} ${classes.homeDiv}`}>
                                                            Home
                                                        </Link>
                                                    </ListItem>

                                                    <ListItem button key={'contact'}>
                                                        <Link
                                                             
                                                            className={`${classes.link} ${classes.ml_40}`}
                                                            to={"/contact"}
                                                        >
                                                            Contact Us
                                                        </Link>
                                                    </ListItem>

                                                    <ListItem button key={'basket'}>
                                                        <Link className={classes.cartButton} to="/cart">
                                                            <img
                                                                src="/img/basket_icon.svg"
                                                                alt="basket"
                                                                className={classes.marginLeft}
                                                            />
                                                        </Link>
                                                        <Button component={Link} to="/favorites"
                                                                className={classes.marginLeft}>
                                                            <img
                                                                src="/img/favorites-icon.svg"
                                                                alt="favorites"
                                                            />
                                                        </Button>
                                                    </ListItem>
                                                    <ListItem button key={'person'}>
                                                        <Button className={classes.marginLeft}>
                                                            <img
                                                                src="/img/person-24px.svg"
                                                                alt="person"
                                                            />
                                                            <div className={classes.profileText}>
                                                                Profile Page
                                                            </div>
                                                        </Button>
                                                    </ListItem>
                                                </List>
                                                <Button
                                                    variant="contained"
                                                    // color="secondary"
                                                    className={classes.whiteButton}
                                                    onClick={onLogoutClick}
                                                >
                                                    logout
                                                </Button>
                                            </>
                                        )}
                                    {!token &&
                                    (<>
                                            <div>
                                                <List>
                                                    <ListItem button key={'Home'}>
                                                        <Link to="/" className={`${classes.link} ${classes.homeDiv}`}>
                                                            Home
                                                        </Link>
                                                    </ListItem>

                                                    <ListItem button key={'contact'}>
                                                        <Link
                                                             
                                                            className={`${classes.link} ${classes.ml_40}`}

                                                         to={"/contact"}
                                                        >
                                                            Contact Us
                                                        </Link>
                                                    </ListItem>
                                                    <ListItem button key={'arrow'} style={{paddingLeft: 0}}>
                                                        <Button aria-controls="simple-menu" aria-haspopup="true"
                                                                onClick={handleClick}
                                                                className={`${classes.formControl1} `}
                                                                style={{width: "243px"}}>
                                                            Become a Partner
                                                            {anchorEl
                                                                ? <ArrowDropDownIcon style={{marginLeft: "8px"}}/>

                                                                : <ArrowDropUpIcon style={{marginLeft: "8px"}}/>}
                                                        </Button>
                                                        <Menu
                                                            id="simple-menu"
                                                            anchorEl={anchorEl}
                                                            keepMounted
                                                            open={Boolean(anchorEl)}
                                                            onClose={handleClose}
                                                            className={classes.customSelect}
                                                        >
                                                            <MenuItem onClick={handleClose}>Sign up as a
                                                                Driver</MenuItem>
                                                            <MenuItem onClick={handleClose} component={Link}
                                                                      to="/vendor/register">Sign
                                                                up as a Home Chef</MenuItem>
                                                        </Menu>
                                                    </ListItem>
                                                    <ListItem button key={'login'}>
                                                        <div>
                                                            <Button
                                                                variant="contained"
                                                                // color="secondary"
                                                                className={classes.whiteButton}
                                                                component={Link}
                                                                to="/login"
                                                            >
                                                                login
                                                            </Button>
                                                        </div>
                                                    </ListItem>
                                                    <ListItem button key={'login'}>
                                                        <div>
                                                            <Button
                                                                variant="contained"
                                                                // color="secondary"
                                                                className={classes.whiteButton}
                                                                component={Link}
                                                                to="/user/register"
                                                            >
                                                                Sign Up
                                                            </Button>
                                                        </div>
                                                    </ListItem>
                                                </List>


                                            </div>
                                        </>
                                    )}
                                    {token && user && user.role === 'vendor' &&
                                    (<>
                                            <div>
                                                <List>
                                                    <ListItem button key={'Dishes'}>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.dishesButton}
                                                            component={Link}
                                                            to="/dishes"
                                                        >
                                                            My Dishes
                                                        </Button>
                                                    </ListItem>

                                                    <ListItem button key={'delivery'}>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.dishesButton}
                                                            component={Link}
                                                            to="/delivery"
                                                        >
                                                            Delivery
                                                        </Button>
                                                    </ListItem>
                                                    <ListItem button key={'orders'}>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.dishesButton}
                                                            component={Link}
                                                            to="/orderlist"
                                                        >
                                                            Orders
                                                        </Button>
                                                    </ListItem>

                                                    <ListItem button key={'user'}>
                                                        <Button className={classes.marginLeft} component={Link}
                                                                to="/vendorview">
                                                            <img
                                                                src="/img/person-24px.svg"
                                                                alt="person"
                                                            />
                                                            <Button
                                                                className={classes.profileText}>
                                                                {user.firstName + " " + user.lastName}
                                                            </Button>
                                                        </Button>
                                                    </ListItem>

                                                    <ListItem button key={'logout'}>
                                                        <Button
                                                            variant="contained"
                                                            // color="secondary"
                                                            className={classes.whiteButton}
                                                            onClick={onLogoutClick}
                                                        >
                                                            logout
                                                        </Button>
                                                    </ListItem>
                                                </List>


                                            </div>
                                        </>
                                    )}


                                </div>
                            </Drawer>
                        </Hidden>
                    </Grid>
                </Container>
            </AppBar>
        </div>
    );
}
