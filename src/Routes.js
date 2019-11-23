import React, { useState }from "react";
import {Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import SellerProducts from "./containers/SellerProducts";
import Products from "./containers/Products";
import PlaceOrder from "./containers/PlaceOrder";
import Orders from "./containers/Orders";
import SellerOrders from "./containers/SellerOrders";
import NewProduct from "./containers/NewProduct";
import AppliedRoute from "./components/AppliedRoute";


export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/products" exact component={Products} appProps={appProps} />
            <AppliedRoute path="/" exact component={Products} appProps={appProps} />
            <AppliedRoute path="/orders" exact component={Orders} appProps={appProps} />
            <AppliedRoute path="/sellerorders" exact component={SellerOrders} appProps={appProps} />
            <AppliedRoute path="/placeorder" exact component={PlaceOrder} appProps={appProps} />
            <AppliedRoute path="/sellerproducts" exact component={SellerProducts} appProps={appProps} />
            <AppliedRoute path="/products/new" exact component={NewProduct} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}