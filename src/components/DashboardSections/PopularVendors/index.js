import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import PopularVendorsSingle from "../PopularVendorsSingle";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    orderP: {
        textAlign: 'left',
        color: theme.palette.primary.main,
        fontSize: '32px',
        font: 'normal normal bold 32px/43px Nunito',
        marginTop: '100px',
        marginBottom: '56px',
        textTransform: 'uppercase',
    }

}));

export default function PopularVendors() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <p className={classes.orderP}>Popular Home Chefs</p>
            <div className={classes.root}>
                <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                <PopularVendorsSingle image={'https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/1Td4w5uu0w8/1XbASVgWq8P8TsfVcddKEX.jpg'}/>
                <PopularVendorsSingle image={'https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/1Td4w5uu0w8/1XbASVgWq8P8TsfVcddKEX.jpg'}/>
                <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                <PopularVendorsSingle image={'https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/1Td4w5uu0w8/1XbASVgWq8P8TsfVcddKEX.jpg'}/>
                <PopularVendorsSingle image={'https://www.izakaya-restaurant.com/files/uploads/original/20200526_134253_munichhomebackground.jpg'}/>
                <PopularVendorsSingle image={'https://www.ahstatic.com/photos/b1j2_rsr005_00_p_1024x768.jpg'}/>
                
            </div>
        </Container>
    );
}
