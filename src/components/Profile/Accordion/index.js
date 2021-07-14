import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import PinDropIcon from '@material-ui/icons/PinDrop';
import PaymentIcon from '@material-ui/icons/Payment';
import Addresses from "../Addresses";
import Grid from "@material-ui/core/Grid";
import PaymentButtons from "../Payment";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiPaper-elevation1': {
            boxShadow: 'none',
        },
        '& .MuiAccordion-root': {
            position: 'unset',
        },
        '& .MuiAccordionSummary-root': {
            display: 'block',
            marginBottom: 20,
        },
        '& .MuiAccordionSummary-content': {
            float: 'left',
            margin: 0,
            flexGrow: 0,
            '& svg': {
                top: '0.3rem',
                position: 'relative',
                marginRight: 10,
                color: theme.palette.primary.main,

            }

        },
        '& .MuiAccordionSummary-expandIcon': {
            left: '23%',
            position: 'absolute',
            paddingTop: 7,
        }
    },
    expandIcon: {
        order: -1
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
    },
    addButton: {
        background: theme.palette.primary.main,
        width: '209px',
        float: 'left',
        borderRadius: '29px',
        opacity: 1,
        height: '46px',
        color: '#F0D283',
        margin: '0px 0 30px 0',
    },
}));
export default function ProfileAccordion() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'label'} className={classes.heading}><PinDropIcon/> Saved addresses
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Button className={classes.addButton}>Add New Address</Button>
                            </Grid>
                            <Addresses/>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><PaymentIcon/> Payment methods</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PaymentButtons/>
                    </AccordionDetails>
                </Accordion>
            </div>


        </>
    )

}

