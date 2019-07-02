import React, {Component} from 'react';
import {CardImg, Col, Row,} from "reactstrap";
import PlaceWrapper from "./PlaceWrapper";
import screen from '../../img/hall-screen.svg'
import cinema_logo from "../../img/cinema-logo.png";
import * as PropTypes from "prop-types";

class PlaceHall extends Component {
    // createPlace = (place) => {
    //     console.log(place);
    // 	{place && place.map(function (row, index, place) {
    // 		let row_id = row;
    //         console.log(row_id);
    // 		let row_num = index + 1;
    // 		return place[index].map(function (row, index, place) {
    // 		    let num_id = row;
    //             console.log(num_id);
    //             return num_id;
    // 			}
    // 		)
    // 	})}
    // };
    // createTable = (place, place_num) => {
    // 	let table = [];
    // 	// let place_row = place;
    // 	// let place_num = place_num;
    // 	for (let i = 0; i >= place; i++) {
    // 		let children = [];
    // 		for (let j = 0; j <= place_num; j++) {
    // 			children.push(<Col>{`Column ${j + 1}`}</Col>)
    // 		}
    // 		//Create the parent and add the children
    // 		table.push(<Row>{children}</Row>)
    // 	}
    // 	return table
    // };

    render() {
        let {place} = this.props;
        // let createPlace = this.createPlace(place);


        return (

            <Row className="cinema_place_item">
                <Col xs="12">
                    <CardImg central width="100%" src={screen} alt="Кинотеатр Cinema Place"/>
                </Col>
                <Col>
                    <Row>
                        {place && place.map(function (row, index, place) {
                            const row_id = row;
                            const row_num = index;
                            return place[index].map(function (row, index, place) {
                                    const place_id = `${row_id}_${index}`;

                                    return (
                                        <PlaceWrapper row_id={row_id} place_row={row_num} place_num={row}
                                                      place_id={place_id}/>
                                    )

                                }
                            )
                        })}
                    </Row>
                </Col>

            </Row>


        );
    }
}

PlaceHall.propTypes = {place: PropTypes.any}

export default PlaceHall;