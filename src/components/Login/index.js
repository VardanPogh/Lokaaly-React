import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import {API_URL} from "../../config";

const useStyles = makeStyles(theme => ({
        root: {
            height: '120vh',
        },
        image: {
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '& img': {
                width: '100%',
                height: '100%'
            }
        },
        paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '60%',
            margin: "20% auto",
            marginLeft: '2rem',
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
            width: '27rem',
            marginTop: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
                width: '86%',
            },

        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            background: theme.palette.primary.main,
            width: '25%',
            float: 'left',
            borderRadius: '29px',
            opacity: 1,
            height: '46px',
            color: '#F0D283',
            [theme.breakpoints.down("sm")]: {
                width: '100%',
            },
        },
        submitDiv: {
            width: '100%',
            float: 'left',
        },
        floatLeft: {
            float: 'left',
            color: '#565656',
            fontSize: 12,
        },
        displayFlex: {
            display: 'flex',
            fontSize: 16,
            '& label': {
                margin: 'auto 0',
                letterSpacing: 0,
                color: '#313131',
                fontWeight: 'bold',
            },
            '& svg': {
                margin: '0 6px'
            }
        },
        errorMsg: {
            color: 'red',
            background: theme.palette.primary
        },
        inputs: {
            '& div': {
                borderRadius: '29px',
                background: '#FBFBFB',
                boxShadow: '0px 0px 5px #0000001A',
            }
        },
        loginIcon: {
            marginBottom: 30,
            [theme.breakpoints.down("sm")]: {
                width: '100%',
            },
        },
    }))
;

const CustomRadio = withStyles({
    root: {
        color: "#7d4393",
        "&$checked": {
            color: "#7d4393",
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"},
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    };

    const handleClick = async () => {
        if (email && password) {
            await fetch(API_URL + "users/login", requestOptions)
                .then(async (response) => {
                    const data = await response.json();
                    if (response.status == 200 && data.jwtToken) {
                        localStorage.setItem('token', data.jwtToken);
                        localStorage.setItem('role', data.role);
                        if (data.role == "vendor") {
                            localStorage.setItem('vendorId', data._id);
                        }
                        if (data.role == "vendor") {
                            if (data.vendor.activeStep == 1) {
                                history.push('/newpassword');
                            } else {
                                history.push('/vendorview');
                            }
                        } else {
                            history.push('/');
                        }

                    } else {
                        setErrorMsg(data.error.message)
                    }
                })
        } else {
            setErrorMsg('fill all sections')
        }
    };

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={6} className={classes.image}>
                    <img src="img/loginImage.png" alt="login_image"/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate>
                            <img src="img/logo.svg" alt="login_icon" className={classes.loginIcon}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={(event => {
                                    setEmail(event.target.value)
                                })}
                                className={classes.inputs}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={(event => {
                                    setPassword(event.target.value)
                                })}
                                id="password"
                                className={classes.inputs}
                                autoComplete="current-password"
                            />
                            <Grid item xs>
                                <p className={classes.errorMsg}>{errorMsg}</p>
                                <Link href="#" variant="body2" className={classes.floatLeft}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <div className={classes.submitDiv}>
                                <Button
                                    onClick={handleClick}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
