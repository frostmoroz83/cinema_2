import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import cinema_logo from '../../img/cinema-logo.png'
import './NavBar.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    CardImg
} from 'reactstrap';
import {Col, Container, Row} from 'reactstrap';

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
            <div>
            <Navbar color="info" expand="md">

                <NavbarToggler onClick={this.toggle}/>
                <NavbarBrand>
                    <CardImg top width="10%" src={cinema_logo} alt="Кинотеатр Cinema Place" />
                    <Link to='/'>Кинотеатр "Cinema Place"</Link>
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>

                        <SignedInLinks/>
                        {/*<SignedOutLinks/>*/}


                </Collapse>
            </Navbar>
            </div>

    )
    }
    }

    const mapStateToProps = (state) => {
        console.log(state);
        return {}
    };

    export default connect(mapStateToProps)(NavBar)