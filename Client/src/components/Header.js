import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="headerWrap" data-test="headerComponent">
        <div style={{
            fontSize: "18px", padding: "15px 30px",
            textAlign: "left"
        }}>Customer Information</div>
        <div className='header__nav' data-test="headerNav">
            <NavLink to='/' activeClassName='activeNav' exact={true}>HOME</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>ADD CUSTOMER</NavLink>
        </div>
    </header>
);

export default Header;