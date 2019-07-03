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

	lol = (e) => {
		// console.log(e.currentTarget.dataset.row+"-"+e.currentTarget.dataset.place);
		this.props.rodi(e.currentTarget.dataset.row);
	};

	render() {
		let {place} = this.props;
		// let createPlace = this.createPlace(place);


		return (

			<Row className="cinema_place_item">
				<Col xs="12">
					<CardImg central width="100%" src={screen} alt="Кинотеатр Cinema Place"/>
				</Col>
				<Col>
						{place && Object.keys(place).map((row)=>
							// { alert(JSON.stringify(row)) }
							// const row_id = row;
							// const row_num = index;

							<Row>
						{ Object.keys(place[row]).map((place_id)=>
								// { alert(JSON.stringify(place[row][place_id].place)) }
								// const place_id = `${row_id}_${index}`;

								<Col data-row={row} data-place={place_id} onClick={this.lol}>{place[row][place_id].place}</Col>
						)}</Row>
							)}

				</Col>

			</Row>


		);
	}
}

// PlaceHall.propTypes = {place: PropTypes.any}

export default PlaceHall;