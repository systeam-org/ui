import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios"
import "./Products.css"
import config from "../config";
import LoaderButton from "../components/LoaderButton";



export default function SellerProducts(props) {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function onLoad() {
            try {
                const orders = await loadOrders();
                setOrders(orders)
            } catch (e) {
                alert(e);
            }
            setIsLoading(false);
        }

        onLoad();
    }, [props.isAuthenticated]);

    function loadOrders() {
        return axios.get(config.SELLER_BASE_URL + config.SELLER_ORDERS, {
            params: {
                email: 'seller2@gmail.com'
            }
        }).then(res => {
            return res.data
        })
    }

    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
        {
            return index == 0 ?  word.toUpperCase() : word.toLowerCase();
        }).replace(/\s+/g, ' ');
    }

    function renderOrdersTableHeader() {
        let header = ["Order ID", 'Product Name', "Total Amount", "Status"]
        return header.map((key, index) => {
            //return <th key={index}>{camelCase(key.toUpperCase().replace('_', "  "))}</th>
            return <th key={index}>{key}</th>
        })


    }

    function renderOrdersTableData() {
        return orders.map((order, index) => {
            const {order_id, products, total_amount, status } = order //destructuring
            return (
                <tr key={order_id}>
                    <td>{order_id}</td>
                    <td>{products[0].product_name}</td>
                    <td>{total_amount}</td>
                    <td>{status}</td>
                </tr>
            )
        })
    }

    function renderOrders() {
        return (
            <div>
                <h1 id='title'>Orders</h1>
                <table>
                    <tbody>
                    <tr>{!isLoading && renderOrdersTableHeader()}</tr>
                    {renderOrdersTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="Home">
            { renderOrders()}
        </div>
    );
}