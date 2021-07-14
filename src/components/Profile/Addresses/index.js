import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AddressCard from "../AddressCard";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        minWidth: 275,
        '& .MuiToggleButton-root:nth-child(4n+1)': {
            marginLeft: 0
        },
        '& .MuiToggleButton-root': {
            float: 'left'
        },
        '& .MuiToggleButtonGroup-grouped': {
            padding: 0,
            margin: 10,
        },
        '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: '#99CC9E',
            '& .MuiPaper-root': {
                color: '#ffffff',
            },
            '& .MuiButton-root': {
                color: theme.palette.primary.dark
            }
        },
        '& .MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        },
    },
    closeButton: {
        color: 'red',
        paddingLeft: 0,
    }
}));

export default function Addresses() {
    const classes = useStyles();

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                className={classes.root}
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <AddressCard/>
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <AddressCard/>
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <AddressCard/>
                </ToggleButton>
                <ToggleButton value="top" aria-label="top aligned">
                    <AddressCard/>
                </ToggleButton>
                <ToggleButton value="top" aria-label="top aligned">
                    <AddressCard/>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
        ;
}
