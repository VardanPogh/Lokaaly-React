import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import SignUp from "../components/SignUp";
import VendorLogin from "../components/Vendor/Login";
import VendorRegister from "../components/Vendor/Register";
import UserRegister from "../components/User/Register";
import Contact from "../components/Contact";
import {makeStyles} from "@material-ui/core/styles";
import FoodSinglePage from '../components/Food';
import UserConfirm from '../components/User/Confirm';
import FavoritesPage from "../components/Favorites";
import Vendor from '../components/Vendor';
import Profile from "../components/Profile";
import OrderList from '../components/Orders/OrderList';
import {OrderDetails} from '../components/Orders/OrderDetails';
import CreateNewPassword from '../components/CreateNewPassword';
import VendorView from '../components/Vendor/VendorView';
import Dishes from "../components/Dishes";
import ProtectedRoute from "./ProtectedRoute";
import {EditDish} from "../components/Dishes/editDishes";
import AboutUs from "../components/AboutUs";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import DeliveryList from "../components/Delivery/DeliveryList";
import {DeliveryDetails} from "../components/Delivery/DeliveryDetails";
import DriverRegister from "../components/Driver/Register";

const useStyles = makeStyles(theme => ({
    root: {
        '@media (min-width: 1360px)': {
            '& .MuiContainer-root': {
                width: '1360px !important',
                maxWidth: '1360px !important',
                minWidth: '1360px !important',
                paddingLeft: 0,
                paddingRight: 0,
            }
        },
    }
}))

function Routes() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Switch>

                    {/*auth*/}
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/vendor/login" component={VendorLogin}/>
                    <Route path="/vendor/register" component={VendorRegister}/>
                    {/*----*/}
                    <Route exact={true} path="/" component={Dashboard}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/food_single" component={FoodSinglePage}/>
                    <Route path="/favorites" component={FavoritesPage}/>
                    <Route path="/terms" component={Terms}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/user/register" component={UserRegister}/>
                    <Route path="/user/confirm" component={UserConfirm}/>
                    <Route exact path="/vendor/activation" component={CreateNewPassword}/>

                    <Route path="/vendor/:id?/:viewMode?" component={Vendor}/>

                    <ProtectedRoute path="/vendorview" component={VendorView}/>
                    <Route path="/about_us" component={AboutUs}/>
                    <ProtectedRoute path="/profile" component={Profile}/>
                    {/*orders*/}
                    <ProtectedRoute path="/orderlist" component={OrderList}/>
                    <ProtectedRoute path="/orderdetails/:id" component={OrderDetails}/>
                    {/*{delivery}*/}
                    <ProtectedRoute path="/delivery" component={DeliveryList}/>
                    <ProtectedRoute path="/deliverydetails/:id" component={DeliveryDetails}/>
                    {/*dishes*/}
                    <ProtectedRoute path="/dishes" exact component={Dishes}/>
                    <ProtectedRoute path="/dishes/edit/:id" component={EditDish}/>
                    {/* driver */}
                    <Route exact path="/driver/register" component={DriverRegister}/>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
