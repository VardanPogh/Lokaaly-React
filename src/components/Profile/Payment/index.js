import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import PaymentCard from "./PaymentCard";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        '& .MuiToggleButtonGroup-grouped': {
            padding: 0,
            margin: 10,
        },
        '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: '#99CC9E',
            '& .MuiPaper-root': {
                color: '#ffffff',
            },
        },
        '& .MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        },
    },
    paymentImg: {
        width: '46px',
        height: '19px',
    }
}));

export default function PaymentButtons() {
    const classes = useStyles();

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            className={classes.root}
        >
            <ToggleButton value="left" aria-label="left aligned">
                <PaymentCard
                    image={'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg'}/>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <PaymentCard
                    image={'https://www.mastercard.ru/content/dam/mccom/global/logos/logo-mastercard-mobile.svg'}/>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <PaymentCard
                    image={'https://e7.pngegg.com/pngimages/361/976/png-clipart-new-york-giants-credit-card-visa-logo-debit-card-new-york-giants-blue-company.png'}/>
            </ToggleButton>
            <ToggleButton value="top" aria-label="top aligned">
                <PaymentCard
                    image={'https://e7.pngegg.com/pngimages/361/976/png-clipart-new-york-giants-credit-card-visa-logo-debit-card-new-york-giants-blue-company.png'}/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
