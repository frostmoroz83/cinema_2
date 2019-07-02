import React, {Component} from 'react';
import {CardImg, Col, Row,} from "reactstrap";
import PlaceWrapper from "./PlaceWrapper";
import screen from '../../img/hall-screen.svg'
import cinema_logo from "../../img/cinema-logo.png";
import * as PropTypes from "prop-types";

class PlaceHall extends Component {
	createTable = () => {
		let table = [];
		let place_row = this.place;
		let place_num = this.props.place_num;
		for (let i = 0; i >= place_row; i++) {
			let children = [];
			for (let j = 0; j <= place_num; j++) {
				children.push(<Col>{`Column ${j + 1}`}</Col>)
			}
			//Create the parent and add the children
			table.push(<Row>{children}</Row>)
		}
		return table
	};

	render() {
		let {place} = this.props;
		// createPlace = () => {
		// 	{place && place.map(function (row, index, place) {
		// 		const row_id = row;
		// 		const row_num = index + 1;
		// 		return place[index].map(function (row, index, place) {
		//
		// 			}
		// 		)
		// 	})}
		// };

		return (

			<Row className="cinema_place_item">
				<Col xs="12">
					<CardImg central width="100%" src={screen} alt="Кинотеатр Cinema Place"/>

				</Col>
				<div>
					{this.createTable()}
				</div>

			</Row>


		);
	}
}

PlaceHall.propTypes = {place: PropTypes.any}

export default PlaceHall;