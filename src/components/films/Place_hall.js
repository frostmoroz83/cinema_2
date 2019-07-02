import React from 'react';
import {Col, Row} from "reactstrap";

function PlaceHall({place}) {
console.log(place);
	return (
		<Row className="cinema_place_item">
			<Col>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>

			</Col>
		</Row>
	);
}

export default PlaceHall;