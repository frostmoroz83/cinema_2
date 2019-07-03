import React, {Component} from 'react';
import {CardImg, Col, Row,} from "reactstrap";
import screen from '../../img/hall-screen.svg'
import cinema_logo from "../../img/cinema-logo.png";
import * as PropTypes from "prop-types";

class PlaceHall extends Component {
    lol = (e) => {
        const id_row = e.currentTarget.dataset.row;
        const id_place = e.currentTarget.dataset.place;
        this.props.rodi(id_row, id_place);
    };
    render() {
        let {place} = this.props;
        return (
            <Row className="cinema_place_item">
                <Col xs="12">
                    <CardImg central width="100%" src={screen} alt="Кинотеатр Cinema Place"/>
                </Col>
                <Col>
                    {place && Object.keys(place).map((row) =>

                        <Row className="justify-content-center">
                            {Object.keys(place[row]).map((place_id) =>

                                <Col xs="1"
                                     data-row={row}
                                     className="place_item"
                                     data-place={place_id}
                                     onClick={this.lol}>
                                    {place[row][place_id].place}
                                </Col>
                            )}
                        </Row>
                    )}
                </Col>
            </Row>
        );
    }
}
export default PlaceHall;