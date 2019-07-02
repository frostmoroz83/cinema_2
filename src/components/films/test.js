import {Button, Col, Row} from "reactstrap";
import React from "react";

<Row className="cinema_footer">
	<Col xs="12">
		<div className="section">
			<div className="col s12 ">
				<div className="footer">
					<div className="footer-col">
						<div className="hall-schema__sum">
							<div className="hall-schema__sum-final">
								<span>Итого: &nbsp;</span>
								<span>{this.state.sum}р</span>
							</div>
						</div>
						<Button
							color="primary"
							className="align-items-center"
						>
							Забронировать место
						</Button>
					</div>
				</div>
			</div>
		</div>
	</Col>

</Row>

{/*<Col id={place_id} className="place_item">*/}
{/*	Ряд:{place_row} - Место:{place_num}*/}
{/*</Col>*/}