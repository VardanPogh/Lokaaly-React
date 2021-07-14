import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '100px 0 56px 0',
    },
    image: {
        width: '316px',
        height: '292px',
        float: 'left',
        '& img': {
            width: '100%',
            height: '100%'
        }
    },
    profileDiv: {
        width: '800px',
    },
    profileEditDiv: {
        width: '58%',
        float: 'right',
    },
    editSection: {
        float: 'left',
        display: 'block',
        width: '100%',
    },
    editHeader: {
        float: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        '& svg': {
            top: '0.2rem',
            position: 'relative',
        }
    },
    editIconDiv: {
        float: 'right',
        color: theme.palette.secondary.light,
    },
    fullName: {
        color: theme.palette.secondary.dark,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'left',
        marginTop: '60px',
        width: '100%',
    },
    infoTable: {
        width: '100%',
        textAlign: 'left',
        borderSpacing: '0 1.5em',
    },
    infoKey: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    infoValue: {
        color: theme.palette.secondary.light,
    }
}));

export default function ProfileDetails() {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={7} md={7}>
                    <div className={classes.profileDiv}>
                        <div className={classes.image}><img src={'https://thispersondoesnotexist.com/image'}/></div>
                        <div className={classes.profileEditDiv}>
                            <div className={classes.editSection}>
                                <div className={classes.editHeader}>
                                    <PersonIcon/> <span>Profile</span>
                                </div>
                                <div className={classes.editIconDiv}><IconButton><EditIcon/></IconButton></div>
                            </div>
                            <div>
                                <p className={classes.fullName}>Full Name</p>
                                <table className={classes.infoTable}>
                                    <tr>
                                        <td className={classes.infoKey}>Username</td>
                                        <td className={classes.infoValue}>Username</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.infoKey}>Phone Number</td>
                                        <td className={classes.infoValue}>+1234567892</td>
                                    </tr>
                                    <tr>
                                        <td className={classes.infoKey}>Email</td>
                                        <td className={classes.infoValue}>name@email.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5} md={5}/>
            </Grid>
        </>
    )

}

