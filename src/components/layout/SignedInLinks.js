import React from 'react'
import {NavLink} from 'react-router-dom'

import {Nav, NavItem, Col, Row} from 'reactstrap';


const SignedInLinks = () => {
    return (
        <Col>
            <Nav className="ml-auto" navbar>
                <Row>
                    <Col xs={{size: 6, offset: 0}}>
                        <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
                            <h5 className="mt-3">
                                Добавить&nbsp;фильм
                            </h5>
                        </NavLink></NavItem>
                    </Col>
                    <Col xs="3">
                        <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
                            <h5>
                                Профиль
                            </h5>
                        </NavLink></NavItem>
                    </Col>
                    <Col xs="3">
                        <NavItem><NavLink to='/' style={{textDecoration: 'none'}}>
                            <h5>
                                Выйти
                            </h5>
                        </NavLink></NavItem>
                    </Col>
                </Row>
            </Nav>
        </Col>
    )
};

export default SignedInLinks