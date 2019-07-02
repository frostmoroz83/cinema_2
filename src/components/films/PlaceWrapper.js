import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import * as PropTypes from "prop-types";


class PlaceWrapper extends Component {

	createTable = () => {
		let table = [];
		let place_row = this.place_row;
		let place_num = this.place_num;
		for (let i = 0; i >= place_row; i++) {
			let children = [];
			for (let j = 0; j <= place_num; j++) {
				children.push(<Col>{`Column ${j + 1}`}</Col>)
			}
			table.push(<Row>{children}</Row>)
		}
		return table
	};


	render() {
		let {place_row, place_num, place_id, row_id} = this.props;
		console.log(`Ряд: ${place_row}`);
		console.log(`Место: ${place_num}`);
		const place_index = `${place_row}_${place_num}`;

		return (
			<Col id={place_index} className="place_item">

			</Col>



		);

	}
}

PlaceWrapper.propTypes = {
	place_row: PropTypes.any,
	place_num: PropTypes.any
}

export default PlaceWrapper;