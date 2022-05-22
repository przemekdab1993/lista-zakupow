import logo from './logo.svg';
import './App.css';

import ItemList from "./components/ItemList/ItemList";

function App() {
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
            <div className="product-list">
                <ItemList
                    name={itemList[0].name}
                    quantity={itemList[0].quantity}
                    price={itemList[0].price}
                    date={itemList[0].date}
                    status={itemList[0].status}
                />
                <ItemList
                    name={itemList[1].name}
                    quantity={itemList[1].quantity}
                    price={itemList[1].price}
                    date={itemList[1].date}
                    status={itemList[1].status}
                />
                <ItemList
                    name={itemList[2].name}
                    quantity={itemList[2].quantity}
                    price={itemList[2].price}
                    date={itemList[2].date}
                    status={itemList[2].status}
                />
                <ItemList
                    name={itemList[3].name}
                    quantity={itemList[3].quantity}
                    price={itemList[3].price}
                    date={itemList[3].date}
                    status={itemList[3].status}
                />
                <ItemList
                    name={itemList[4].name}
                    quantity={itemList[4].quantity}
                    price={itemList[4].price}
                    date={itemList[4].date}
                    status={itemList[4].status}
                />
            </div>
        </div>
    );
}

export default App;
