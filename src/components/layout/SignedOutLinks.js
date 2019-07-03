import React from 'react'
import {NavLink} from 'react-router-dom'

import {Col, Nav, NavItem, Row} from 'reactstrap';

const SignedOutLinks = () => {
	return (

			<Col>
				<Nav className="ml-auto" navbar>
					<Row>
						<Col xs={{size: 4, offset: 4}}>
							<NavItem><NavLink to='/signin' style={{textDecoration: 'none'}}>
								<h5>
								Войти
								</h5>
							</NavLink></NavItem>
						</Col>
						<Col xs="4">
							<NavItem><NavLink to='/signup' style={{textDecoration: 'none'}}>
								<h5>
								Регистрация
								</h5>
							</NavLink></NavItem>
						</Col>
					</Row>
				</Nav>
			</Col>

	)
};


export default SignedOutLinks