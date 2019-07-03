import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import cinema_logo from '../../img/cinema-logo.png'
import './NavBar.css'

import {Container, Row, Col, CardImg} from 'reactstrap';


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
                    <Row className="justify-content-around align-items-baseline">
                        <Col>
                            <Row className="justify-content-start">
                                <Col>
                                    <Link to='/'>
                                        {/*<CardImg top width="50%" src={cinema_logo} alt="RelaxCinema"/>*/}
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/" style={{textDecoration: 'none'}}>
                                        <h3>
                                            RelaxCinema
                                        </h3>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-end">
                                {/*<SignedInLinks/>*/}
                                <SignedOutLinks/>
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