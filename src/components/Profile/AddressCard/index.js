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
        height: '188px',
        background: 'none',
        border: 'none',
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
    innerText: {
        width: '191px',
        textAlign: 'left',
    }
}));

export default function AddressCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                action={
                    <>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                        <IconButton className={classes.closeButton}>
                            <CloseIcon/>
                        </IconButton>
                    </>
                }
            />
            <CardContent>
                <Typography variant="body2" className={classes.innerText}>
                    9284 Grand Street Wethersfield, CT 06109
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.setButton}>Set as primary address</Button>
            </CardActions>
        </Card>
    );
}
