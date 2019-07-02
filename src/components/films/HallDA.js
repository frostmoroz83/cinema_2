import React, {Component} from 'react'
import Place_hall from './Place_hall'

import {Container, Row, Col, Button} from 'reactstrap';
import './Cinema_hall.css'

const myFilm = {
	films: [
		{
			id: '1',
			title: 'Проклятие Аннабель 3',
			content: 'Преисполнившись решимости удержать Аннабель от дальнейших разрушений и хаоса, демонологи Эд и Лоррейн Уоррены приносят одержимую куклу в запертую комнату артефактов в своем доме, поместив ее под «надежное» освященное стекло и заручившись благословением священника. Однако беспросветная ночь ужаса ждет обитателей дома, когда Аннабель пробуждает злых духов комнаты и их новой мишенью становится десятилетняя дочь Уорренов Джуди и ее друзья.',
			url: 'https://nas.dcp24.ru/img/movie/11185_big.jpg?1558938718',
			image_preview: 'https://nas.dcp24.ru/thumb_hd/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.jpg',
			video: 'https://nas.dcp24.ru/preview/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.mp4',
			price: '1000',
			age: '18+'
		},
	]
};

class HallDA extends Component {
	state = {
		time: '1 июля в 16:00',
		hall: 'Зал DOLBY ATMOS',
		place: {
			price: 250,
			number_place: '',
		},
		sum: 0,
		base: [[0, 1, 2, 3],[0, 1, 2],[0, 1, 2]],
		color_open: 'rgb(164, 206, 54)',
		color_close: 'rgb(120, 102, 54)',
	};

	onToBook = (e) => {
		const elem = e.currentTarget.id;
		this.setState({
			place: {
				number_place: elem
			},
		});
		this.removePlace(elem);
		console.log(this.state);
	};

	addPlace = (elem) => {
		const arr = this.state.base;
		arr.push(elem);
		this.setState({
			...this.state,
			base: arr,
		});
	};

	removePlace = (elem) => {
		const arr = this.state.base;
		const index = arr.indexOf(elem);
		if (index > -1) {
			arr.splice(index, 1);

		}
		this.setState({
			...this.state,
			base: arr,
		});
	};

	componentWillMount() {
	}

	render() {
		const [film] = myFilm.films;
		const {base} = this.state;
		return (
			<Col>
				<div className="cinema_hall">
					<Row className="cinema_header">
						<Col xs="12">
							<Row>
								<Col xs="10">

									<h3 className="film_title">{film.title}</h3>
								</Col>
								<Col xs="2">
									<Row className="justify-content-end">
										<Button
											color="primary"
											className="align-items-center"
										>
											Назад
										</Button>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col xs="12">
							<h4>{this.state.time},&nbsp;</h4>
							<h4>{this.state.hall}</h4>
						</Col>
					</Row>
					<Row className="cinema_place">
						<Col>
							<div className="hall-legend">
								<div className="hall-legend__item">
													<span className="hall-legend__color">

													</span>
									<span>{this.state.place.price}р</span>
								</div>
								<div className="hall-legend__item">
                                                    <span className="hall-legend__color hall-legend__color--disabled">

																										</span>
									<span>Занято</span>
								</div>
							</div>
						</Col>
					</Row>

						<Place_hall place={base}/>

					<Row className="cinema_footer">
						<Col xs="12">
							<Row className="cinema_footer__item">
								<Col xs={{size: 2, offset: 7}}>
									<Row className="justify-content-end align-items-center">
										<span><h6>Итого: &nbsp;{this.state.sum}</h6></span>
									</Row>
								</Col>
								<Col xs="3">
									<Row className="justify-content-end cinema_btn">
										<Button
											color="primary"
											className="align-items-center"
										>
											Забронировать место
										</Button>
									</Row>
								</Col>
							</Row>
						</Col>

					</Row>
				</div>
			</Col>
		)
	}
}


export default HallDA
