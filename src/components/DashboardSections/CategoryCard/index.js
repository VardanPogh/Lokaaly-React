import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '13px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "210px",
        height: "140px",
        margin: '16px',
        [theme.breakpoints.down("sm")]: {
            width: "140px",
            height: "168px",
        },
        '& .MuiCardActionArea-root': {
            height: '100%',
        },
        boxShadow: '0px 0px 2px #00000029',
        background: '#FBFBFB',
        '&:nth-child(5n+1):not(:first-child)': {
            marginRight: 0,
        },
        '&:nth-child(6n+1)': {
            marginLeft: 0,
        }
    },
    media: {
        width: '100%',
        height: '100%',

        [theme.breakpoints.down("sm")]: {
            width: '65px',
            height: '65px',
        },
        margin: 'auto',
        marginTop: '4px',
        // borderRadius: '50px',
    },
    title: {
        color: '#ffffff',
        fontSize: '24px',
        font: 'normal normal bold 24px/32px Nunito',
        position: 'relative',
        top: '76%',
        textAlign: 'left',
        left: '10px',
    }
}));

export default function CategoryCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{backgroundImage: 'url("' + props.image + '")'}}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {props.title}
            </Typography>
            {/*<CardActionArea>*/}
            {/*    <CardMedia*/}
            {/*        className={classes.media}*/}
            {/*        image={props.image}*/}
            {/*        title={props.title}*/}
            {/*    />*/}
            {/*    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>*/}
            {/*        {props.title}*/}
            {/*    </Typography>*/}
            {/*    <CardContent>*/}

            {/*    </CardContent>*/}
            {/*</CardActionArea>*/}
        </div>
    );
}
