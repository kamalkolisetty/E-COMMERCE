import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/');
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>ANTRA</p>
            </div>
            <ul className="nav-menu">
                {['shop', 'mens', 'womens', 'kids'].map(item => (
                    <li key={item} onClick={() => setMenu(item)}>
                        <Link to={`/${item === 'shop' ? '' : item}`} style={{ textDecoration: 'none' }}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        {menu === item && <hr />}
                    </li>
                ))}
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                )}
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};
