import React, {useEffect, useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Hidden
} from "@material-ui/core";
import AppSection from "../DashboardSections/AppSection";
import TopDishes from "./TopDishes";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import {API_URL} from "../../config";

const GreenCheckbox = withStyles({
    root: {
        color: "#929292",
        "&$checked": {
            color: "#99CC9E",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: "100px",

    },
    mainImage: {
        width: '628px',
        height: '490px',
    },
    p1: {
        fontSize: "24px",
        color: "#565656",
    },
    div_price: {
        color: "#74368C",
        fontSize: "24px",
        marginTop: "15px",
    },
    paragraph: {
        textAlign: "left",
        marginTop: "25px",
    },
    div_chooseDate: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#565656",
        marginTop: "32px",
    },
    btns_choose_date: {
        backgroundColor: "#99CC9E",
    },
    div_quantity: {
        marginTop: "40px",
        color: "#565656",
    },
    div_choose_btns: {
        marginTop: "16px",
    },
    div_sauce: {
        marginTop: "40px",
        color: "#565656",
        fontSize: "16px",
        fontWeight: "bold",
    },
    div_customize: {
        marginTop: "33px",
        fontSize: "16px",
        color: "#565656",
        fontWeight: "bold",
    },
    text_area: {
        marginTop: "35px",
        fontSize: "16px",
        fontFamily: "Nunito",
        fontWeight: "300",
    },
    btn_favorites: {
        width: "200px",
        height: "46px",
        color: "#74368C",
        border: "1px solid #74368C",
        borderRadius: "20px",
        marginLeft: "40px",
        marginTop: "30px",
    },
    btns_order: {
        backgroundColor: "#74368C",
        width: "160px",
        height: "46px",
        color: "#F0D283",
        fontSize: "16px",
        borderRadius: "20px",
        fontWeight: "700"
    },
    btns_bottom: {
        marginTop: "40px",
    },

}));

export default function FoodSinglePage(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const [productId, setProductId] = useState(0)
    const [product, setProduct] = useState([])

    useEffect(() => {
        const {id} = props.match.params;
        setProductId(id);
        getProductFromId(id)
    }, []);

    const getProductFromId = (id) => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + "cart/" + id, requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    console.log('data ', data);
                    setProduct(data);
                } else {
                    console.log('error ', data)
                }
            })
    }

    function isInArray(addonId, optionId) {
        const {addons} = product;
        const addon = addons.find(x => x._id == addonId);
        let addonIndex;
        if (addon.options) {
            addonIndex = addon.options.indexOf(optionId)
        }
        return addonIndex !== -1;
    }

    const handleChange = (addonId, optionId) => {
        let inArray = isInArray(addonId, optionId);
        if (inArray){
            const {addons} = product;
            const addon = addons.find(x => x._id == addonId);
            console.log('init ',addon);
            let addonIndex;
            addonIndex = addon.options.indexOf(optionId);
            delete addon.options[addonIndex];
            console.log('second ',addon);


        }


    };

    return (
        <>
            <NavBar/>
            {product.productInfo && (<Container maxWidth="lg">
                    <Grid container direction="row" className={classes.main}>
                        <Hidden mdDown>
                            <Grid item sm={6} container direction="column">
                                <img src={product.productInfo.images[0].url} alt="restaurant"
                                     className={classes.mainImage}/>
                                <Button className={classes.btn_favorites}>
                                    <img src="/img/favorite-24px.svg" alt="favorite"/>
                                    Add to favorites
                                </Button>
                            </Grid>
                        </Hidden>

                        <Grid
                            item
                            sm={6}
                            container
                            direction="column"
                            alignItems="flex-start"
                        >
                            <div className={classes.p1}>{product.productInfo.title}</div>
                            <div className={classes.div_price}>{product.productInfo.price} AED</div>
                            <p className={classes.paragraph}>
                                {product.productInfo.description}
                            </p>
                            <Grid
                                container
                                alignItems="center"
                                className={classes.div_quantity}
                            >
                                <span>Quantity</span>
                                <Button>-</Button>
                                <span>3</span>
                                <Button>+</Button>
                                <span>Choose size</span>
                                <Button>S</Button>
                                <Button>M</Button>
                                <Button>L</Button>
                            </Grid>
                            <div className={classes.div_customize}>Customize/ Add Ons</div>

                            <Grid container>
                                {product.productInfo.addons && (
                                    product.productInfo.addons.map((addon) => (
                                        <Grid item sm={4} container direction="column">
                                            <div className={classes.div_customize}>{addon.title}</div>
                                            {addon.options.map((option) => (
                                                <FormControlLabel
                                                    control={
                                                        <GreenCheckbox
                                                            checked={isInArray(addon._id, option._id)}
                                                            onChange={() => handleChange(addon._id, option._id)}
                                                            value={option._id}
                                                        />
                                                    }
                                                    label={option.name}
                                                />
                                            ))}
                                            {/*<FormControlLabel*/}
                                            {/*    control={*/}
                                            {/*        <GreenCheckbox*/}
                                            {/*            checked={state.checkedG}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="checkedG"*/}
                                            {/*        />*/}
                                            {/*    }*/}
                                            {/*    label="Strawberry"*/}
                                            {/*/>*/}
                                            {/*<FormControlLabel*/}
                                            {/*    control={*/}
                                            {/*        <GreenCheckbox*/}
                                            {/*            checked={state.checkedG}*/}
                                            {/*            onChange={handleChange}*/}
                                            {/*            name="checkedG"*/}
                                            {/*        />*/}
                                            {/*    }*/}
                                            {/*    label="Cherry"*/}
                                            {/*/>*/}
                                        </Grid>
                                    ))
                                )}
                            </Grid>
                            <Grid container>
            <textarea
                className={classes.text_area}
                rows="6"
                style={{width: "100%", resize: "none"}}
                placeholder="Your text here"

            />
                            </Grid>

                            <Grid container wrap="nowrap" className={classes.btns_bottom}>
                                <Button className={classes.btns_order}>ORDER NOW</Button>
                                <Button
                                    className={classes.btns_order}
                                    style={{marginLeft: "25px"}}
                                >
                                    ADD TO CART
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )}
            <AppSection/>
            <TopDishes/>
            <Footer1/>
        </>
    );
}
