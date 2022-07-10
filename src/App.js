import './App.css';

import ProductList from "./components/ItemList/ProductList";
import NewItem from "./components/NewItem/NewItem";

const App = () => {
    const itemList = [
        {
            name: 'Jabłko',
            quantity: 2,
            price: 10.20,
            date: new Date(2022, 2, 12),
            status: 1
        },
        {
            name: 'Masło',
            quantity: 1,
            price: 20.00,
            date: new Date(2022, 4, 22),
            status: 1
        },
        {
            name: 'Banan',
            quantity: 4,
            price: 4.10,
            date: new Date(2022, 4, 22),
            status: 1
        },
        {
            name: 'Pomidor',
            quantity: 3,
            price: 11.10,
            date: new Date(2022, 4, 23),
            status: 1
        },
        {
            name: 'Bułka',
            quantity: 5,
            price: 0.75,
            date: new Date(2022, 4, 28),
            status: 1
        }
    ];

    return (
        <div className="App">

            <h1>Oto twoja lista zakupów</h1>
            <ProductList items={itemList} className="product-list" />
            <NewItem className="new-product" />
        </div>
    );
}

export default App;
