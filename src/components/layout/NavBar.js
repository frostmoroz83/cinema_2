import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import cinema_logo from '../../img/cinema-logo.png'
import './NavBar.css'

import { Container, Row, Col, CardImg } from 'reactstrap';


class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="nav_bar">
				<Container>
					<Row>
						<Col>
							<Row>
								<Col xs="5">
									<Row>
										<Col xs="3">
											<Link to='/'>
												<CardImg top width="50%" src={cinema_logo} alt="RelaxCinema"/>
											</Link>
										</Col>
										<Col xs="6">
											<Link to="/" style={{textDecoration: 'none'}}>
												<h3 className="mt-2">
													RelaxCinema
												</h3>
											</Link>
										</Col>
									</Row>
								</Col>


								<Col xs={{size: 4, offset: 3}}>
									<SignedInLinks/>
									<SignedOutLinks/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>


		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {}
};

export default connect(mapStateToProps)(NavBar)