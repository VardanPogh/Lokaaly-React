// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import {
//     Container,
// } from "@material-ui/core";
// import NavBar from "../../NavBar";
// import Footer1 from "../../Footer";
// import Grid from "@material-ui/core/Grid";
// import CartSingle from "./CartSingle";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import Checkbox from "@material-ui/core/Checkbox";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import IconButton from "@material-ui/core/IconButton";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import Collapse from "@material-ui/core/Collapse";
// import faker from "faker";
//
//
// function createGeoJson() {
//     const featureSet = ["Polygon", "Circle", "Point"];
//     const quantity = (faker.random.number() % 10) + 1;
//     const features = [];
//     let x = 0;
//     while (x < quantity) {
//         features.push({
//             id: faker.random.uuid(),
//             type: "Feature",
//             geometry: {
//                 type: featureSet[faker.random.number() % 3]
//             }
//         });
//         x += 1;
//     }
//     return features;
// }
//
// function createSubscriptions() {
//     const statusSet = ["Processing", "Completed", "Submitted", "Error"];
//     const quantity = (faker.random.number() % 10) + 1;
//     const subscriptions = [];
//     let x = 0;
//     while (x < quantity) {
//         subscriptions.push({
//             id: faker.random.uuid(),
//             name: faker.lorem.words(),
//             description: faker.lorem.sentence(),
//             created: faker.date.past(),
//             status: statusSet[faker.random.number() % 4],
//             checked: false,
//             geoJson: {
//                 features: createGeoJson()
//             }
//         });
//         x += 1;
//     }
//     return subscriptions;
// }
//
// const ORDERS = {
//     algorithmid: 1,
//     classification: "###-####-######",
//     description: faker.lorem.sentence(),
//     name: faker.lorem.words(),
//     subscriptions: createSubscriptions()
// };
//
// const styles = theme => ({
//     nested: {
//         paddingLeft: theme.spacing(9)
//     },
//     button: {
//         marginRight: theme.spacing(2),
//         width: 120
//     },
//     rightIcons: {
//         marginRight: "-12px"
//     }
// });
//
//
// const useStyles = makeStyles((theme) => ({
//     containerGrid: {
//         marginTop: 30,
//         textAlign: 'left',
//         fontWeight: 'bold',
//     },
//     headerLabel: {
//         color: theme.palette.secondary.dark,
//         fontSize: 24,
//         fontWeight: 'bold',
//         top: '10px',
//         position: 'relative',
//         margin: '50px 0'
//
//     },
//     subHeaderLabel: {
//         fontSize: 16,
//         color: theme.palette.secondary.light
//     },
//     filterDiv: {
//         margin: '60px 0',
//         float: 'left',
//         textAlign: 'left',
//     },
//     formControl: {
//         width: 116,
//         marginLeft: 10,
//         '& .MuiOutlinedInput-notchedOutline': {
//             border: 'none',
//         }
//     },
//     textField: {
//         marginLeft: theme.spacing(5),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
//     container: {
//         margin: 'auto'
//     }
//
// }));
//
// export default function CartList1() {
//     const classes = useStyles();
//     const [filter, setFilter] = useState('');
//     const handleChange = (e) => {
//         setFilter(e.target.value)
//     };
//
//     const handleExpandClick = (id, index) => {
//         const order = {
//             ...this.state.orders.subscriptions.filter(order => order.id === id)[0],
//             expanded: !this.state.orders.subscriptions.filter(
//                 order => order.id === id
//             )[0].expanded
//         };
//
//         const orders = this.state.orders.subscriptions;
//         orders[index] = order;
//
//         this.setState({
//             orders: {
//                 ...this.state.orders,
//                 subscriptions: orders
//             }
//         });
//     };
//
//     /**
//      * @param id - the id of the parent list item of the child who was selected
//      * @param parentIndex - the index of the parent list item of the child who was selected
//      * @param childId - the id of the child list item who's checkbox was selected
//      * @param childIndex - the index of the child list item who's checkbox was selected
//      */
//     const handleCheckClick = (id, parentIndex, childId, childIndex) => {
//         console.log(childIndex);
//         if (typeof childIndex !== "undefined" && typeof childId !== "undefined") {
//             console.log("child was checked");
//
//             // get orders
//             const orders = this.state.orders.subscriptions;
//
//             // get order
//             const order = orders[parentIndex];
//
//             // get features
//             const {features} = order.geoJson;
//
//             // change checked state of the selected sub checkbox
//             const feature = {
//                 ...features[childIndex],
//                 checked: !features[childIndex].checked
//             };
//
//             // insert updated feature into array
//             features[childIndex] = feature;
//
//             // get total of checked sub checkboxes in updated array
//             let checkedCount = 0;
//             features.forEach(feature => feature.checked && checkedCount++);
//
//             // if there are any sub checkboxes checked, check the parent as well
//             if (checkedCount > 0) {
//                 console.log(`checked count is ${checkedCount}`);
//                 const modifiedOrder = {
//                     ...order,
//                     checked: true,
//                     geoJson: {
//                         features
//                     }
//                 };
//
//                 // insert the order back into the list
//                 orders[parentIndex] = modifiedOrder;
//
//                 this.setState({
//                     orders: {
//                         ...this.state.orders,
//                         subscriptions: orders
//                     }
//                 });
//             } else {
//                 // unchecked the last checked sub checkbox so close expansion panel
//                 const modifiedOrder = {
//                     ...order,
//                     checked: false,
//                     expanded: false,
//                     geoJson: {
//                         features
//                     }
//                 };
//                 console.log("mod", modifiedOrder);
//                 // insert the order back into the list
//                 orders[parentIndex] = modifiedOrder;
//
//                 this.setState({
//                     orders: {
//                         subscriptions: orders
//                     }
//                 });
//                 console.log("modOrd:", orders);
//             }
//         } else {
//             // getting the index of the order from state then going through the features and checking all of them
//             const features = this.state.orders.subscriptions
//                 .filter(order => order.id === id)[0]
//                 .geoJson.features.map(feature => ({
//                     ...feature,
//                     checked: !feature.checked
//                 }));
//
//             // checking the parent box and adding the checked children back to it
//             let order = {
//                 ...this.state.orders.subscriptions.filter(order => order.id === id)[0],
//                 checked: !this.state.orders.subscriptions.filter(
//                     order => order.id === id
//                 )[0].checked,
//                 geoJson: {
//                     features
//                 }
//             };
//             // if closed and you are selecting all sub checkboxes open the expansion panel
//             if (!order.expanded && order.checked) {
//                 order = {
//                     ...order,
//                     // expanding the content to show you have selected all sub checkboxes
//                     expanded: true
//                 };
//             }
//
//             // if expanded and you are unchecking everything close the expansion panel
//             if (order.expanded && !order.checked) {
//                 order = {
//                     ...order,
//                     // expanding the content to show you have selected all sub checkboxes
//                     expanded: false
//                 };
//             }
//
//             // insert the 'changed' order subscription features back into the list
//             const orders = this.state.orders.subscriptions;
//             orders[parentIndex] = order;
//
//             this.setState({
//                 orders: {
//                     ...this.state.orders,
//                     subscriptions: orders
//                 }
//             });
//         }
//     };
//
//     return (
//         <>
//             <NavBar/>
//             <Container maxWidth="lg">
//                 <div className={classes.filterDiv}>
//                     <p className={classes.headerLabel}>My Shopping Cart</p>
//                     <p className={classes.subHeaderLabel}>Total 5 items</p>
//                 </div>
//                 <Grid container spacing={2} className={classes.containerGrid}>
//                     <Grid item xs={5} sm={5} md={5}/>
//                     <Grid item xs={1} sm={1} md={1}>
//                         Quantity
//                     </Grid>
//                     <Grid item xs={1} sm={1} md={1}>
//                         Price
//                     </Grid>
//                     <Grid item xs={1} sm={1} md={1}>
//                         Size
//                     </Grid>
//                     <Grid item xs={1} sm={1} md={1}>
//                         Sauce
//                     </Grid>
//                     <Grid item xs={1} sm={1} md={1}>
//                         Customized
//                     </Grid>
//                     <Grid item xs={2} sm={2} md={2}>
//
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <List component="nav">
//                         {orders.subscriptions.map((sub, parentIndex) => (
//                             <div key={parentIndex}>
//                                 <ListItem dense>
//                                     <ListItemIcon>
//                                         <Checkbox
//                                             disableRipple
//                                             edge="start"
//                                             checked={sub.checked}
//                                             onChange={() =>
//                                                 handleCheckClick(sub.id, parentIndex)
//                                             }
//                                         />
//                                     </ListItemIcon>
//                                     Vendor Name
//                                     <ListItemSecondaryAction>
//                                         <IconButton
//                                             className={classes.rightIcons}
//                                             onClick={() =>
//                                                 handleExpandClick(sub.id, parentIndex)
//                                             }
//                                         >
//                                             {sub.expanded ? <ExpandLess/> : <ExpandMore/>}
//                                         </IconButton>
//                                     </ListItemSecondaryAction>
//                                 </ListItem>
//                                 <Collapse
//                                     unmountOnExit
//                                     in={sub.expanded || false}
//                                     timeout="auto"
//                                 >
//                                     <List disablePadding component="div">
//                                         {sub.geoJson.features.map((feature, childIndex) => (
//                                             <ListItem
//                                                 key={feature.id}
//                                                 dense
//                                                 className={classes.nested}
//                                             >
//                                                 <ListItemIcon>
//                                                     <Checkbox
//                                                         disableRipple
//                                                         edge="start"
//                                                         checked={feature.checked}
//                                                         tabIndex={-1}
//                                                         onChange={() =>
//                                                             handleCheckClick(
//                                                                 sub.id,
//                                                                 parentIndex,
//                                                                 feature.id,
//                                                                 childIndex
//                                                             )
//                                                         }
//                                                     />
//                                                 </ListItemIcon>
//                                                 <CartSingle
//                                                     image={'https://assets.epicurious.com/photos/5cd1d021a9f13c527843fd60/6:4/w_1600%2Cc_limit/High-Protein-Sauces-That-Turn-Vegetables-Into-a-Meal-ricotta-02052019.jpg'}
//                                                     name={'Customer Name Surname'}
//                                                     subName={'Fresh mixed salad'}
//                                                     sauce={['Cheese']}
//                                                     quantity={3}
//                                                     status={0}
//                                                     price={39.75}
//                                                 />
//                                             </ListItem>
//                                         ))}
//                                     </List>
//                                 </Collapse>
//                             </div>
//                         ))}
//                     </List>
//                 </Grid>
//
//
//
//
//
//
//
//
//                 {/*<CartSingle*/}
//                 {/*    image={'https://assets.epicurious.com/photos/5cd1d021a9f13c527843fd60/6:4/w_1600%2Cc_limit/High-Protein-Sauces-That-Turn-Vegetables-Into-a-Meal-ricotta-02052019.jpg'}*/}
//                 {/*    name={'Customer Name Surname'}*/}
//                 {/*    subName={'Fresh mixed salad'}*/}
//                 {/*    sauce={['Cheese']}*/}
//                 {/*    quantity={3}*/}
//                 {/*    status={0}*/}
//                 {/*    price={39.75}*/}
//                 {/*/>*/}
//                 {/*<CartSingle*/}
//                 {/*    image={'https://assets.epicurious.com/photos/5cd1d021a9f13c527843fd60/6:4/w_1600%2Cc_limit/High-Protein-Sauces-That-Turn-Vegetables-Into-a-Meal-ricotta-02052019.jpg'}*/}
//                 {/*    name={'Customer Name Surname'}*/}
//                 {/*    orderNumber={'555659652'}*/}
//                 {/*    date={'20/01/21'}*/}
//                 {/*    quantity={3}*/}
//                 {/*    status={2}*/}
//                 {/*    price={39.75}*/}
//                 {/*/>*/}
//                 {/*<CartSingle*/}
//                 {/*    image={'https://assets.epicurious.com/photos/5cd1d021a9f13c527843fd60/6:4/w_1600%2Cc_limit/High-Protein-Sauces-That-Turn-Vegetables-Into-a-Meal-ricotta-02052019.jpg'}*/}
//                 {/*    name={'Customer Name Surname'}*/}
//                 {/*    orderNumber={'555659652'}*/}
//                 {/*    date={'20/01/21'}*/}
//                 {/*    quantity={3}*/}
//                 {/*    status={1}*/}
//                 {/*    price={39.75}*/}
//                 {/*/>*/}
//                 {/*<CartSingle*/}
//                 {/*    image={'https://assets.epicurious.com/photos/5cd1d021a9f13c527843fd60/6:4/w_1600%2Cc_limit/High-Protein-Sauces-That-Turn-Vegetables-Into-a-Meal-ricotta-02052019.jpg'}*/}
//                 {/*    name={'Customer Name Surname'}*/}
//                 {/*    orderNumber={'555659652'}*/}
//                 {/*    date={'20/01/21'}*/}
//                 {/*    quantity={3}*/}
//                 {/*    status={2}*/}
//                 {/*    price={39.75}*/}
//                 {/*/>*/}
//
//             </Container>
//             <Footer1/>
//         </>
//     )
//
// }
