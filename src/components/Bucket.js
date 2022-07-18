
import React, { useState} from 'react';
import "./Cart.css";

function Bucket (props) {
   
    const [amount, setAmount] = useState(props.inSum);

    const amountFoods = (event) => {
        props.orders[event.target.name]['amount'] = +event.target.value;
        let sum = 0;
        Object.keys(props.orders).forEach(item => (sum += props.orders[item]['amount'] * props.orders[item]['cost']));
        setAmount(sum); 
       localStorage.setItem("order", JSON.stringify(props.orders));
    };
   
    return (
        <section className="bucket-style" >
                <ul className="bucket-style-ul">
                    {Object.keys(props.orders).map(item =>
                        <li className="foods-block" >
                            <img className= "bucket-img" src={props.orders[item]['image']} alt={props.orders[item]['articul']}/>
                            <p> {props.orders[item]['title']}</p>
                                <label htmlFor="number">Choose quantity:</label>
                                <input type="number" name={props.orders[item]['articul']}  min="0" max="100" className="btn w-5 p-0 ml-3 mb-2 amount" defaultValue={1} onInput={amountFoods} />
                        </li>     
                        )
                    };
                </ul>
               <div className="btn btn-primary" >Total price : {amount}</div>
        </section>
       
    );
};
export default Bucket;