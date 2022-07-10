import React, { useState } from "react";
import './App.css';

import ProductPanel from "./components/ItemList/ProductPanel";
import Container from "./components/DefaultInterface/Container";
import AddPanel from "./components/NewItem/AddPanel";

const DEFAULT_PRODUCT = [
    {
        name: 'apples',
        quantity: 2,
        price: 10.20,
        group: [],
        date: new Date(2022, 2, 12),
        status: 1
    },
    {
        name: 'butter',
        quantity: 1,
        price: 20.00,
        group: [],
        date: new Date(2022, 4, 22),
        status: 1
    },
    {
        name: 'bananas',
        quantity: 4,
        price: 4.10,
        group: [],
        date: new Date(2022, 4, 22),
        status: 1
    },
    {
        name: 'tomatoes',
        quantity: 3,
        price: 11.10,
        group: [],
        date: new Date(2022, 4, 23),
        status: 1
    },
    {
        name: 'rolls',
        quantity: 5,
        price: 0.75,
        group: [],
        date: new Date(2022, 4, 28),
        status: 1
    }
];

const App = (props) => {

    const [productList, setProductList] =  useState(DEFAULT_PRODUCT);


    return (
        <div className="App">
            <div className="nav">
                <Container>
                    <AddPanel />
                </Container>
            </div>
            <Container>
                <h1 className="shopping-list-title">Shopping list</h1>
                <ProductPanel itemsList={productList} className="product-panel" />
            </Container>
        </div>
    );
}

export default App;
