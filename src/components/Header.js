import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar =  styled.nav`
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    color: white;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
`;

const NavItems = styled.div``;

const NavItemLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 1rem;
`;

const Header = () => {
    return (
        <Navbar>
            <Logo to='/'>Animal</Logo>
            <NavItems>
                <NavItemLink to='/'>Trang chủ</NavItemLink>
                <NavItemLink to='/about'>Thông tin</NavItemLink>
                <NavItemLink to='/services'>Các dịch vụ</NavItemLink>
            </NavItems>
        </Navbar>
    )
}

export default Header;