import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {API_URL} from "../../../config";
import Modal from "@material-ui/core/Modal";
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
    root: {
        height: "120vh",
    },
    image: {
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        "& img": {
            width: "100%",
            height: "100%",
        },
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        margin: "20% auto",
        marginLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 'unset',
            width: '100%',
        },

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "50rem",
        marginTop: theme.spacing(1),
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            width: '86%',
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: theme.palette.primary.main,
        width: "25%",
        float: "left",
        borderRadius: "29px",
        opacity: 1,
        height: "46px",
        color: "#F0D283",
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },

    },
    submitDiv: {
        width: "100%",
        float: "left",
    },
    floatLeft: {
        float: "left",
        color: "#565656",
        fontSize: 12,
    },
    displayFlex: {
        display: "flex",
        fontSize: 16,
        "& label": {
            margin: "auto 0",
            letterSpacing: 0,
            color: "#313131",
            fontWeight: "bold",
        },
        "& svg": {
            margin: "0 6px",
        },
    },
    errorMsg: {
        color: "red",
        background: theme.palette.primary,
    },
    inputs: {
        border: "none!important",
        "& div": {
            borderRadius: "29px",
            background: "#FBFBFB",
            border: "none!important",
            boxShadow: "0 0 10px #0000001A!important",
        },
    },
    loginIcon: {
        marginBottom: 30,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    },
    title: {
        textAlign: "center",
        color: "#565656",
        opacity: 1,
        fontSize: 32,
    },
    formContainer: {
        "& .MuiGrid-item": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    error: {
        fontSize: "16px",
        color: "red",
        textAlign: "left",
        marginTop: "10px "
    },
    logo: {
        textAlign: "left",
    },
    paperModal: {
        [theme.breakpoints.down("sm")]: {
            left: '1%',
        },
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '30%',
        left: '50%',
    },
    checkDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& svg': {
            color: 'green',
            fontSize: 80,
        }
    },
    modalP: {
        marginBottom: 20
    },
    closeButton: {
        marginLeft: 10,
        color: 'black'
    }
}));

export default function UserRegister() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [fName, setfName] = useState("");
    const [password, setPassword] = useState("");
    const [lName, setlName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleOpen();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email && password) {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: JSON.stringify({
                    firstName: fName,
                    lastName: lName,
                    email: email,
                    password: password,
                }),
            };
            await fetch(API_URL + "users/sign-up", requestOptions).then(async (response) => {
                const data = await response.json();
                if (response.status === 200 && data.jwtToken) {
                    localStorage.setItem("token", data.jwtToken);
                    history.push("/user/confirm");
                } else {
                    setErrorMsg(data.error.message);
                }
            });
        } else {
            setErrorMsg("fill all sections");
        }
    };


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paperModal}>
                    <div className={classes.checkDiv}><HelpIcon/></div>
                    <p className={classes.modalP}>
                        If you want to sign up as a home chef or driver, click here
                    </p>
                    <div className={classes.checkDiv}>
                        <Button onClick={() => {
                            history.push('/vendor/register')
                        }}
                                variant='contained'
                                color='primary'
                        >GO</Button>
                        <Button onClick={() => {
                            handleClose();
                        }}
                                variant='contained'
                                color='secondary'
                                className={classes.closeButton}
                        >Close</Button>
                    </div>
                </div>
            </Modal>

            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={5} className={classes.image}>
                    <img src="/img/VendorRegister.png" alt="VendorRegister"/>
                </Grid>
                <Grid item xs={12} sm={8} md={7} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <Grid container justify="center" spacing={3} className={classes.formContainer}>
                                <Grid item xs={12} md={8} elevation={6} square className={classes.logo}>
                                    <img src="/img/logo.svg" alt="loginIcon" className={classes.loginIcon}/>
                                </Grid>
                                <Grid item xs={12} md={8} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="fName"
                                        label="First Name"
                                        name="fName"
                                        autoComplete="name"
                                        onChange={(event) => {
                                            setfName(event.target.value);
                                        }}
                                        className={classes.inputs}
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} md={8} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="lName"
                                        label="Last Name"
                                        onChange={(event) => {
                                            setlName(event.target.value);
                                        }}
                                        id="lName"
                                        className={classes.inputs}
                                    />
                                </Grid>

                                <Grid item xs={12} md={8} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        className={classes.inputs}
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} md={8} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        name="password"
                                        label="Password"
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                        id="phone"
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={8} elevation={6} square>
                                    <div className={classes.error}>{errorMsg}</div>
                                </Grid>
                                <Grid item xs={12} md={8} elevation={6} square className={classes.submitDiv}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        SIGN UP
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
