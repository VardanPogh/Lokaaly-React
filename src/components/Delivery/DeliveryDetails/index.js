import React, {useEffect, useState} from 'react'
import {
    Container,
    Grid,
    makeStyles,
    TextField,
} from '@material-ui/core'
import NavBar from '../../NavBar'
import Footer1 from '../../Footer';
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import Fab from "@material-ui/core/Fab";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import {API_URL} from "../../../config";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        textAlign: 'left'
    },
    mainGrid: {
        '& .MuiGrid-item': {
            [theme.breakpoints.down("sm")]: {
                padding: '3rem',
            },
            padding: '3rem',
        },
    },
    rightGrid: {
        [theme.breakpoints.up("sm")]: {
            paddingLeft: '10rem !important',
        },
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 32,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    inputContainer: {
        '& .MuiInputBase-root': {
            borderRadius: 29,
            background: '#FBFBFB',
            boxShadow: '0px 0px 5px #0000001A',
        },
    },
    inputContainerDate: {
        '& .MuiInputBase-root': {
            borderRadius: 29,
            background: '#FBFBFB',
            boxShadow: '0px 0px 5px #0000001A',
        },
        display: 'flex',
        justifyContent: 'space-between'
    },
    month: {
        width: '37%',
    },
    day: {
        width: '30%',
    },
    year: {
        width: '30%',
    },
    assignButton: {
        background: theme.palette.primary.main,
        borderRadius: 23,
        width: 150,
        height: 46,
        marginTop: 8
    },
    fabClass: {
        background: theme.palette.text.main,
        color: theme.palette.secondary.main
    },
    userClass: {
        fontSize: 24,
        color: theme.palette.secondary.dark,
        marginLeft: 30,
    },
    iconDiv: {
        '& .MuiSvgIcon-root': {
            color: theme.palette.primary.main,
            marginRight: 20,
        },
        display: 'flex',
        margin: '21px 15px',
    }
}));


export const DeliveryDetails = ({props}) => {
    const classes = useStyles();
    const [id, setId] = useState(props.computedMatch.params.id);
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    // const [year, setYear] = useState();
    const [time, setTime] = useState();

    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [street, setStreet] = useState('');
    const [flat, setFlat] = useState('');

    const [customerFirstName, setCustomerFirstName] = useState();
    const [customerLastName, setCustomerLastName] = useState();
    const [customerAddress, setCustomerAddress] = useState();
    const [customerPhone, setCustomerPhone] = useState();
    const [customerEmail, setCustomerEmail] = useState();
    const [date, setDate] = useState();

    const history = useHistory();

    const getDeliveryDetails = () => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + 'orders/' + id, requestOptions)
            .then(async (response) => {
                const data = await response.json();
                setCustomerFirstName(data.customerId.firstName);
                setCustomerLastName(data.customerId.lastName);
                setCustomerEmail(data.customerId.email);
                data.customerId.shippingAddresses && setCustomerAddress(data.customerId.shippingAddresses[0].formatedAddress);
                data.customerId.shippingAddresses && setCustomerPhone(data.customerId.shippingAddresses[0].phoneNumber);
                setDate(data.createdAt.split('T')[0]);
                setCity(data.vendorId.city);
                setArea(data.vendorId.vendor.area);
                setStreet(data.vendorId.vendor.street);
                setFlat(data.vendorId.vendor.flat);
            })
    }

    const submitAssign = () => {
        let currentDate = new Date();
        var year = 1900 + currentDate.getYear();
        let formattedDate = year + '-' + month + '-' + day + ' ' + time + ':00';
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                orderId: id,
                pickupDate: formattedDate,
            }),
        };

        fetch(API_URL + "tookan/agents/task-assign", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                // window.location.reload();
            })


    }
    useEffect(() => {
        getDeliveryDetails();
    }, []);

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Grid item sm={4} xs={12}>
                        <p className={classes.title}>Pick up</p>
                        <div className={classes.inputContainer}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                required
                                fullWidth
                                name="city"
                                label="City"
                                type="city"
                                value={city}
                                disabled
                                onChange={(event => {
                                    setCity(event.target.value)
                                })}
                                id="city"
                                className={classes.inputs}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                id="area"
                                label="Area"
                                disabled
                                name="area"
                                autoComplete="area"
                                value={area}
                                onChange={(event => {
                                    setArea(event.target.value)
                                })}
                                className={classes.inputs}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <TextField
                                variant="outlined"
                                disabled
                                margin="dense"
                                fullWidth
                                id="street"
                                label="Street"
                                name="street"
                                autoComplete="street"
                                value={street}
                                onChange={(event => {
                                    setStreet(event.target.value)
                                })}
                                className={classes.inputs}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                disabled
                                fullWidth
                                id="flat"
                                label="Building/flat/ villa no."
                                name="flat"
                                autoComplete="flat"
                                value={flat}
                                onChange={(event => {
                                    setFlat(event.target.value)
                                })}
                                className={classes.inputs}
                            />
                        </div>
                        <div className={classes.inputContainerDate}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                name="month"
                                inputProps={{maxLength: 2}}
                                value={month}
                                label="Month"
                                onChange={(event) => {
                                    setMonth(event.target.value);
                                }}
                                className={classes.month}

                            />
                            <TextField
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                name="day"
                                value={day}
                                inputProps={{maxLength: 2}}
                                label="Day"
                                onChange={(event) => {
                                    setDay(event.target.value);
                                }}
                                className={classes.day}
                            />
                            {/*<TextField*/}
                            {/*    margin="dense"*/}
                            {/*    variant="outlined"*/}
                            {/*    fullWidth*/}
                            {/*    name="year"*/}
                            {/*    value={year}*/}
                            {/*    inputProps={{maxLength: 4}}*/}
                            {/*    label="Year"*/}
                            {/*    onChange={(event) => {*/}
                            {/*        setYear(event.target.value);*/}
                            {/*    }}*/}
                            {/*    className={classes.year}*/}
                            {/*/>*/}
                        </div>
                        <div className={classes.inputContainer}>
                            <TextField
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                name="time"
                                value={time}
                                label="Time (HH::MM)"
                                onChange={(event) => {
                                    setTime(event.target.value);
                                }}
                            />
                        </div>
                        <Button variant={'contained'} color='primary' onClick={submitAssign}
                                className={classes.assignButton}>Assign</Button>
                    </Grid>
                    <Grid item sm={5} xs={12} className={classes.rightGrid}>
                        <p className={classes.title}>Delivery</p>
                        <p>
                            <Fab className={classes.fabClass} aria-label="add">
                                <PersonIcon/>
                            </Fab>
                            <label className={classes.userClass}>{customerFirstName}{'  '}{customerLastName}</label>
                        </p>
                        <p>
                            <div className={classes.iconDiv}><MailOutlineIcon/>{customerEmail}</div>
                        </p>
                        <p>
                            <div className={classes.iconDiv}><PhoneIcon/> {customerPhone}</div>
                        </p>
                        <p>
                            <div className={classes.iconDiv}><LocationOnIcon/>{customerAddress}
                            </div>
                        </p>
                        <p>
                            <div className={classes.iconDiv}><EventIcon/>{date}</div>
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Footer1/>
        </>
    )
}
