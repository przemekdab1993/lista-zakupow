import React, { useState } from "react";
import './App.css';

import ProductsPanel from "./components/Products/ProductsPanel";
import Container from "./components/DefaultInterface/Container";
import AddPanel from "./components/NewItem/AddPanel";

const DEFAULT_PRODUCT = [
    {
        id: 'p0',
        name: 'apples',
        quantity: 2,
        price: 10.20,
        groups: ['g1'],
        date: new Date(2022, 2, 12),
        status: 1
    },
    {
        id: 'p1',
        name: 'butter',
        quantity: 1,
        price: 20.00,
        groups: ['g1','g2'],
        date: new Date(2022, 4, 22),
        status: 1
    },
    {
        id: 'p2',
        name: 'bananas',
        quantity: 4,
        price: 4.10,
        groups: ['g2'],
        date: new Date(2022, 4, 22),
        status: 1
    },
    {
        id: 'p3',
        name: 'tomatoes',
        quantity: 3,
        price: 11.10,
        groups: ['g2'],
        date: new Date(2022, 4, 23),
        status: 1
    },
    {
        id: 'p4',
        name: 'rolls',
        quantity: 5,
        price: 0.75,
        groups: [],
        date: new Date(2022, 4, 28),
        status: 1
    }
];
const GROUPS_PRODUCTS = [
    {
        id: 'g1',
        name: 'Soup'
    },
    {
        id: 'g2',
        name: 'Sandwiches'
    },
    {
        id: 'g3',
        name: 'test'
    }
];

const App = (props) => {

    const [productList, setProductList] =  useState(DEFAULT_PRODUCT);
    const [groupsProducts, setGroupsProducts] = useState(GROUPS_PRODUCTS);
    const [messageInfo, setMessageInfo] = useState([]);

    const changeProductProperties = (newDataProduct) => {
        let newProductList = [];
        for (const product of productList) {
            let tempProduct = {...product};
            if (product.id === newDataProduct.id) {
                tempProduct = {...product, ...newDataProduct};
            }
            newProductList = [...newProductList, tempProduct]
        }
        setProductList( newProductList);
    }

    const addNewProduct = (newProduct) => {
        const lastProductList = productList.at(-1);

        let newProductId = 'p' + (parseInt(lastProductList.id.slice(1)) + 1);

        newProduct.id = newProductId;

        setProductList( (prevProductList) => {
            return [...prevProductList, newProduct];
        });

        setMessageInfo( (prevMessageInfo) => {
            return [...prevMessageInfo, 'A new product "' + newProduct.name + '" has been added.'];
        });
    }

    const addNewGroup = (newGroup) => {
        const lastGroupsProducts = groupsProducts.at(-1);

        let newGroupId = 'g' + (parseInt(lastGroupsProducts.id.slice(1)) + 1);

        newGroup.id = newGroupId;

        setGroupsProducts( (prevGroupsProducts) => {
            return [...prevGroupsProducts, newGroup];
        });

        setMessageInfo( (prevMessageInfo) => {
            return [...prevMessageInfo, 'A new group "' + newGroup.name + '" has been added.'];
        });
    }

    return (
        <div className="App">
            <div className="massage-info">
                <Container>
                    {/* to do usuwanie starych wiadomości*/}
                    {/*{ messageInfo.length > 0 &&*/}
                    {/*    messageInfo.map( (message) => (<p>{message}</p>) )*/}
                    {/*}*/}
                </Container>
            </div>
            <div className="nav">
                <Container>
                    <AddPanel onNewProduct={addNewProduct} onNewGroup={addNewGroup} />
                </Container>
            </div>
            <Container>
                <h1 className="shopping-list-title">Na shopii pi pi pi</h1>
                <ProductsPanel
                    className="product-panel"
                    itemsList={productList}
                    groupsProducts={groupsProducts}
                    onChangeProduct={changeProductProperties}
                />
            </Container>
        </div>
    );
}

export default App;
