import React from 'react';
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase.js";

const Header = () => {
    const history = useHistory();
    const [{ basket,user },dispatch] = useStateValue();

    const handleAuth = () => {
        if(user) {
            auth.signOut();
            history.push("/login");
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__icon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user?.email : "Guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__basket">
                        <ShoppingCartOutlinedIcon style={{fontSize: "30px"}}/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                        <span className="header__optionLineTwo header__cart">Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
