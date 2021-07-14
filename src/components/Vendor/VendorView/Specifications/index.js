import {Grid, makeStyles, TextField, Accordion} from "@material-ui/core";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from "react";
import Fab from "@material-ui/core/Fab";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
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
    heading: {
        // fontSize: theme.typography.pxToRem(15),
        // flexBasis: '33.33%',
        // flexShrink: 0,
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
    select: {
        width: "405px",
        height: "50px",
        backgroundColor: "#FBFBFB",
        borderRadius: "26px!important",
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
            padding: "12px 12px!important",
        },
        "& label": {
            display: "flex",
        },
    },
    newSpecDiv: {
        width: '100%',
        background: '#FBFBFB',
        marginBottom: 30,
        marginTop: 5,
        height: 35

    },
    newSpecP: {
        float: 'left',
        position: 'relative',
        top: '20%',
    },
    newSpecButton: {
        float: 'right',
        width: 36,
        height: 36
    },
    subAccord: {
        width: '86%'
    },
    subSubAccord: {
        width: '79%',
        float: 'left',
    },
    iconsDiv: {
        color: '#C5C5C5'
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
    }
}));

export const Specifications = () => {

    const classes = useStyles();



    return (
        <>
            <div className={classes.specifications}>Specifications</div>
            <Grid container className={classes.gridSpecifications}>
                <Grid item container direction="column">
                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Specification name</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <div className={classes.subAccord}>
                                            <Typography className={classes.heading}>Sauce</Typography>
                                        </div>
                                        <div className={classes.iconsDiv}>
                                            <EditOutlinedIcon/>
                                            <DeleteOutlineOutlinedIcon/>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div className={classes.subSubAccord}>
                                                <Typography className={classes.heading}>Sauce 1</Typography>
                                            </div>
                                            <div className={classes.iconsDiv}>
                                                <EditOutlinedIcon/>
                                                <DeleteOutlineOutlinedIcon/>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>

                        <div className={classes.newSpecDiv}>
                            <Typography className={classes.newSpecP}>New Specification Name</Typography>
                            <Fab color="primary" aria-label="add" className={classes.newSpecButton}>
                                <AddIcon/>
                            </Fab>
                        </div>


                        <Accordion className={classes.secondAcc}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Specification name</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={classes.subSubAccord}>
                                    <Typography className={classes.heading}>Cheese</Typography>
                                </div>
                                <div className={classes.iconsDiv}>
                                    <Fab color="primary" aria-label="add" className={classes.addButton}>
                                        Add
                                    </Fab>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <div className={classes.addType}>
                            <TextField id="outlined-basic" label="Specification Type" variant="outlined"
                                       className={classes.typeInput}/>
                            <TextField id="outlined-basic" label="Price" variant="outlined"
                                       className={classes.typeInputPrice}/>
                            <Fab color="primary" aria-label="add" className={classes.newSpecButton}>
                                <AddIcon/>
                            </Fab>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};
