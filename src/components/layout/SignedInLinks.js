import React from 'react'
import {NavLink} from 'react-router-dom'

import {Nav, NavItem, Col, Row} from 'reactstrap';


const SignedInLinks = () => {
    return (
        <Col xs="9 offset-3">
            <Nav navbar>
                <Row className="justify-content-end flex-nowrap align-items-center">
                    <Col >
                        <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
                            <div className="header_title">
                                Добавить&nbsp;фильм
                            </div>
                        </NavLink></NavItem>
                    </Col>
                    <Col>
                        <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
                            <div className="header_title">
                                Профиль
                            </div>
                        </NavLink></NavItem>
                    </Col>
                    <Col>
                        <NavItem><NavLink to='/' style={{textDecoration: 'none'}}>
                            <div className="header_title">
                                Выйти
                            </div>
                        </NavLink></NavItem>
                    </Col>
                </Row>
            </Nav>
        </Col>
    )
};

export default SignedInLinks