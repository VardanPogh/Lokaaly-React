import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Container,
    Grid,
    makeStyles,
    TextField,
} from "@material-ui/core";
import NavBar from "../../NavBar";
import {Photos} from "./Photos";
import {AddDish} from "./AddDish";
import Footer1 from "../../Footer";
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {API_URL} from "../../../config";
import Modal from "@material-ui/core/Modal";
import {useHistory} from "react-router-dom";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "left",
    },
    infoContainer: {
        marginTop: "120px",
    },
    btnUpload: {
        zIndex: 90,
        width: "200px",
        height: "120px",
        padding: 0,
        // backgroundImage: ``,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'contain',
        boxShadow: "none",
    },
    btnUploadBack: {
        zIndex: 90,
        width: "100%",
        height: "180px",
        padding: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        boxShadow: "none",

    },
    divUpload: {
        zIndex: 100,
        backgroundColor: "#F5F5F5",
    },
    divUploadBack: {
        zIndex: 100,
        backgroundColor: "#F5F5F5",
        marginBottom: 30,
    },
    vendorNameDiv: {
        color: "#565656",
        fontSize: "24px",
        fontWeight: "bold",
        minWidth: "316px",
        height: "55px",
        marginTop: "12px",
        backgroundColor: "#F5F5F5",
        font: "normal normalight 16px Nunito",
        borderRadius: "23px",
        padding: '7px 0 0 25px',
        display: 'flex',
        justifyContent: 'space-between',
        textOverflow: 'ellipsis',
        overflow: 'inherit',
        whiteSpace: 'nowrap',
        '& div': {
            overflow: 'hidden',
            overflowX: 'auto',
        }
    },
    vendorEditIcon: {
        float: 'right',
        '& svg': {
            top: '-3px',
            position: 'relative',
        }
    },
    viewParentDiv: {
        width: '23%',
        marginLeft: '1rem',
    },
    divVName: {
        width: "316px",
        height: "46px",
        marginTop: "12px",
        backgroundColor: "#F5F5F5",
        font: "normal normal light 16px Nunito",
        color: "#949494",
        borderRadius: "23px",
        padding: '7px',
        '& img': {
            top: '5px',
            position: 'relative',
        }
    },
    addressDiv: {
        width: "316px",
        height: "55px",
        marginTop: "12px",
        backgroundColor: "#F5F5F5",
        font: "normal normal light 16px Nunito",
        color: "#949494",
        borderRadius: "23px",
        padding: '0.3rem 0 0 25px',
        justifyContent: 'space-between',
        textOverflow: 'ellipsis',
        overflow: 'inherit',
        whiteSpace: 'nowrap',
        '& img': {
            position: 'relative',
            top: '0.3rem',
        },
        '& div': {
            overflow: 'hidden',
            overflowX: 'auto',
        },
        display: 'flex',
    },
    divViewCustomer: {
        width: "262px",
        height: "46px",
        backgroundColor: "#74368C",
        marginTop: "12px",
        font: "normal normal bold 16px Nunito",
        color: "#F0D283",
        borderRadius: "23px",
        textTransform: "uppercase",
        padding: '0.3rem 0 0 25px',
        '& img': {
            position: 'relative',
            top: '0.3rem',
            marginRight: 5,
        },
        cursor: 'pointer'
    },
    paragraph: {
        marginTop: "16px",
        width: "100%",
        padding: "16px",
        color: "#565656",
        font: "normal normal light 16px Nunito",
    },
    divError: {
        font: "normal normal light 12px Nunito",
        color: "#FF0000",
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        verticalAlign: "middle",
    },
    inputs: {
        width: "316px",
        height: "46px",
        border: "none!important",
        "& div": {
            borderRadius: "23px",
            background: "#F5F5F5",
            border: "none!important",
            boxShadow: "0 0 10px #0000001A!important",
        },
        "& input": {
            padding: "17px 12px!important",
        },
        "& label": {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': 1, /* number of lines to show */
            '-webkit-box-orient': 'vertical',
        }
    },
    divBtns: {
        marginTop: "42px",
    },
    btns: {
        width: "96px",
        height: "46px",
        borderRadius: "23px",
        font: "normal normal light 16px Nunito",
        color: "#fff",
    },
    cancel: {
        backgroundColor: "#C5C5C5",
    },
    save: {
        marginLeft: "20px",
        backgroundColor: "#74368C",
    },
    footer: {
        marginTop: "10px"
    },
    downloadButton: {
        width: 188,
        padding: '15px 0',
        borderRadius: '39px',
        '& a': {
            textTransform: 'none',
            color: 'white',
            textDecoration: 'none',
        },
        marginTop: 20
    },
    modalClass: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    modalClassLocation: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    modalInnerDiv: {
        display: 'inline-flex'
    },
    modalInnerDivLoaction: {
        // display: 'inline-flex'
    },
    circleCheckIcon: {
        width: '2em',
        height: '2em',
        color: theme.palette.primary.main
    },
    d_none: {
        display: 'none'
    }
}));

export default function VendorView() {
    let token = localStorage.getItem("token");
    const classes = useStyles();
    const [fileName, setFileName] = useState('UPLOAD CERTIFICATES');
    const history = useHistory();

    const [file, setFile] = useState();
    const [fileImage, setFileImage] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [fillError, setFillError] = useState(false);
    const [vendor, setVendor] = useState();
    const [isEditName, setIsEditName] = useState(false);
    const [businessName, setBusinessName] = useState();
    const [open, setOpen] = React.useState(false);
    const [openLocation, setOpenLocation] = React.useState(false);
    const [country, setCountry] = useState();
    const [city, setCity] = useState();

    const [area, setArea] = useState('');
    const [street, setStreet] = useState('');
    const [flat, setFlat] = useState('');

    const hiddenFileInput = React.useRef(null);
    const hiddenFileInputImage = React.useRef(null);

    const hiddenFileInputBack = React.useRef(null);
    const hiddenFileInputImageBack = React.useRef(null);

    useEffect(() => {
        let vendorId = localStorage.getItem('vendorId');
        const resp = fetch(API_URL + "vendors/" + vendorId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            const data = await response.json();
            setVendor(data.vendor);
            setWhatsapp(data.vendor.whatsapp)
            setCity(data.city)
            setCountry(data.country)

            setArea(data.vendor.area)
            setStreet(data.vendor.street)
            setFlat(data.vendor.flat)
        })
    }, [])

    const uploadRestaurantPhotoClick = (event) => {
        hiddenFileInputImage.current.click();
    };

    const uploadRestaurantPhotoClickBack = (event) => {
        hiddenFileInputImageBack.current.click();
    };

    const handleAttachClick = () => {
        hiddenFileInput.current.click();
    }

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFileName(uploadedFile.name);
        setFile(uploadedFile);
    };

    const handleFileChangeImage = async (event) => {
        const uploadedFile = event.target.files[0];
        const body = new FormData();
        body.append("profileImage", uploadedFile)
        await fetch(API_URL + "vendors", {
            body,
            headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
            },
            method: "PUT"
        }).then(async (response) => {
            const data = await response.json();
            if (response.status === 200) {
                window.location.reload();
            } else {
                console.log('axass')
            }
        })
    };

    const handleFileChangeImageBack = async (event) => {
        const uploadedFile = event.target.files[0];
        const body = new FormData();
        body.append("backgroundImage", uploadedFile)
        await fetch(API_URL + "vendors", {
            body,
            headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
            },
            method: "PUT"
        }).then(async (response) => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                console.log('done')
            }
        })
    };

    const handleOpen = () => {
        setOpen(true);
        setBusinessName(vendor.businessName)
    };
    const handleOpenLocation = () => {
        setOpenLocation(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseLocation = () => {
        setOpenLocation(false);
    };

    const updateVendorBusinessName = () => {
        let token = localStorage.getItem("token");
        const form = new FormData();
        form.append('businessName', businessName);

        const requestOptions = {
            method: "PUT",
            url: API_URL + 'vendors',
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${token}`,
                "accept": "*/*"
            },
            data: form
        };

        axios(requestOptions)
            .then(response => window.location.reload())
            .catch(error => console.log('error', error));

    }

    const updateCountryCity = () => {
        let token = localStorage.getItem("token");
        const form = new FormData();
        form.append('city', city);
        form.append('area', area);
        form.append('street', street);
        form.append('flat', flat);
        const requestOptions = {
            method: "PUT",
            url: API_URL + 'vendors',
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${token}`,
                "accept": "*/*"
            },
            data: form
        };

        axios(requestOptions)
            .then(response => window.location.reload())
            .catch(error => console.log('error', error));

    }

    const saveSert = async () => {
        if (!file && !whatsapp) {
            setFillError(true)
        } else {
            setFillError(false);
            const body = new FormData();
            file && body.append("license", file)
            whatsapp && body.append("whatsapp", whatsapp)

            await fetch(API_URL + "vendors", {
                body,
                headers: {
                    Accept: "*/*",
                    Authorization: `Bearer ${token}`,
                },
                method: "PUT"
            }).then(async (response) => {
                const data = await response.json();
                if (response.status === 200) {
                    window.location.reload();
                } else {
                    console.log('axass')
                }
            })
        }
    }

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container className={classes.infoContainer}>
                    <Grid item sm={12}>
                        <div className={classes.divUploadBack}>
                            <input type="file" accept="image/*" className={classes.d_none}
                                   ref={hiddenFileInputImageBack}
                                   onChange={handleFileChangeImageBack}
                            />
                            {vendor && (<Button
                                onClick={uploadRestaurantPhotoClickBack}
                                className={classes.btnUploadBack}
                                style={{backgroundImage: 'url("' + vendor.backgroundImage + '")'}}
                            >
                                <img src="/img/photo_upload.svg" alt="photo_upload.svg"/>
                            </Button>)}
                        </div>
                    </Grid>
                    <div className={classes.divUpload}>
                        <input type="file" accept="image/*" className={classes.d_none} ref={hiddenFileInputImage}
                               onChange={handleFileChangeImage}
                        />
                        {vendor && (<Button
                            onClick={uploadRestaurantPhotoClick}
                            className={classes.btnUpload}
                            style={{backgroundImage: 'url("' + vendor.profileImage + '")'}}
                        >
                            <img src="/img/photo_upload.svg" alt="photo_upload.svg"/>
                        </Button>)}
                    </div>
                    <div className={classes.viewParentDiv}>
                        {vendor && !isEditName && (
                            <div className={classes.vendorNameDiv}>
                                <div>{vendor.businessName}</div>
                                <Button
                                    className={classes.vendorEditIcon}
                                    onClick={handleOpen}
                                >
                                    <EditIcon/>
                                </Button>
                            </div>)}
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <div className={classes.modalClass}>
                                {vendor && (
                                    <div className={classes.modalInnerDiv}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="businessName"
                                            label="Business Name"
                                            type="businessName"
                                            value={businessName}
                                            onChange={(event => {
                                                setBusinessName(event.target.value)
                                            })}
                                            id="businessName"
                                            className={classes.inputs}
                                        />
                                        <Button onClick={updateVendorBusinessName}><CheckCircleIcon
                                            className={classes.circleCheckIcon}/></Button>

                                    </div>)}
                            </div>
                        </Modal>
                        {/*//location modal*/}
                        <Modal
                            open={openLocation}
                            onClose={handleCloseLocation}
                        >
                            <div className={classes.modalClassLocation}>
                                {vendor && (
                                    <div>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="city"
                                            label="City"
                                            type="city"
                                            value={city}
                                            onChange={(event => {
                                                setCity(event.target.value)
                                            })}
                                            id="city"
                                            className={classes.inputs}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="area"
                                            label="Area"
                                            name="area"
                                            autoComplete="area"
                                            value={area}
                                            onChange={(event => {
                                                setArea(event.target.value)
                                            })}
                                            className={classes.inputs}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
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
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
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
                                        {/*<TextField*/}
                                        {/*    variant="outlined"*/}
                                        {/*    margin="normal"*/}
                                        {/*    required*/}
                                        {/*    fullWidth*/}
                                        {/*    name="country"*/}
                                        {/*    label="Country"*/}
                                        {/*    type="country"*/}
                                        {/*    value={country}*/}
                                        {/*    onChange={(event => {*/}
                                        {/*        setCountry(event.target.value)*/}
                                        {/*    })}*/}
                                        {/*    id="country"*/}
                                        {/*    className={classes.inputs}*/}
                                        {/*/>*/}
                                        <Button onClick={updateCountryCity}>
                                            <Button
                                                variant="contained"
                                                color='primary'
                                            >
                                                Save
                                            </Button>
                                        </Button>

                                    </div>)}
                            </div>
                        </Modal>
                        <div className={classes.addressDiv}>
                            {vendor && (<>
                                    <div>
                                        <img src="/img/location_on-24px.svg" alt="location"/>
                                        {city} {vendor.area} {'  '} {vendor.flat} {'  '} {vendor.street}
                                    </div>
                                    <Button
                                        className={classes.vendorEditIcon}
                                        onClick={handleOpenLocation}
                                    >
                                        <EditIcon/>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    {/*<div className={classes.divViewCustomer} onClick={() => {*/}
                    {/*    history.push('/vendor');*/}
                    {/*}}>*/}
                    {/*    <img src="/img/visibility-24px.svg" alt="location"/>*/}
                    {/*    View as customer*/}
                    {/*</div>*/}


                </Grid>

                {vendor && vendor.license && (<Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.downloadButton}
                >
                    <a href={vendor.license}
                       download>
                        View License
                    </a>
                </Button>)}
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
                        accept=".pdf,image/*"
                    />
                </Grid>
                <div className={classes.inputContainer}>
                    {vendor && (<TextField
                        margin="dense"
                        variant="outlined"
                        required
                        fullWidth
                        name="whatsapp"
                        label="Add Whatsapp Number"
                        onChange={(event) => {
                            setWhatsapp(event.target.value);
                        }}
                        value={whatsapp || ''}
                        id="whatsapp"
                        className={classes.inputs}
                    />)}
                </div>

                {fillError && (<div className={classes.divError}>Please, fill the required field.</div>)}
                <div className={classes.divBtns}>
                    <Button
                        onClick={() => {
                            setFile(null);
                            setFileName('UPLOAD CERTIFICATES');
                            setWhatsapp('');
                            setFillError(false)
                        }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={`${classes.btns} ${classes.cancel}`}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={saveSert}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={`${classes.btns} ${classes.save}`}
                    >
                        Save
                    </Button>
                </div>
                {/*<Photos/>*/}
                <AddDish/>
            </Container>
            <Footer1/>
        </>
    );
}
