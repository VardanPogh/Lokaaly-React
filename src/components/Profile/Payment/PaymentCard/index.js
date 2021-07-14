import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '316px',
        height: '128px',
        background: 'none',
        border: 'none',
        color: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            display: 'inline-flex',
            paddingTop: 0,
        },
        '& .MuiCardHeader-root': {
            padding: 10,
            paddingBottom: 0,
        },
        '& .MuiCardActions-root': {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    closeButton: {
        color: 'red',
        paddingLeft: 0,
    },
    setButton: {
        fontSize: 12,
        '& span': {
            textTransform: 'initial',
        },
    },
    cardNumber: {
        width: '191px',
        textAlign: 'left',
        marginLeft: 15,
        margin: "auto",
    },
    cardImage: {
        width: '48px',
        height: '37px',
        float: 'left'
    },
    cardImageDiv: {
        width: '48px',
        height: '37px',
    },
    cardType: {
        width: '70%',
        top: '-20px',
        position: 'relative',
    }
}));

export default function PaymentCard({image}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                action={
                    <IconButton className={classes.closeButton}>
                        <CloseIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <div className={classes.cardImageDiv}>
                    <img src={image}
                         className={classes.cardImage}/>
                </div>
                <Typography variant="body2" className={classes.cardNumber}>
                    **** **** **** 4578
                </Typography>

            </CardContent>
            <Typography variant="body2" className={classes.cardType}>
                Amex
            </Typography>
        </Card>
    );
}
