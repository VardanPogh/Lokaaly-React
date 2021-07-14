import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
        font: 'normal normal 800 24px/32px Nunito',
        width: '316px',
        height: '478px',
        margin: '16px',
        boxShadow: 'none',
        textAlign: 'left',
        '@media (max-width: 730px)': {
            width: '38%',
            height: 348,
            '& .MuiCardMedia-root': {
                height: '55%',
            },
            '&:nth-child(4n):not(:first-child)': {
                marginRight: '16px !important',
            },
            '&:nth-child(4n+1)': {
                marginLeft: '16px !important',
            },
        },
        '&:nth-child(4n):not(:first-child)': {
            marginRight: 0,
        },
        '&:nth-child(4n+1)': {
            marginLeft: 0,
        },
        '& .MuiCardHeader-action': {
            flex: '0 0',
        },
        '& .MuiCardHeader-content': {
            textAlign: 'left'
        },
        '& .MuiCardHeader-root': {
            padding: '10px 16px 0 16px',
            height: '20px',
        },
        '& p': {
            margin: 6,
        },
        '& .MuiCardHeader-subheader': {
            position: 'relative',
        }
    },
    media: {
        width: '316px',
        height: '365px',
        margin: 'auto',
        borderRadius: '5px',
    },
    title: {
        color: theme.palette.hint.main,
        fontSize: 24,
        '@media (max-width: 730px)': {
            fontSize: 18,
        }
    },
    subTitle: {
        color: theme.palette.secondary.light,
        fontSize: 16,
        '@media (max-width: 730px)': {
            fontSize: 14,
        },
        font: 'normal normal 300 16px/15px Nunito',
        '& svg': {
            position: 'relative',
            top: '0.3em',
            marginRight: '0.5em',
        }
    },
    price: {
        color: theme.palette.primary.main,
        fontSize: 24,
    },
    orderButton: {
        color: theme.palette.text.main,
        borderRadius: '23px',
        padding: '8px 23px',
        margin: 'auto'
    },
    content: {
        paddingLeft: 0,

    }

}));

export default function PopularVendorsSingle(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} component={Link} to="/vendor">
            <CardMedia
                className={classes.media}
                image={props.image}
                title="Paella dish"
            />
            <CardContent className={classes.content}>
                <p className={classes.title}>Lorem ipsum</p>
                <p className={classes.subTitle}><LocationOnIcon/><label>Calgary, AB, Canada</label></p>
            </CardContent>
            {/* <CardActions>
                <Button
                    variant="contained"
                    color="primary"      
                    className={classes.orderButton}
                >
                    Order now
                </Button>
            </CardActions> */}
        </Card>
    );
}
