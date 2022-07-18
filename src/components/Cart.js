
import React from 'react';
import "./Cart.css";
import Userform from './Userform';
import Bucket from './Bucket';
import McDonaldsArr from"../data/McDonalds.json";
import KFCArr from"../data/KFC.json";

function Cart () {
    if (!sessionStorage.getItem("bucket")) {
        window.alert("У Вас нет выбранных товаров");
        console.log ("sessionStorage is empty");
        return false};

    const foodsFromData = [...McDonaldsArr, ...KFCArr];
    let articulArr = JSON.parse(sessionStorage.getItem("bucket"));

    // создаем массив из товаров с выбранными артикулами
    // 0: {articul: '284s', title: 'Бургер Чикаго', cost: 196, image: '', amount: 1}
    // 1: {articul: '184s', title: 'Бургер Чикаго', cost: 195, image: '', amount: 1}
    // length: 2
    let foods = [];
    const foodsArr = () => {
        for (let i = 0; i < articulArr.length; i++) {
            for (let k = 0; k < foodsFromData.length; k++) {
                if (foodsFromData[k]['articul'] === articulArr[i]) {
                    foodsFromData[k]['amount'] = +1;
                    foods.push(foodsFromData[k]);
                }
            }
        }
    };
    foodsArr();

    // переиндексируем массив выбранных товаров в объект где ключ - артикул
    // 184f: {articul: '184f', title: 'Бакет Дует', cost: 245, image: '', amount: 1}
    // 184s: {articul: '184s', title: 'Бургер Чикаго', cost: 195, image: '', amount: 1}
    const foodsObj = foods.reduce((accum, item) => {
        accum[item["articul"]] = item;
        return accum;
    }, {});

    
    let initialSum = 0;
    articulArr.forEach(item => (initialSum += foodsObj[item]['cost'] * foodsObj[item]['amount']));
   

    return (
        <div className="cart-page-style">
            <Userform />
            <Bucket orders={foodsObj} inSum={initialSum}/>
        </div>
    );
};
export default Cart;