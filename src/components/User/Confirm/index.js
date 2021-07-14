import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import ReactInputVerificationCode from 'react-input-verification-code';
import {Button} from "@material-ui/core";
import {API_URL} from "../../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "120vh",
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
        },

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "30rem",
        marginTop: theme.spacing(1),
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            width: '92%',
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
    error: {
        fontSize: "16px",
        color: "red",
        textAlign: "left",
        marginTop: "10px "
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
    title: {
        textAlign: "left",
        color: "#565656",
        opacity: 1,
        fontSize: 32,
        marginTop: "10px",
        marginBottom: "20px"
    },
    formContainer: {
        "& .MuiGrid-item": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    inputsDiv: {
        '& .ReactInputVerificationCode__container': {
            width: '100%',
        },
        '& .ReactInputVerificationCode__item': {
            width: '58px',
        }
    }

}));


export default function UserConfirm() {
    const classes = useStyles();
    const history = useHistory();

    const [code, setCode] = React.useState();
    const [errorMsg, setErrorMsg] = useState("");

    const accesstoken = localStorage.getItem("token");


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (code) {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": "Bearer " + accesstoken,
                },

            };
            fetch(
                API_URL + "users/verify?code=" + code,
                requestOptions
            ).then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {

                    history.push("/");
                } else {
                    setErrorMsg("fill correct verificatin code");
                }
            });
        } else {
            setErrorMsg("fill verificatin code");
        }
        if (localStorage.getItem("token")) {
            return <Redirect to="/"/>;
        }
    };
    const change = (event) => {
        setCode(event)
    }
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={5} className={classes.image}>
                    <img src="/img/VendorRegister.png"/>
                </Grid>
                <Grid item xs={12} sm={8} md={7} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <div>
                                <img src="/img/logo.svg" className={classes.loginIcon}/>
                            </div>
                            <div>
                                <h4 className={classes.title}>Enter your code</h4>
                            </div>
                            <div className={classes.inputsDiv}>
                                <ReactInputVerificationCode
                                    value={code} length={6}
                                    onChange={change}
                                    fieldWidth={100}
                                    fieldHeight={10}/>
                            </div>
                            <div className={classes.error}> {errorMsg} </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                VERIFY
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
