import {
    Accordion,
    Button,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {API_URL} from "../../../../config";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const axios = require("axios");
var FormData = require('form-data');


const useStyles = makeStyles((theme) => ({
    rootMain: {
        marginBottom: 50
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
    },
    imgAdded: {
        width: "171px",
        height: "171px",
        marginLeft: "32px",
        borderRadius: '60%',
        objectFit: 'cover',
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
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            width: "100%",
        },

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
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            width: "100%",
        },

    },
    price: {
        width: "405px",
        height: "50px",
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            width: "100%",
        },

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
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            width: "100%",
        },

        width: "405px",
        backgroundColor: "#FBFBFB",
        borderRadius: "26px!important",
    },
    priceParentDiv: {
        display: 'inline-flex',
    },
    root: {
        width: '25rem',
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
    buttonsDiv: {
        marginTop: 90
    }
}));

export const AddDish = () => {

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
    const [images, setImages] = useState();
    const [src, setSrc] = useState();
    const [crop, setCrop] = useState({});
    const [croppedImageUrl, setCroppedImageUrl] = useState();
    const [imageRef, setImageRef] = useState();
    const [finalImage, setFinalImage] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();

    const cancelClick = () => {
        setSpecType('');
        setSpecTypePrice('');
        setSelectedType('');
        setTypeAdding(false);
        setSpecification([]);
    }
    const saveClick = () => {
        const file = new File([finalImage], 'filename.jpeg', {type: 'image/jpeg', lastModified: Date.now()});
        let token = localStorage.getItem("token");
        const fileData = new FormData();
        fileData.append('categoryId', category);
        fileData.append('title', name);
        fileData.append('prepTime', JSON.stringify({day: day, hour: hour, minute: minute}));
        fileData.append('description', description);
        if (dietary) fileData.append('dietaryId', dietary);
        fileData.append('price', price);
        fileData.append('addons', JSON.stringify(specification));
        if (!finalImage) {
            fileData.append('images', files[0])
        } else {
            fileData.append('images', file)
        }

        var config = {
            method: 'post',
            url: API_URL + 'products',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*"
            },
            data: fileData
        };

        axios(config)
            .then(response => window.location.reload())
            .catch(error => console.log('error', error));
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleChangeDietary = (e) => {
        setDietary(e.target.value);
    };

    const addSpecName = () => {
        if (newSpec) {
            let spec = specification;
            spec.push({
                title: newSpec,
                selectType: isMultiple ? 'multi' : 'single',
                options: []
            });
            setSpecification(spec);
            setNewSpec('');
            setIsMultiple(false);
        }
    };

    const openSpecTypeAdding = (index) => {
        setTypeAdding(true);
        setSelectedType(index)
    }
    const addSpecType = () => {
        let specs = specification;
        let type = specs[selectedType];
        type.options.push({
            name: specType,
            price: specTypePrice
        })
        specs[selectedType] = type;
        setSpecType('');
        setSpecTypePrice('');
        setSelectedType('');
        setTypeAdding(false);
        setSpecification(specs);

    }

    const deleteSpecType = (specIndex, optionIndex) => {
        let specs = specification;
        specs[specIndex].options.splice(optionIndex, 1)
        setSpecification([...specs]);
    }

    const deleteSpecName = (event, specIndex) => {
        let specs = specification;
        specs.splice(specIndex, 1)
        setSpecification([...specs]);
    }

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
    }, []);

    const fileChangeHandler = (e) => {
        let tempFiles = [...e.target.files];
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setSrc(reader.result)
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
        <div className={classes.rootMain}>
            <div className={classes.header}>Add dish</div>
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
                        {src && (
                            <ReactCrop
                                src={src}
                                crop={crop}
                                ruleOfThirds
                                onImageLoaded={onImageLoaded}
                                onComplete={onCropComplete}
                                onChange={onCropChange}
                            />
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
                        <MenuItem value={''}>None</MenuItem>
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
                        label="Price (AED)"
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


            {/*<>*/}
            {/*    <div className={classes.specifications}>Add-ons</div>*/}
            {/*    <Grid container className={classes.gridSpecifications}>*/}
            {/*        <Grid item container direction="column">*/}
            {/*            <div className={classes.root}>*/}

            {/*                <Accordion>*/}
            {/*                    <AccordionSummary*/}
            {/*                        expandIcon={<ExpandMoreIcon/>}*/}
            {/*                        aria-controls="panel1a-content"*/}
            {/*                        id="panel1a-header"*/}
            {/*                    >*/}
            {/*                        <Typography>Add-on name</Typography>*/}
            {/*                    </AccordionSummary>*/}
            {/*                    <AccordionDetails>*/}
            {/*                        {specification.map((item, specIndex) => (*/}
            {/*                            <Accordion key={specIndex}>*/}
            {/*                                <AccordionSummary*/}
            {/*                                    expandIcon={<ExpandMoreIcon/>}*/}
            {/*                                >*/}
            {/*                                    <div className={classes.subAccord}>*/}
            {/*                                        <Typography>{item.title}</Typography>*/}
            {/*                                    </div>*/}
            {/*                                    <div className={classes.iconsDiv}>*/}
            {/*                                        <DeleteOutlineOutlinedIcon onClick={(event) => {*/}
            {/*                                            event.stopPropagation();*/}
            {/*                                            deleteSpecName(specIndex)*/}
            {/*                                        }}/>*/}
            {/*                                    </div>*/}
            {/*                                </AccordionSummary>*/}
            {/*                                <AccordionDetails>*/}
            {/*                                    {item.options && item.options.map((option, optionIndex) => (*/}
            {/*                                        <Typography key={optionIndex}>*/}
            {/*                                            <div className={classes.subSubAccord}>*/}
            {/*                                                <Typography>{option.name}</Typography>*/}
            {/*                                            </div>*/}
            {/*                                            <div className={classes.iconsDiv}>*/}
            {/*                                                <DeleteOutlineOutlinedIcon*/}
            {/*                                                    onClick={() => deleteSpecType(specIndex, optionIndex)}/>*/}
            {/*                                            </div>*/}
            {/*                                        </Typography>*/}
            {/*                                    ))}*/}
            {/*                                </AccordionDetails>*/}
            {/*                            </Accordion>*/}
            {/*                        ))}*/}
            {/*                    </AccordionDetails>*/}
            {/*                    <div className={classes.newSpecDiv}>*/}
            {/*                        <div className={classes.newSpecDivChild1}>*/}
            {/*                            <TextField*/}
            {/*                                id="New-Specification-Name"*/}
            {/*                                label="New Add-on Name"*/}
            {/*                                variant="outlined"*/}
            {/*                                value={newSpec}*/}
            {/*                                className={classes.newSpecInput}*/}
            {/*                                onChange={(event) => {*/}
            {/*                                    setNewSpec(event.target.value);*/}
            {/*                                }}*/}
            {/*                            />*/}
            {/*                            <FormGroup aria-label="position" row>*/}
            {/*                                <FormControlLabel*/}
            {/*                                    value={isMultiple}*/}
            {/*                                    control={<Checkbox color="primary"/>}*/}
            {/*                                    label="Multiple ? "*/}
            {/*                                    labelPlacement="top"*/}
            {/*                                    checked={isMultiple}*/}
            {/*                                    onChange={(event) => {*/}
            {/*                                        setIsMultiple(event.target.checked);*/}
            {/*                                    }}*/}
            {/*                                />*/}
            {/*                            </FormGroup>*/}
            {/*                        </div>*/}
            {/*                        <Fab color="primary" aria-label="add" className={classes.newSpecButton}*/}
            {/*                             onClick={addSpecName}>*/}
            {/*                            <AddIcon/>*/}
            {/*                        </Fab>*/}
            {/*                    </div>*/}

            {/*                </Accordion>*/}


            {/*                <Accordion className={classes.secondAcc} onChange={(event, expanded) => {*/}
            {/*                    if (!expanded && typeAdding) {*/}
            {/*                        setTypeAdding(!typeAdding)*/}
            {/*                    }*/}
            {/*                }}>*/}
            {/*                    <AccordionSummary*/}
            {/*                        expandIcon={<ExpandMoreIcon/>}*/}
            {/*                        aria-controls="panel1a-content"*/}
            {/*                        id="panel1a-header"*/}
            {/*                    >*/}
            {/*                        <Typography>Add-on type</Typography>*/}
            {/*                    </AccordionSummary>*/}
            {/*                    <AccordionDetails>*/}
            {/*                        {specification.map((spec, index) => (*/}
            {/*                            <div className={classes.typeDiv}>*/}
            {/*                                <div className={classes.subSubAccord}>*/}
            {/*                                    <Typography>{spec.title}</Typography>*/}
            {/*                                </div>*/}
            {/*                                <div className={classes.iconsDiv}>*/}
            {/*                                    <Fab color="primary" aria-label="add" className={classes.addButton}*/}
            {/*                                         onClick={() => openSpecTypeAdding(index)}>*/}
            {/*                                        Add*/}
            {/*                                    </Fab>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        ))}*/}
            {/*                    </AccordionDetails>*/}
            {/*                </Accordion>*/}

            {/*                {typeAdding && (<div className={classes.addType}>*/}
            {/*                        <TextField*/}
            {/*                            label="Add-on Type"*/}
            {/*                            variant="outlined"*/}
            {/*                            className={classes.typeInput}*/}
            {/*                            value={specType}*/}
            {/*                            onChange={(event) => {*/}
            {/*                                setSpecType(event.target.value)*/}
            {/*                            }}*/}
            {/*                        />*/}
            {/*                        <TextField*/}
            {/*                            label="Price"*/}
            {/*                            variant="outlined"*/}
            {/*                            className={classes.typeInputPrice}*/}
            {/*                            value={specTypePrice}*/}
            {/*                            onChange={(event) => {*/}
            {/*                                setSpecTypePrice(event.target.value)*/}
            {/*                            }}*/}
            {/*                        />*/}
            {/*                        <Fab color="primary" aria-label="add" className={classes.newSpecButton}*/}
            {/*                             onClick={addSpecType}>*/}
            {/*                            <AddIcon/>*/}
            {/*                        </Fab>*/}
            {/*                    </div>*/}
            {/*                )}*/}

            {/*                <Button color="primary" aria-label="add" className={classes.cancelButton}*/}
            {/*                        onClick={cancelClick}>*/}
            {/*                    Cancel*/}
            {/*                </Button>*/}
            {/*                <Button color="primary" aria-label="add" className={classes.saveButton}*/}
            {/*                        onClick={saveClick}>*/}
            {/*                    Save*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</>*/}
            <div className={classes.buttonsDiv}>
                <Button color="primary" aria-label="add" className={classes.cancelButton}
                        onClick={cancelClick}>
                    Cancel
                </Button>
                <Button color="primary" aria-label="add" className={classes.saveButton}
                        onClick={saveClick}>
                    Save
                </Button>
            </div>
        </div>
    )
        ;
};
