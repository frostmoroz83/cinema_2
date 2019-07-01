import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, NavItem } from 'reactstrap';

const SignedInLinks = () => {
    return(
        <Nav className="ml-auto" navbar>
            <NavItem><NavLink to='/create'>Добавить фильм</NavLink></NavItem>
            <NavItem><NavLink to='/create'>Профиль</NavLink></NavItem>
            <NavItem><NavLink to='/'>Выйти</NavLink></NavItem>
        </Nav>
    )
};

export default SignedInLinks