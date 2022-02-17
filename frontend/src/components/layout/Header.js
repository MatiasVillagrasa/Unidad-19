import React from 'react'
import logo from '../../assets/img/Logo.png'
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <div>
            <a href="https://workingsrl.com/"><img src={logo} alt="Logo"></img></a>
        </div>
    );
}

export default Header;