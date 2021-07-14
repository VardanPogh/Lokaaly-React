import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import FavoriteDishes from "../FavoriteDishes";
import FavoriteVendors from "../FavoriteVendors";

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiBox-root': {
            padding: '24px 0'
        },
        '& .MuiTab-root': {
            paddingLeft: 0,
        }
    },
    padding: {
        padding: theme.spacing(3),
    },
    tabs: {
        '& .MuiTab-wrapper': {
            color: theme.palette.primary.main,
            fontSize: 24,
        },
        '& .MuiTabs-indicator > span': {
            backgroundColor: theme.palette.primary.main,
            maxWidth: '100%'
        }
    },
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function CustomTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    <StyledTab label="Favorite Dishes"/>
                    <StyledTab label="Favorite Vendors"/>
                </StyledTabs>
                <Typography className={classes.padding}/>
                <TabPanel value={value} index={0}>
                    <FavoriteDishes/>
                    <FavoriteDishes/>
                    <FavoriteDishes/>
                    <FavoriteDishes/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FavoriteVendors/>
                    <FavoriteVendors/>
                    <FavoriteVendors/>
                    <FavoriteVendors/>
                </TabPanel>
            </div>

        </div>
    );
}
