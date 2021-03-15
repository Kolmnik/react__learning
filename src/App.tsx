import React from 'react';
import './App.css';
import {SearchBar} from "./components/search-bar";
import {ProductsList} from "./components/products-list";
import {EasyButton} from "./onOff/button";

function App() {
    return (
        <div className="root-page">
            {/*<SearchBar/>*/}
            {/*<ProductsList/>*/}
            <EasyButton value={true}/>
        </div>
    );
}

export default App;
