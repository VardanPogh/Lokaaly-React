import React, {useState} from "react";
import {Link as Linkk} from "react-router-dom";
import {useHistory} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import Link from "@material-ui/core/Link";
import {Button} from "@material-ui/core";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {API_URL} from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        "& hr": {
            borderColor: "#E5E5E5",
        },
    },
    image: {
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
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
            padding: '5%',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "27rem",
        marginTop: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            width: '100%',
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
    },
    submitDiv: {
        width: "100%",
        float: "left",
    },
    floatLeft: {
        float: "left",
        color: "#565656",
        fontSize: 16,
        marginTop: 30,
        "& a": {
            color: theme.palette.primary.main,
            marginLeft: 30,
        },
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
        "& div": {
            borderRadius: "29px",
            background: "#FBFBFB",
            boxShadow: "0px 0px 5px #0000001A",
        },
    },
    loginIcon: {
        marginBottom: 30,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    },
    facebookButton: {
        margin: "10px 0",
        background: "#4C69BA",
        width: "100%",
        color: "#FFFFFF",
        textTransform: "capitalize",
        "& svg": {
            marginRight: "12px",
        },
    },
    googleButton: {
        margin: "10px 0",
        background: "#FBFBFB",
        boxShadow: "0px 0px 5px #0000001A",
        textTransform: "capitalize",
        width: "100%",
        "& img": {
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "12px",
        },
    },
    emailButton: {
        margin: "10px 0",
        background: "#F0D283",
        boxShadow: "0px 0px 5px #0000001A",
        textTransform: "capitalize",
        color: "#74368C",
        width: "100%",
        height: "48px",
        borderRadius: "29px",
        "& svg": {
            marginRight: "12px",
            width: "1.5rem",
            height: "1.5rem",
        },
    },
    error: {
        fontSize: "16px",
        color: "red",
        textAlign: "left",
        marginTop: "10px "
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    const responseGoogle = async (response) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
                idToken: response.tokenId,
            }),
        };
        await fetch(
            API_URL + "users/google", requestOptions).then(async (response) => {
            const data = await response.json();

            if (response.status === 200 && data.jwtToken) {
                localStorage.setItem("token", data.jwtToken);
                localStorage.setItem("role", data.role);
                history.push("/");
            } else {
                setErrorMsg(data.message);
            }
        });
    };

    const failed = (resp) => {
        setErrorMsg(resp.error);
    };

    const responseFacebook = async (response) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
                userId: response.id,
                accessToken: response.accessToken,
            }),
        };
        await fetch(
            API_URL + "users/facebook",
            requestOptions
        ).then(async (response) => {
            const data = await response.json();
            if (response.status === 200 && data.jwtToken) {
                localStorage.setItem("token", data.jwtToken);
                localStorage.setItem("role", data.role);
                history.push("/");
            } else {
                setErrorMsg(data.message);
            }
        });
    };

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={6} className={classes.image}>
                    <img src="img/signUpImage.png" alt="SignUpImage"/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate>
                            <img
                                src="img/logo.svg"
                                alt="loginIcon"
                                className={classes.loginIcon}
                            />

                            <FacebookLogin
                                cssClass={Fab}
                                buttonStyle={{
                                    width: "100%",
                                    background: "#4C69BA",
                                    color: "#FFFFFF",
                                    height: "49px",
                                    borderRadius: "29px",
                                    border: "none",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    margin: "10px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                appId="312660346593920"
                                autoLoad={false}
                                fields="name,email"
                                callback={responseFacebook}
                                textButton="Continue with Facebook "
                                icon={<FacebookIcon style={{marginRight: "12px"}}/>}
                            />

                            <GoogleLogin
                                clientId="780535301635-5idc9t2pe8in8rs9bj1phu04jjb02nvk.apps.googleusercontent.com"
                                cookiePolicy={"single_host_origin"}
                                autoLoad={false}
                                onSuccess={responseGoogle}
                                onFailure={failed}
                                render={(renderProps) => (
                                    <Fab variant="extended" onClick={renderProps.onClick}
                                         disabled={renderProps.disabled} className={classes.googleButton}>
                                        <img src="img/googleIcon.svg" alt="googleIcon"/>
                                        Continue with Google
                                    </Fab>
                                )}
                            />

                            <Button
                                variant="extended"
                                className={classes.emailButton}
                                component={Linkk}
                                to="/login"
                            >
                                <MailIcon/>
                                Or Continue with Email
                            </Button>
                            <div className={classes.error}>{errorMsg}</div>
                            <hr/>
                            <Grid item className={classes.floatLeft}>
                                {"Don't have an account?"}
                                <Link href={"/user/register"}> Sign Up</Link>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
