import {NavLink} from "react-router-dom";
import "./Header.css";



function Header () {
    return (
    <div className="header-style-div">
        <nav className="mt-2 mb-3">
            <ul className="header-style-ul">
                <li className="header-style-li"><NavLink to='/shop'>Shops</NavLink></li>
                <li className="header-style-li"><NavLink to='/cart'>Shopping Cart</NavLink></li>
            </ul>
        </nav>
     </div>
    );
};
export default Header;
