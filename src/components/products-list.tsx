import React from 'react';
import {SearchBar} from "./search-bar";

export const ProductsList = () => {
    return (
        <div className="products-list">
            <ProductsListHeader/>
            <ProductsListInner value={"Спорт"}/>
            <ProductsListInner value={"Электроника"}/>

        </div>)
}

const ProductsListHeader = () => {
    return (
        <div className="products-list__header">
            <h3> Имя </h3>
            <h3> Цена </h3>
        </div>
    )
}
type ProductsListInnerType = {
    value: string
}
const ProductsListInner = (props: ProductsListInnerType) => {
    if (props.value === "Спорт") {
        return (
            <div className="products-list__inner">
                <div className="products-list__inner-header"><h4>{props.value}</h4></div>
                <ProductsListProducts valueStock={true} valueName={"Футболл"} valuePrice={"49"}/>
                <ProductsListProducts valueStock={true} valueName={"Баскетболл"} valuePrice={"29"}/>
                <ProductsListProducts valueStock={false} valueName={"Хоккей"} valuePrice={"9"}/>
            </div>
        )
    } else {
        return (
            <div className="products-list__inner">
                <div className="products-list__inner-header"><h4>{props.value}</h4></div>
                <ProductsListProducts valueStock={false} valueName={"Iphone"} valuePrice={"599"}/>
                <ProductsListProducts valueStock={true} valueName={"Ipod Touch"} valuePrice={"99.99"}/>
                <ProductsListProducts valueStock={true} valueName={"Nexus 7"} valuePrice={"199"}/>
            </div>
        )
    }
}

type ProductsListProductsType = {
    valueName: string
    valuePrice: string | number
    valueStock: boolean
}

const ProductsListProducts = (props: ProductsListProductsType) => {
    if (props.valueStock === true) {
        return (
            <div className="products-list__product">
                <p className="product-name product-characteristics">{props.valueName}</p>
                <p className="product-price product-characteristics">${props.valuePrice}</p>
            </div>
        )
    } else {
        return (
            <div className="products-list__product">
                <p className="product-name product-characteristics red">{props.valueName}</p>
                <p className="product-price product-characteristics">${props.valuePrice}</p>
            </div>
        )
    }

}
