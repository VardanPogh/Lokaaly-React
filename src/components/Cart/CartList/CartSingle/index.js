import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Link from "@material-ui/core/Link";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
        containerGrid: {
            marginTop: 50,
            textAlign: 'left',
        },
        cardDiv: { //move to component
            height: 159,
            background: '#F9F9F9',
            margin: '32px 0',
            '& .MuiGrid-item': {
                margin: 'auto',
            },
            textAlign: 'left',
            fontWeight: 'bold',
        },
        cardImage: {  //move to component
            width: 96,
            height: 95,
            borderRadius: '50%',
            objectFit: 'cover',
            marginLeft: '40px',
        },
        quantitySpan: {
            position: 'relative',
            padding: '11px',
            background: '#ffff',
            color: theme.palette.primary.main,
            boxShadow: '0px 0px 6px #00000012',
        },
        imgDiv: {
            display: 'inline-flex'
        },
        imgDivInner2: {
            margin: 'auto',
            marginLeft: 30,
        },
        customerName: {
            fontSize: 24,
            color: theme.palette.secondary.dark,
            fontWeight: 'bold',
            margin: 10,
        },
        orderNumber: {
            fontSize: 16,
            color: theme.palette.secondary.light,
            fontWeight: 'bold',
            margin: 10,
        },
        priceSpan: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.palette.primary.main,

        },
        priceDiv: {
            textAlign: 'right'
        },
        buttonGroup: {
            '& .MuiButtonBase-root': {
                backgroundColor: '#003a6d00',
                color: theme.palette.secondary.dark,
                border: 'none',
                boxShadow: 'none',
            }
        },
        editGrid: {
            textAlign: 'center',
        },
        currencySpan: {
            fontSize: '15px'
        }
    }))
;

export default function CartSingle({id, image, name, subName, quantity, price, onChangeMinus, onChangePlus, size, addons}) {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={2} className={classes.cardDiv}>
                <Grid item xs={5} sm={5} md={5} className={classes.imgDiv}>
                    <div>
                        <img
                            className={classes.cardImage}
                            src={image}/>
                    </div>
                    <div className={classes.imgDivInner2}>
                        <p className={classes.customerName}>{name}</p>
                        <p className={classes.orderNumber}>{subName}</p>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} className={classes.buttonGroup}>
                    <Fab color="primary" aria-label="add" onClick={onChangeMinus}>
                        <RemoveIcon/>
                    </Fab>
                    <span className={classes.quantitySpan}>{quantity}</span>
                    <Fab color="primary" aria-label="add" onClick={onChangePlus}>
                        <AddIcon/>
                    </Fab>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <span className={classes.priceSpan}>{price}<span className={classes.currencySpan}>AED</span></span>
                </Grid>
                <Grid item xs={1} sm={1} md={1} className={classes.priceDiv}>
                    <span className={classes.priceSpan}>Mm{size}</span>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    {addons.map((addon) => (
                            addon.options.map((item) => (
                                <div>
                                    {item.name} {' '}{addon.title} {'($'} {item.price} {')'}
                                </div>
                            ))
                        )
                    )}
                </Grid>
                <Grid item xs={1} sm={1} md={1} className={classes.editGrid}>
                    <Link href={`food_single/${id}`}>
                        <EditIcon/>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}
