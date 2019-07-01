import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, NavItem } from 'reactstrap';

const SignedOutLinks = () => {
    return(
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink to='/signin'>Войти</NavLink></NavItem>
            <NavItem><NavLink to='/signup'>Регистрация</NavLink></NavItem>
        </Nav>
    )
}

export default SignedOutLinks