import React from 'react';
import './App.css';
import {SearchBar} from "./components/search-bar";
import {ProductsList} from "./components/products-list";

function App() {
    return (
        <div className="root-page">
            <SearchBar/>
            <ProductsList/>
        </div>
    );
}

export default App;
