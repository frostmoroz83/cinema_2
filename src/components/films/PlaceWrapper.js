import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import * as PropTypes from "prop-types";


class PlaceWrapper extends Component {
	createTable = () => {
		let table = [];
		let place_row = this.props.place_row;
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
		let {place_row, place_num} = this.props;
		console.log(`Ряд: ${place_row}`);
		console.log(`Место: ${place_num}`);
		const place_id = `${place_row}_${place_num}`;

		return (
			<div>
				{this.createTable()}
			</div>



		);

	}
}

PlaceWrapper.propTypes = {
	place_row: PropTypes.any,
	place_num: PropTypes.any
}

export default PlaceWrapper;