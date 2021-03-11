import React from 'react';

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" id="inputFirst"  placeholder="Поиск" className="search-bar__input"/>
            <p><input type="checkbox" className="search-bar__radio"/>Показать только стоковые</p>
        </div>
    )
}
const inputText = document.getElementById("inputFirst");
