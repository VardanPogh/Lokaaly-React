import React, {useEffect, useState} from 'react'
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    withStyles
} from '@material-ui/core'
import NavBar from '../../NavBar'
import Footer1 from '../../Footer';
import OrderSingle from "../OrderList/OrderSingle";
import OrderListSingle from "../OrderList/OrderListSingle";
import {API_URL} from "../../../config";
import {useHistory} from "react-router-dom";


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
    containerGrid: {
        marginTop: 50,
        textAlign: 'left',
        fontWeight: 'bold',
        color: theme.palette.primary.main
    },
    filterLabel: {
        color: theme.palette.secondary.dark,
        fontSize: 24,
        fontWeight: 'bold',
        top: '10px',
        position: 'relative',
    },
    filterDiv: {
        margin: '60px 0',
        textAlign: 'left',
    },
    formControl: {
        width: 116,
        marginLeft: 10,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        }
    },
    textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(1),
        width: 200,
    },
    container: {
        margin: 'auto 0'
    },
    profileImg: {
        width: "84px",
        height: "78px",
    },
    divInfo: {
        marginLeft: "32px",
        textAlign: "left"
    },
    name: {
        fontSize: "24px",
        fontFamily: "Nunito ",
        fontWeight: "900",
        color: "#565656"
    },
    phone: {
        marginTop: "8px",
        color: "#929292",
        font: "normal normal bold 16px Nunito",
    },
    divCol: {
        width: "400px",
        textAlign: "left",
        marginLeft: "32px",
        color: "#565656",
        fontWeight: "bold"
    },
    imgOrder: {
        width: "84px",
        height: "83px",
    },
    container1: {
        marginTop: "32px",
    },
    orderName: {
        font: "normal normal bold 24px Nunito",
        color: "#565656",
        fontSize: 25,
    },
    orderInfoParent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    orderInfoChild: {
        width: '50%',
        textAlign: 'right',
    },
    orderName1: {
        font: "normal normal bold 24px Nunito",
        color: "transparent"
    },
    quantity: {
        color: "#74368C"
    },
    date: {
        color: "#99CC9E",
        verticalAlign: "middle"
    },
    btn_accept: {
        background: "#99CC9E",
        borderRadius: "23px",
        width: "132px",
        height: "46px",
        marginTop: "32px",
        marginBottom: "120px",
        font: "normal normal bold 16px Nunito",
    },
    btn_rejected: {
        background: "#C5C5C5",
        borderRadius: "23px",
        width: "132px",
        height: "46px",
        marginTop: "32px",
        marginLeft: "32px",
        marginBottom: "120px",
        font: "normal normal bold 16px Nunito",
        color: "white"
    },
    center: {
        display: "flex",
        alignItems: "center",
    },
    span_date: {
        marginLeft: "8px"
    },
    gridDiv: {
        marginTop: 30,
    }
}));


export const OrderDetails = ({props}) => {
    const classes = useStyles();
    const [id, setId] = useState(props.computedMatch.params.id);
    const [order, setOrder] = useState();
    const [products, setProducts] = useState();
    const [customer, setCustomer] = useState();
    const [orderStatus, setOrderStatus] = useState();
    const history = useHistory();

    const getOrder = () => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + 'orders/' + id, requestOptions)
            .then(async (response) => {
                const data = await response.json();
                console.log(data);
                setOrder(data);
                setOrderStatus(data.status);
                setProducts(data.products);
                setCustomer(data.customerId);
            })
    };

    const orderAction = (status) => {
        let token = localStorage.getItem("token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                orderNumber: order.orderNumber,
                status: status,
            }),
        };

        fetch(API_URL + 'orders/vendor-action', requestOptions)
            .then(async (response) => {
                history.push('/orderlist');
                console.log('response ', response)
            })
    };

    useEffect(() => {
        getOrder();
    }, [])

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg" style={{textAlign: "left"}}>
                <Grid container direction="row" className={classes.gridDiv}>
                    {customer && customer.avatar && (<img className={classes.profileImg} src={customer.avatar}/>)}
                    <div className={classes.divInfo}>
                        {customer && customer.firstName && (
                            <>
                                <div className={classes.name}>{customer.firstName}{' '}{customer.lastName}</div>
                                <div className={classes.phone}>{customer.email}</div>
                            </>
                        )}

                    </div>
                </Grid>

                <Grid container spacing={2} className={classes.containerGrid}>
                    <Grid item xs={6} sm={6} md={6}/>
                    <Grid item xs={2} sm={2} md={2}>
                        Quantity
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        Single Price
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        Total
                    </Grid>
                </Grid>
                {products && products.map((product, index) => (
                    <OrderListSingle
                        price={product.unitPrice * product.quantity}
                        quantity={product.quantity}
                        unitPrice={product.unitPrice}
                        image={product.productId.images[product.productId.images.length - 1].url}
                        name={product.productId.title}
                    />
                ))}


                {order &&
                (
                    <div className={classes.orderInfoParent}>
                        <div className={classes.orderInfoChild}>
                            <div className={classes.orderName}
                                 style={{
                                     marginTop: "32px",
                                     color: "#74368C"
                                 }}>Price- {order.subTotal} AED
                            </div>
                            <div className={classes.orderName}
                                 style={{
                                     marginTop: "32px",
                                     color: "#74368C"
                                 }}>Delivery- {order.shippingPrice} AED
                            </div>
                            <div className={classes.orderName}
                                 style={{
                                     marginTop: "32px",
                                     color: "#74368C"
                                 }}>Total- {order.total} AED
                            </div>
                        </div>
                    </div>
                )}

                {orderStatus === 'pending' && (
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn_accept}
                            onClick={() => orderAction('accepted')}
                        >
                            ACCEPT
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.btn_rejected}
                            onClick={() => orderAction('rejected')}
                        >
                            REJECT
                        </Button>
                    </>
                )}
            </Container>
            <Footer1/>
        </>
    )
}
