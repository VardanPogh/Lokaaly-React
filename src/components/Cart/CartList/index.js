import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import faker from "faker";
import CartSingle from "./CartSingle";
import NavBar from "../../NavBar";
import Container from "@material-ui/core/Container";
import Footer1 from "../../Footer";
import {API_URL} from "../../../config";

// function createGeoJson() {
//     const quantity = (faker.random.number() % 4) + 1;
//     const features = [];
//     let x = 0;
//     while (x < quantity) {
//         features.push({
//             id: faker.random.uuid(),
//             price: 100,
//         });
//         x += 1;
//     }
//     return features;
// }
//
// function createSubscriptions() {
//     const quantity = (faker.random.number() % 4) + 1;
//     const subscriptions = [];
//     let x = 0;
//     while (x < quantity) {
//         subscriptions.push({
//             id: faker.random.uuid(),
//             features: createGeoJson()
//         });
//         x += 1;
//     }
//     return subscriptions;
// }
//
// const ORDERS = {
//     subscriptions: createSubscriptions()
// };

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing(9)
    },
    button: {
        marginRight: theme.spacing(2),
        width: 120
    },
    rightIcons: {
        marginRight: "-12px"
    },
    headerLabel: {
        color: theme.palette.secondary.dark,
        fontSize: 24,
        fontWeight: 'bold',
        top: '10px',
        position: 'relative',
        margin: '50px 0'

    },
    subHeaderLabel: {
        fontSize: 16,
        color: theme.palette.secondary.light
    },
    filterDiv: {
        margin: '60px 0',
        float: 'left',
        textAlign: 'left',
    },

});

export class CartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            totalPrice: 0,
        };
        this.getCartInfo = this.getCartInfo.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.countAddonsPrice = this.countAddonsPrice.bind(this);
    }

    componentDidMount() {
        this.getCartInfo();
    }

    countAddonsPrice(addons) {
        let price = 0;
        if (addons.length > 0) {
            addons.forEach(addon => {
                if (addon.options.length > 0) {
                    addon.options.forEach(item => {
                        price += item.price * 1
                    })
                }
            });
        }
        console.log(price);
        return price;
    }

    getCartInfo = () => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + "cart", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    console.log('data ', data);
                    this.setState({
                        orders: data,
                    })
                } else {
                    console.log('error ', data)
                }
            })
    }


    /**
     * @param id - the id of the parent list item of the child who was selected
     * @param parentIndex - the index of the parent list item of the child who was selected
     * @param childId - the id of the child list item who's checkbox was selected
     * @param childIndex - the index of the child list item who's checkbox was selected
     */

    changeQuantity = (id, parentIndex, childId, childIndex, plusMinus) => {
        const orders = this.state.orders;
        const order = orders[parentIndex];
        const features = order.cart;

        if (plusMinus === 'plus' || features[childIndex].quantity != 1) {
            const feature = {
                ...features[childIndex],
                quantity: plusMinus === 'minus' ? --features[childIndex].quantity : ++features[childIndex].quantity
            };
            features[childIndex] = feature;

            const modifiedOrder = {
                ...order,
                cart: features
            };
            orders[parentIndex] = modifiedOrder;
            this.setState({
                orders: orders
            });

        }
    }

    handleCheckClick = (id, parentIndex, childId, childIndex) => {
        console.log(childIndex);
        if (typeof childIndex !== "undefined" && typeof childId !== "undefined") {

            const orders = this.state.orders;
            const order = orders[parentIndex];
            const features = order.cart;
            const feature = {
                ...features[childIndex],
                checked: !features[childIndex].checked
            };

            features[childIndex] = feature;
            let checkedCount = 0;
            features.forEach(feature => feature.checked && checkedCount++);

            if (checkedCount > 0) {
                const modifiedOrder = {
                    ...order,
                    checked: true,
                    cart: features
                };
                orders[parentIndex] = modifiedOrder;
                this.setState({
                    orders: orders
                });
            } else {
                const modifiedOrder = {
                    ...order,
                    checked: false,
                    cart: features
                };
                orders[parentIndex] = modifiedOrder;
                this.setState({
                    orders: orders
                });
            }

            let total = 0;
            orders.filter(item => item._id === id)[0].cart.forEach(feature => {
                if (feature.checked) {
                    total += feature.productInfo.price * 1;
                }
            });
            this.setState({
                totalPrice: total,
            })
        } else {                            //clicked on vendor
            const newOrders = this.state.orders.map(subs => ({
                ...subs,
                checked: subs._id === id && !subs.checked,
                cart: subs.cart.map(feature => ({
                    ...feature,
                    checked: subs._id === id && !subs.checked,
                    disabled: subs._id !== id
                }))
            }));
            console.log(newOrders);

            let total = 0;
            newOrders.filter(item => item._id === id)[0].cart.forEach(feature => {
                if (feature.checked) {
                    total += feature.productInfo.price * 1;
                }
            });
            this.setState({
                totalPrice: total,
            })

            this.setState({
                orders: newOrders
            });
        }
    };

    render() {
        const {orders} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <NavBar/>
                <Container maxWidth="lg">
                    <div className={classes.filterDiv}>
                        <p className={classes.headerLabel}>My Shopping Cart</p>
                        <p className={classes.subHeaderLabel}>Total 5 items</p>
                    </div>
                    <Grid container spacing={2} className={classes.containerGrid}>
                        <Grid item xs={6} sm={6} md={6}/>
                        <Grid item xs={1} sm={1} md={1}>
                            Quantity
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            Price
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            Size
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            Addons
                        </Grid>
                        <Grid item xs={2} sm={2} md={2}>

                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <List component="nav">
                                {orders.map((sub, parentIndex) => (
                                    <div key={parentIndex}>
                                        <ListItem dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    disableRipple
                                                    edge="start"
                                                    checked={sub.checked ? true : false}
                                                    onChange={() =>
                                                        this.handleCheckClick(sub._id, parentIndex)
                                                    }
                                                    color='primary'
                                                />
                                            </ListItemIcon>
                                            <b>{sub.vendor.businessName}</b>
                                        </ListItem>
                                        <Collapse
                                            unmountOnExit
                                            in={true}
                                            timeout="auto"
                                        >
                                            <List disablePadding component="div">
                                                {sub.cart.map((feature, childIndex) => (
                                                    <ListItem
                                                        key={feature._id}
                                                        dense
                                                        className={classes.nested}
                                                    >
                                                        <ListItemIcon>
                                                            <Checkbox
                                                                disableRipple
                                                                edge="start"
                                                                checked={feature.checked ? true : false}
                                                                tabIndex={-1}
                                                                color='primary'
                                                                disabled={feature.disabled ? true : false}
                                                                onChange={() =>
                                                                    this.handleCheckClick(
                                                                        sub._id,
                                                                        parentIndex,
                                                                        feature._id,
                                                                        childIndex
                                                                    )
                                                                }
                                                            />
                                                        </ListItemIcon>
                                                        <CartSingle
                                                            id={feature._id}
                                                            image={feature.productInfo.images[0].url}
                                                            name={feature.productInfo.title}
                                                            subName={feature.productInfo.description}
                                                            quantity={feature.quantity}
                                                            size={feature.size}
                                                            addons={feature.addons}
                                                            onChangeMinus={() => this.changeQuantity(
                                                                sub._id,
                                                                parentIndex,
                                                                feature._id,
                                                                childIndex,
                                                                'minus'
                                                            )}
                                                            onChangePlus={() => this.changeQuantity(
                                                                sub._id,
                                                                parentIndex,
                                                                feature._id,
                                                                childIndex,
                                                                'plus'
                                                            )}
                                                            price={(feature.quantity * (parseFloat(feature.productInfo.price) + parseFloat(this.countAddonsPrice(feature.addons)))).toFixed(2)}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </div>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <h1>Total Price = {this.state.totalPrice}</h1>
                </Container>
                <Footer1/>
            </div>
        );
    }
}

export default withStyles(styles)(CartList);
