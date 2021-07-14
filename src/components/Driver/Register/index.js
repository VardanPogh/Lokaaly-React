import React, {useRef, useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {API_URL} from "../../../config";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "@material-ui/core/Modal";
import CheckIcon from '@material-ui/icons/Check';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const axios = require("axios");

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
            width: '80%',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '50rem',
        [theme.breakpoints.down("sm")]: {
            width: '20rem',
        },
        marginTop: theme.spacing(1),
        textAlign: 'center'
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
    error: {
        fontSize: "16px",
        color: "red",
        textAlign: "left",
        marginTop: "20px "
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
        textAlign: 'center',
        color: '#565656',
        opacity: 1,
        fontSize: 32,
    },
    formContainer: {
        '& .MuiGrid-item': {
            paddingTop: 0,
            paddingBottom: 0,
        }
    },
    paperModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '30%',
        left: '50%',
        [theme.breakpoints.down("sm")]: {
            left: '1%',
        },
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
    formControl: {
        width: '100%',
        marginTop: '1rem',
        '& div': {
            borderRadius: '29px',
            background: '#FBFBFB',
            boxShadow: '0px 0px 5px #0000001A',
        }
    },
}));

export default function DriverRegister() {
    const classes = useStyles();
    const history = useHistory();

    const hiddenFileInput = useRef(null);
    const hiddenFileInputDriving = useRef(null);
    const divRef = useRef(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [business_name, setBusiness_name] = useState('');
    const [website, setWebsite] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const [fileName, setFileName] = useState('Passport(Pdf or Jpeg)');
    const [fileNameDriving, setFileNameDriving] = useState('Driving License(Pdf or Jpeg)');
    const [file, setFile] = useState();
    const [fileDriving, setFileDriving] = useState();
    const [country, setCountry] = useState('');
    const [fleet, setFleet] = useState('');
    const [transportType, setTransportType] = useState('');
    const [agree, setAgree] = useState(false);
    const [carModel, setCarModel] = useState('');
    const [carPlateNumber, setCarPlateNumber] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleAttachClick = () => {
        hiddenFileInput.current.click();
    }
    const handleAttachClickDriving = () => {
        hiddenFileInputDriving.current.click();
    }

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFileName(uploadedFile.name);
        setFile(uploadedFile);
        setTimeout(function () {
            divRef.current.focus();
        }, 1000);
    };

    const handleFileChangeDriving = (event) => {
        const uploadedFile = event.target.files[0];
        setFileNameDriving(uploadedFile.name);
        setFileDriving(uploadedFile);
        setTimeout(function () {
            divRef.current.focus();
        }, 1000);
    };

    const handleRegisterClick = async (event) => {
        event.preventDefault();
        if (agree && name && surname && email && fileDriving && file) {

            var formdata = new FormData();
            formdata.append("lastName", surname);
            formdata.append("transportType", transportType);
            formdata.append("fleetType", fleet);
            formdata.append("passport", file);
            formdata.append("carModel", carModel);
            formdata.append("phoneNumber", phone);
            formdata.append("drivingLicense", fileDriving);
            formdata.append("firstName", name);
            formdata.append("email", email);
            formdata.append("plateNumber", carPlateNumber);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(API_URL + "tookan/agents/sign-up", requestOptions)
                .then(response => response.text())
                .then(result => setOpen(true))
                .catch(error => console.log('error', error));


        } else {
            setErrorMsg("Fill all sections");
        }
    };
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={4} md={5} className={classes.image}>
                    <img src="/img/driver_register.png"/>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className={classes.paperModal}>
                        <div className={classes.checkDiv}><CheckIcon/></div>
                        <p className={classes.modalP}>Thank you for registering with Lokaaly. Your request has been
                            successfully submitted. A member
                            from
                            our team will be in touch with you shortly.</p>
                        <div className={classes.checkDiv}>
                            <Button onClick={() => {
                                history.push('/')
                            }}
                                    variant='contained'
                                    color='primary'
                            >OK</Button>
                        </div>
                    </div>
                </Modal>

                <Grid item xs={12} sm={8} md={7} elevation={6} square>
                    <div className={classes.paper}>
                        <form className={classes.form}>
                            <img src="/img/logo.svg" className={classes.loginIcon}/>
                            <h4 className={classes.title}>Sign up as a Driver</h4>
                            <Grid container spacing={3} className={classes.formContainer}>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        onChange={(event => {
                                            setName(event.target.value)
                                        })}
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Car_Model"
                                        label="Car Model"
                                        name="car_model"
                                        value={carModel}
                                        onChange={(event => {
                                            setCarModel(event.target.value)
                                        })}
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="surname"
                                        label="Surname"
                                        name="surname"
                                        value={surname}
                                        autoComplete="surname"
                                        onChange={(event => {
                                            setSurname(event.target.value)
                                        })}
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Car_Plate_Number"
                                        label="Car Plate Number"
                                        name="Car_Plate_Number"
                                        value={carPlateNumber}
                                        autoComplete="Car Plate Number"
                                        onChange={(event => {
                                            setCarPlateNumber(event.target.value)
                                        })}
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(event => {
                                            setEmail(event.target.value)
                                        })}
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <FormControl variant="outlined" className={classes.formControl} required>
                                        <InputLabel>Fleet Type</InputLabel>
                                        <Select
                                            className={classes.inputs}
                                            value={fleet}
                                            onChange={(event => {
                                                setFleet(event.target.value)
                                            })}
                                            label="Country"
                                        >
                                            <MenuItem value={'captive'}>Captive</MenuItem>
                                            <MenuItem value={'freelance'}>Freelance</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        type="number"
                                        name="phone"
                                        label="Phone Number"
                                        onChange={(event => {
                                            setPhone(event.target.value)
                                        })}
                                        id="phone"
                                        className={classes.inputs}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        type="button"
                                        onClick={handleAttachClick}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="file"
                                        label={fileName}
                                        id="file"
                                        className={classes.inputs}
                                    />
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleFileChange}
                                        style={{display: 'none'}}
                                        accept="image/jpeg, .pdf"
                                    />
                                </Grid>


                                <Grid item xs={12} md={6} elevation={6} square>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel>Transport Type</InputLabel>
                                        <Select
                                            className={classes.inputs}
                                            value={transportType}
                                            onChange={(event => {
                                                setTransportType(event.target.value)
                                            })}
                                            label="City"
                                        >
                                            <MenuItem value={'1'}>Car</MenuItem>
                                            <MenuItem value={'2'}>Motor Cycle</MenuItem>
                                            <MenuItem value={'3'}>Bicycle</MenuItem>
                                            <MenuItem value={'4'}>Scooter</MenuItem>
                                            <MenuItem value={'5'}>Foot</MenuItem>
                                            <MenuItem value={'6'}>Truck</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6} elevation={6} square>
                                    <TextField
                                        type="button"
                                        onClick={handleAttachClickDriving}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="file"
                                        label={fileNameDriving}
                                        id="file"
                                        className={classes.inputs}
                                    />
                                    <input
                                        type="file"
                                        ref={hiddenFileInputDriving}
                                        onChange={handleFileChangeDriving}
                                        style={{display: 'none'}}
                                        accept="image/jpeg, .pdf"
                                    />
                                </Grid>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={agree}
                                            onChange={(event => {
                                                setAgree(!agree)
                                            })}
                                            name="agree"
                                            inputRef={divRef}
                                            color="primary"
                                            required
                                        />
                                    }
                                    label="I hereby acknowledge and agree that I have read and understood Lokaaly Privacy Policy"
                                />
                            </Grid>
                            <div className={classes.error}> {errorMsg} </div>
                            <div className={classes.submitDiv}>
                                <Button
                                    onClick={handleRegisterClick}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Send request
                                </Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paperModal}>
                    <div className={classes.checkDiv}><CheckIcon/></div>
                    <p className={classes.modalP}>Thank you for registering with Lokaaly. Your request has been
                        successfully submitted. A member
                        from
                        our team will be in touch with you shortly.</p>
                    <div className={classes.checkDiv}>
                        <Button onClick={() => {
                            history.push('/')
                        }}
                                variant='contained'
                                color='primary'
                        >OK</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
