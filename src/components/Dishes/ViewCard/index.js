import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        font: "normal normal 800 24px/32px Nunito",
        padding: 0,
        width: "300px",
        height: "417px",
        [theme.breakpoints.down("sm")]: {
            width: "213px",
            height: 'unset',
        },
        "&:nth-child(3n+1):not(:first-child)": {
            marginRight: 0,
        },
        "&:nth-child(6n+1)": {
            marginLeft: 0,
        },
        boxShadow: "0px 0px 19px #0000001F",
        "& .MuiCardHeader-action": {
            flex: "0 0",
        },
        "& .MuiCardHeader-content": {
            textAlign: "left",
        },
        "& .MuiCardHeader-root": {
            padding: "10px 16px 0 16px",
            height: "20px",
        },
        "& p": {
            margin: 6,
        },
        "& .MuiCardHeader-subheader": {
            position: "relative",
        },
    },
    media: {
        width: "150px",
        height: "150px",
        margin: "auto",
        borderRadius: "100px",
    },
    favoriteIcon: {
        backgroundColor: theme.palette.primary.main,
        width: "24px",
        height: "24px",
        "& .MuiSvgIcon-root": {
            width: "16px",
            height: "15px",
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            "& .MuiSvgIcon-root": {
                color: theme.palette.primary.main,
            },
        },
    },
    shoppingIcon: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiSvgIcon-root": {
                color: theme.palette.secondary.main,
            },
        },
        width: "28px",
        height: "28px",
        "& .MuiSvgIcon-root": {
            width: "20px",
            height: "20px",
        },
        marginTop: 5,
    },
    title: {
        color: theme.palette.secondary.dark,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        color: theme.palette.secondary.light,
        fontSize: 16,
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
    price: {
        color: theme.palette.primary.main,
        fontSize: 24,
    },
    orderButton: {
        color: theme.palette.text.main,
        borderRadius: "23px",
        padding: "8px 23px",
        margin: "auto",
        fontWeight: "700",
        backgroundColor: "#74368C"
    },
    paper: {
        position: 'absolute',
        width: 559,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        '& .MuiSvgIcon-root': {
            color: theme.palette.primary.main
        },
        '& .MuiAccordionDetails-root': {
            display: 'block',
        },
        '& .MuiAccordion-root': {
            marginTop: 20
        }
    },
    modalImg: {
        width: 150,
        height: 149,
        borderRadius: '100px',
        objectFit: 'cover',
    },
    modalImgDiv: {
        width: '50%',
        position: 'relative',
        margin: 'auto',
    },
    modalHeader: {
        display: 'flex'
    },
    prepDiv: {
        width: '100%',
        marginTop: 22,
        display: 'flex'
    },
    prepText: {
        width: 142,
        height: 22,
        textAlign: 'left',
        font: 'normal normal 600 16px/22px Nunito',
        letterSpacing: '0px',
        color: '#74368C',
    },
    prepTime: {
        marginLeft: 15,
        color: '#565656',
        letterSpacing: '0px',
        fontSize: 16,
    },
    desDiv: {
        width: '100%',
        color: '#565656',
        marginTop: 12,
    },
    optionDiv: {
        width: '100%',
        height: 42,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px 0',
        borderTop: '1px solid #E9E9E9',

    },
    priceDiv: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    }
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function ViewCard({data}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const writeTime = (time) => {
        let result = '';
        if (typeof time === 'object') {
            if (data.prepTime.day) result += data.prepTime.day + 'D ';
            if (data.prepTime.hour) result += data.prepTime.hour + 'H ';
            if (data.prepTime.minute) result += data.prepTime.minute + 'M';
        }
        return result;
    };

    const writeTimeFull = (time) => {
        let result = '';
        if (typeof time === 'object') {
            if (data.prepTime.day) result += data.prepTime.day + ' Days ';
            if (data.prepTime.hour) result += data.prepTime.hour + ' Hours ';
            if (data.prepTime.minute) result += data.prepTime.minute + ' Minutes';
        }
        return result;
    };
    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <>
                            {/*<IconButton aria-label="settings" className={classes.favoriteIcon}>*/}
                            {/*  <FavoriteIcon color="secondary" />*/}
                            {/*</IconButton>*/}
                            <IconButton aria-label="settings" className={classes.shoppingIcon}
                                        href={'dishes/edit/' + data._id}>
                                <EditIcon color="primary"/>
                            </IconButton>
                        </>
                    }
                    subheader={writeTime(data.prepTime)}
                />
                <CardMedia
                    className={classes.media}
                    image={data.images[data.images.length - 1] ? data.images[data.images.length - 1].url : ''}
                />
                <CardContent>
                    <p className={classes.title}>{data.title}</p>
                    <p className={classes.subTitle}>{data.description}</p>
                    <p className={classes.price}> {data.price} {data.currency}</p>
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        className={classes.orderButton}
                        onClick={handleOpen}
                    >
                        View More
                    </Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.modalHeader}>
                        <div className={classes.modalImgDiv}>
                            {data && data.images[0] && (
                                <img src={data.images[0].url} alt="img1" className={classes.modalImg}/>)}
                        </div>
                        <div className={classes.modalImgDiv}>
                            <p className={classes.title}>{data.title}</p>
                            <p className={classes.price}> {data.price} {data.currency}</p>
                        </div>
                    </div>
                    <div className={classes.prepDiv}>
                        <div className={classes.prepText}>Preparing the order</div>
                        <div className={classes.prepTime}>{writeTimeFull(data.prepTime)}</div>
                    </div>
                    {data.description && (<div className={classes.desDiv}>
                        {data.description}
                    </div>)}
                    {data.addons && data.addons.map((addon) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.heading}>{addon.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {addon.options && addon.options.map((option) => (
                                    <div className={classes.optionDiv}>
                                        <div>
                                            {option.name}
                                        </div>
                                        <div className={classes.priceDiv}>
                                            <span>{option.price} AED</span>
                                        </div>
                                    </div>
                                ))}

                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Modal>
        </>
    );
}
