import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
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
            marginLeft: '2rem'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '27rem',
            marginTop: theme.spacing(1),
            textAlign: 'left'
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

export default function CreateNewPassword() {
    const classes = useStyles();
    const history = useHistory();
    const [validToken, setValidToken] = useState();
    const [rePassword, setrePassword] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {
        const token = history.location.search.split('token=')[1];
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"},
            body: JSON.stringify({
                token: token,
            }),
        };
        fetch(API_URL + "vendors/confirm/validate", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                setValidToken(data.jwtToken);
                console.log(data);
            })
    }, [])


    const handleClick = async () => {
        if (rePassword && password && password == rePassword) {
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${validToken}`
                },
                body: JSON.stringify({
                    password: password,
                }),
            };
            await fetch(API_URL + "vendors/password", requestOptions)
                .then(async (response) => {
                    const data = await response.json();
                    if (response.status == 200) {

                        history.push('/');
                    } else {
                        setErrorMsg(data.message)
                    }
                })
        } else {
            setErrorMsg('fill all sections')
        }
        if (password != rePassword) {
            setErrorMsg("Passwords do not match.")
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
                            <img src="/img/logo.svg" className={classes.loginIcon}/>
                            <h4 className={classes.title}>Login</h4>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="New Password"
                                type="password"
                                onChange={(event => {
                                    setPassword(event.target.value)
                                })}
                                id="password"
                                className={classes.inputs}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="rePassword"
                                label="Reenter Password"
                                name="rePassword"
                                type="password"
                                onChange={(event => {
                                    setrePassword(event.target.value)
                                })}
                                className={classes.inputs}
                            />
                            <div className={classes.submitDiv}>
                                {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}
                                <Button
                                    onClick={handleClick}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    CONFIRM
                                </Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
