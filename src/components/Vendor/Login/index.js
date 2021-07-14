import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {API_URL} from "../../../config";

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
            [theme.breakpoints.down("sm")]: {
                width: '100%',
                marginLeft: 'unset'
            },

            margin: "20% auto",
            marginLeft: '2rem'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '27rem',
            marginTop: theme.spacing(1),
            textAlign: 'left',
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
            color: '#F0D283'
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
            marginBottom: 30
        },
        title: {
            textAlign: 'left',
            color: '#565656',
            opacity: 1,
            fontSize: 32,
        }
    }))
;

export default function VendorLogin() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleClick = () => {
        if (email && password) {
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"},
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            };
            fetch(API_URL + "auth/login", requestOptions)
                .then(async (response) => {
                    const data = await response.json();
                    if (response.status == 200 && data.access_token) {
                        localStorage.setItem('token', data.access_token);
                        history.push('/');
                    } else {
                        setErrorMsg(data.message)
                    }
                })
        } else {
            setErrorMsg('fill all sections')
        }
        if (localStorage.getItem('token')) {
            return <Redirect to="/"/>;
        }
    };
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={6} className={classes.image}>
                    <img src="/img/VendorLogin.png"/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate>
                            <img src="/img/loginIcon.svg" className={classes.loginIcon}/>
                            <h4 className={classes.title}>Login</h4>
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
                                {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}

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
