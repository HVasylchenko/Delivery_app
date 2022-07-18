import React, {useState} from 'react';
import './Shop.css';
import McDonaldsArr from"../data/McDonalds.json";
import KFCArr from"../data/KFC.json";



function Shop () {
  const [cafe, setCafe] = useState(McDonaldsArr);

  const choiceCafe = (event) => {
    event.preventDefault();
    let t = event.target;
    setCafe([]);
    if (t.classList.contains("McDonalds")) {setCafe(McDonaldsArr)};
    if (t.classList.contains("KFC")) {setCafe(KFCArr)};
  };
  
// формируем массив с артикулами вібранніх товаров в ыуыышщтЫещкфпу
const addToCartLS = (event) => {
  let bucketArr = [];
  // event.target.dataset.key - это артикул выбранного товара- например "articul": "484f",
    event.preventDefault(); 
    if (!event.target.classList.contains('add-to-cart')) return false;
    console.log( JSON.parse(sessionStorage.getItem("bucket")));
    // 
    bucketArr.push(event.target.dataset.key);
    JSON.parse(sessionStorage.getItem("bucket")) ?
      bucketArr.push(JSON.parse(sessionStorage.getItem("bucket"))):
      console.log(Boolean(JSON.parse(sessionStorage.getItem("bucket"))));
    sessionStorage.clear();
    bucketArr = bucketArr.flat();
    // удаляем повторыне элементы в массиве
    let buckerSet = new Set(bucketArr);
    bucketArr = Array.from(buckerSet);
    console.log(bucketArr);
    sessionStorage.setItem("bucket", JSON.stringify(bucketArr));
    };

  return (
    <div className="shop-page-style">
      <section className="shops-style" onClick = {choiceCafe}>
        <h2 className="text-center mb-3">Shop</h2>
        <ul className="shops-style-ul">
            <li className="McDonalds btn btn-primary mb-3 ml-0 mr-8 pl-0 w-80">McDonalds</li>
            <li className="KFC btn btn-primary mb-3 ml-0 mr-8 pl-0 w-80">KFC</li>
        </ul>
      </section>
      <section className="foods-style">
        <div className="goods-field">
          {cafe.map(item => 
              <div className="goods-block">
                <img src={item.image} alt=""/>
                <p>{item.title}: ₴{item.cost} </p>
                <button className="add-to-cart btn btn-primary" data-key={item.articul}
                onClick={addToCartLS} >Add to cart</button>
              </div>
            )}
        </div>
      </section>
    </div>
    );
};
export default Shop;
