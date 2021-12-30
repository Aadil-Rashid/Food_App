import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
        <header className={classes.header}>
            <h1>FoodApp</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>

        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of delicious food!" />
        </div>

        </React.Fragment>
    );
};

export default Header;
