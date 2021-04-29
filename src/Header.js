import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__icon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Frands</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__basket">
                    <ShoppingCartOutlinedIcon style={{fontSize: "30px"}}/>
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                    <span className="header__optionLineTwo header__cart">Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Header
