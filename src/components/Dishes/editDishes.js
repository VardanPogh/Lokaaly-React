import {
    Accordion,
    Button, Container,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {API_URL} from "../../config";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import {useHistory} from "react-router-dom";

const axios = require("axios");


const useStyles = makeStyles((theme) => ({
    buttonsDiv: {
        marginTop: 90
    },
    header: {
        font: "normal normal bold 32px Nunito",
        color: "#74368C",
        marginTop: "130px",
        textTransform: "uppercase",
    },
    addPhoto: {
        width: "150px",
        height: "150px",
        display: "flex",
        borderRadius: "75px",
        backgroundColor: "#F5F5F5",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#B4B4B4",
    },
    imgAdd: {
        width: "32px",
        height: "32px",
    },
    divAddImg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "40px",
        width: '405px',
        margin: 'auto'
    },
    imgAdded: {
        width: '185px',
        height: '153px',
        objectFit: 'cover',
        left: '54px',
        position: 'relative',
    },
    divAdded: {
        display: "flex",
        flexDirection: "column",
        height: "174px",
        alignItems: "flex-end",
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        verticalAlign: "middle",
    },
    prepDiv: {
        display: 'flex'
    },
    inputs: {
        width: "405px",
        height: "46px",
        border: "none!important",
        "& div": {
            borderRadius: "23px",
            background: "#F5F5F5",
            border: "none!important",
            boxShadow: "0 0 10px #0000001A!important",
        },
        "& input": {
            padding: "12px 12px!important",
        },
        "& label": {
            display: "flex",
        },
    },
    select: {
        width: "405px",
        height: "50px",
        backgroundColor: "#FBFBFB",
        borderRadius: "26px!important",
    },
    price: {
        width: "405px",
        height: "50px",
    },
    prepare: {
        color: "#565656",
        font: "normal normal regular 16px Nunito",
        alignSelf: 'center',
        marginLeft: '10px',
        marginRight: '10px'
    },
    date: {
        width: "84px",
        height: "50px",
        backgroundColor: "#FBFBFB",
        borderRadius: "26px!important",
    },
    description: {
        width: "405px",
        backgroundColor: "#FBFBFB",
        borderRadius: "26px!important",
    },
    priceParentDiv: {
        display: 'inline-flex',
    },
    root: {
        width: '25rem',
        margin: 'auto',

        '& .MuiAccordionDetails-root': {
            padding: '8px 0 0',
            display: 'block',
        },
        '& .MuiPaper-elevation1': {
            boxShadow: 'none',
        },
        '& .MuiAccordionSummary-root': {
            padding: 0,
            borderBottom: '2px solid #E9E9E9',
        },
        '& .MuiAccordion-root:before': {
            display: 'none'
        }
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    specifications: {
        marginTop: "120px",
        color: "#565656",
        font: "normal normal  24px Nunito",
    },
    gridSpecifications: {
        marginTop: "67px",
    },
    specificationType: {
        width: "207px",
    },
    price1: {
        width: "109px"
    },
    add: {
        borderRadius: "23px",
        background: "#F5F5F5",
        width: "51px",
        height: "51px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    newSpecDiv: {
        width: '100%',
        background: '#FBFBFB',
        marginBottom: 30,
        marginTop: 5,
        height: 75,
        display: 'flex',
        justifyContent: 'space-around',
    },
    newSpecP: {
        float: 'left',
        position: 'relative',
        top: '20%',
    },
    newSpecButton: {
        float: 'right',
        width: 36,
        height: 36,
        position: 'relative',
        top: '0.8rem',

    },
    subAccord: {
        width: '86%'
    },
    subSubAccord: {
        width: '79%',
        float: 'left',
    },
    iconsDiv: {
        color: '#C5C5C5',
        '& svg:hover': {
            color: '#ff0048'
        },
        cursor: 'pointer'
    },
    addButton: {
        width: 47,
        height: 26,
        borderRadius: 23,
        float: 'right',
        '& span': {
            textTransform: 'capitalize',
            fontSize: 9
        }
    },
    secondAcc: {
        marginTop: 20,
        marginBottom: 30
    },
    addType: {
        width: '100%',
        height: 101,
        background: '#FBFBFB',
        '& button': {
            position: 'relative',
            top: '32%',
        }
    },
    typeInput: {
        width: 180,
        height: 51,
        '& .MuiOutlinedInput-root': {
            borderRadius: '26px',
        },
        position: 'relative',
        top: '23%',
    },
    typeInputPrice: {
        width: 80,
        height: 51,
        '& .MuiOutlinedInput-root': {
            borderRadius: '26px',
        },
        marginLeft: 18,
        position: 'relative',
        top: '23%',
    },
    newSpecInput: {
        '& .MuiInputBase-root': {
            borderRadius: '48px',
        },
        position: 'relative',
        top: '6px',
    },
    newSpecDivChild1: {
        display: 'inline-flex',
    },
    typeDiv: {
        marginBottom: 10,
        height: 42
    },
    cancelButton: {
        background: theme.palette.secondary.light,
        color: 'white',
        borderRadius: 23,
        padding: 12,
        width: 96,
        height: 46,
        '&:hover': {
            background: theme.palette.secondary.dark,
        }

    },
    saveButton: {
        background: theme.palette.primary.main,
        color: 'white',
        borderRadius: 23,
        width: 96,
        height: 46,
        '&:hover': {
            background: theme.palette.primary.dark,
        },
        marginLeft: 30
    },
    disableButton: {
        background: 'red',
        color: 'white',
        borderRadius: 23,
        width: 96,
        height: 46,
        '&:hover': {
            background: theme.palette.primary.dark,
        },
        marginLeft: 30
    }
}));

export function EditDish({props}) {

    const history = useHistory();

    const classes = useStyles();
    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [newSpec, setNewSpec] = useState('');
    const [isMultiple, setIsMultiple] = useState(false);
    const [typeAdding, setTypeAdding] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [category, setCategory] = useState("");
    const [dietary, setDietary] = useState("");
    const [dietaries, setDietaries] = useState([]);
    const [specType, setSpecType] = useState("");
    const [specTypePrice, setSpecTypePrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [specification, setSpecification] = useState([]);
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState();
    const [images, setImages] = useState();
    const [src, setSrc] = useState();
    const [crop, setCrop] = useState({});
    const [croppedImageUrl, setCroppedImageUrl] = useState();
    const [imageRef, setImageRef] = useState();
    const [finalImage, setFinalImage] = useState();
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');


    const cancelClick = () => {
        setSpecType('');
        setSpecTypePrice('');
        setSelectedType('');
        setTypeAdding(false);
        setSpecification([]);
    }

    const saveClick = () => {
        let temp = new File([finalImage], 'filename.jpeg', {type: 'image/jpeg', lastModified: Date.now()});
        setFile(temp);

        // console.log('files 0 ', files[0]);
        // return;
        let token = localStorage.getItem("token");
        const {id} = props.computedMatch.params;
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        let formdata = new FormData();
        formdata.append("productId", id);
        formdata.append("price", price);
        formdata.append('categoryId', category);
        formdata.append('title', name);
        formdata.append('prepTime', JSON.stringify({day: day, hour: hour, minute: minute}));
        formdata.append('description', description);
        formdata.append('dietaryType', dietary);
        if (files[0]) {
            if (!finalImage) {
                formdata.append('$pushImages', files[0])
            } else {
                formdata.append('$pushImages', temp)
            }
        }
        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(API_URL + "products", requestOptions)
            .then(response => response.text())
            .then(result => window.location.reload())
            .catch(error => console.log('error', error));

    }

    const disableClick = async () => {
        let token = localStorage.getItem("token");
        const {id} = props.computedMatch.params;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": 'Barear ' + token,

            },
            body: JSON.stringify({
                productId: id,
                active: false,
            }),
        };
        await fetch(
            API_URL + "products",
            requestOptions
        ).then(async (response) => {
            history.push('/dishes');
        }).catch(error => console.log('error', error));
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleChangeDietary = (e) => {
        setDietary(e.target.value);
    };

    const getCategories = () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(API_URL + "static/categories", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    setCategories(data);
                } else {
                    console.log('error ', data)
                }
            })
    }
    const getDietaryTypes = () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(API_URL + "static/dietaries", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    setDietaries(data);
                } else {
                    console.log('error ', data)
                }
            })
    }

    useEffect(() => {
        getCategories();
        getDietaryTypes();
        const {id} = props.computedMatch.params;
        getProductById(id);
    }, []);


    const getProductById = (id) => {

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(API_URL + "products/" + id, requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    setName(data.title);
                    setCategory(data.categoryId);
                    setDietary(data.dietaryId);
                    setPrice(data.price);
                    setDay(data.prepTime.day);
                    setHour(data.prepTime.hour);
                    setMinute(data.prepTime.minute);
                    setDescription(data.description);
                    setSrc(data.images[data.images.length - 1].url);
                    const tempFile = new File([data.images[data.images.length - 1].url], 'filename.jpeg', {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    setFile(tempFile);

                    console.log(URL.createObjectURL(tempFile));


                } else {
                    console.log('error ', data)
                }
            })
    }


    const fileChangeHandler = (e) => {
        let tempFiles = [...e.target.files];
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                    setSrc(reader.result);
                    console.log(reader.result)
                }
            );
            reader.readAsDataURL(e.target.files[0]);
        }

        setFiles(tempFiles);
        const tempImages = tempFiles.map((file) => {
            return (
                <Grid item sm={6}>
                    <div className={classes.divAdded}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt="dishExample"
                            className={classes.imgAdded}
                        />
                    </div>
                </Grid>
            )
        });
        setImages(tempImages);
    }


    // If you setState the crop in here you should return false.
    const onImageLoaded = (image) => {
        setImageRef(image);
    };

    const onCropComplete = () => {
        makeClientCrop();
    };

    const onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        setCrop(crop);
    };

    const makeClientCrop = async () => {
        if (imageRef && crop.width && crop.height) {
            const croppedImageUrl1 = await getCroppedImg(
                imageRef,
                crop,
                "newFile.jpeg"
            );
            setCroppedImageUrl(croppedImageUrl1);
        }
    }

    function getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error("Canvas is empty");
                    return;
                }
                blob.name = fileName;
                let fileUrl;
                window.URL.revokeObjectURL(fileUrl);
                fileUrl = window.URL.createObjectURL(blob);
                setFinalImage(blob);
                resolve(fileUrl)
            }, "image/jpeg");
        });
    }

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" className={classes.favoriteContainer}>
                <div className={classes.header}>Edit dish</div>
                <div className={classes.divAddImg}>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <Button className={classes.addPhoto} component="label">
                                <img
                                    src="/img/add_photo_alternate-24px.svg"
                                    alt="NoImage"
                                    className={classes.imgAdd}
                                />
                                <input
                                    type="file"
                                    accept='image/*'
                                    onChange={(event) => fileChangeHandler(event)}
                                    hidden
                                />
                            </Button>

                        </Grid>
                        <Grid item sm={6}>
                            {files.length > 0 && src && (
                                <ReactCrop
                                    src={src}
                                    crop={crop}
                                    ruleOfThirds
                                    onImageLoaded={onImageLoaded}
                                    onComplete={onCropComplete}
                                    onChange={onCropChange}
                                />
                            )}
                            {files.length == 0 && (
                                <Grid item sm={6}>
                                    <div className={classes.divAdded}>
                                        <img
                                            src={src}
                                            alt="dishExample"
                                            className={classes.imgAdded}
                                        />
                                    </div>
                                </Grid>
                            )}

                            <Grid item sm={6}>
                                {croppedImageUrl && (
                                    <img alt="Crop" style={{maxWidth: "100%"}} src={croppedImageUrl}/>
                                )}
                            </Grid>
                        </Grid>
                        {/*{images}*/}
                    </Grid>
                </div>
                <div className={classes.inputContainer}>
                    <TextField
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        name="name"
                        label="Dish Name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        id="name"
                        className={classes.inputs}
                    />
                </div>
                <FormControl variant="filled" className={classes.select}>
                    <InputLabel id="demo-simple-select-filled-label">
                        Choose Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        disableUnderline
                        value={category}
                        onChange={handleChangeCategory}
                        className={classes.select}
                    >
                        {categories && categories.map((category, index) => (
                            <MenuItem value={category._id} key={index}>{category.name}</MenuItem>))}
                    </Select>
                </FormControl>
                <div>
                    <FormControl variant="filled" className={classes.select}>
                        <InputLabel id="demo-simple-select-filled-label">
                            Dietary Type (optional)
                        </InputLabel>
                        <Select
                            labelId="Dietary"
                            disableUnderline
                            value={dietary}
                            onChange={handleChangeDietary}
                            className={classes.select}
                        >
                            {dietaries && dietaries.map((dietary, index) => (
                                <MenuItem value={dietary._id}>{dietary.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.priceParentDiv}>
                    <div className={classes.inputContainer}>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            name="price"
                            value={price}
                            label="Price"
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                            id="price"
                            className={`${classes.inputs} ${classes.price}`}
                        />
                        <div className={classes.prepDiv}>
                            <div className={classes.prepare}>Preparing the order</div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    name="day"
                                    value={day}
                                    label="Day"
                                    onChange={(event) => {
                                        setDay(event.target.value);
                                    }}
                                    id="day"
                                    className={`${classes.inputs} ${classes.date}`}
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    name="hour"
                                    value={hour}
                                    label="Hour"
                                    onChange={(event) => {
                                        setHour(event.target.value);
                                    }}
                                    id="hour"
                                    className={`${classes.inputs} ${classes.date}`}
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    name="minute"
                                    value={minute}
                                    label="Minute"
                                    onChange={(event) => {
                                        setMinute(event.target.value);
                                    }}
                                    id="minute"
                                    className={`${classes.inputs} ${classes.date}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={classes.inputContainer}
                    style={{height: "auto!important"}}
                >
                    <TextField
                        margin="dense"
                        multiline
                        rows={5}
                        variant="outlined"
                        fullWidth
                        name="description"
                        value={description}
                        label="Short Description"
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        id="description"
                        className={`${classes.inputs} ${classes.description}`}
                    />
                </div>
                <div className={classes.buttonsDiv}>
                    <Button color="primary" aria-label="add" className={classes.cancelButton}
                            onClick={cancelClick}>
                        Cancel
                    </Button>
                    <Button color="primary" aria-label="add" className={classes.saveButton}
                            onClick={saveClick}>
                        Save
                    </Button>
                    <Button color="primary" aria-label="add" className={classes.disableButton}
                            onClick={disableClick}>
                        Disable
                    </Button>
                </div>
            </Container>
            <Footer1/>
        </>
    )

};
