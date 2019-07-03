import React, {Component} from 'react'
import Place_hall from './Place_hall'
import {Container, Row, Col, Button} from 'reactstrap';
import './Cinema_hall.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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

const state = {
    time: '1 июля в 16:00',
    hall: 'Зал DOLBY ATMOS',
    place: {
        price: 250,
        number_place: '',
    },
    sum: 0,
    base: {
        0: {
            0: {'place': 'Место 1'},
            1: {'place': 'Место 2'},
            // 2:{'place': 'Место 3'},
        },
        1: {
            0: {'place': 'Место 1'},
            1: {'place': 'Место 2'},
            2: {'place': 'Место 3'},
        }
    },
    color_open: 'rgb(164, 206, 54)',
    color_close: 'rgb(120, 102, 54)',
};

class HallDA extends Component {
    placeTest = (id_row, id_place) => {
        console.log(id_row);
        console.log(id_place);
        const i = id_row;
        const j = id_place;
        const arr = state.base;
        delete arr[i][j];
        this.setState({
            ...state,
            base: arr,
        });
    };

    render() {
        const [film] = myFilm.films;
        const {base} = state;
        console.log(film);
        return (
            <Col>
                <div className="cinema_hall">
                    <Row className="cinema_header">
                        <Col xs="12">
                            <Row>
                                <Col xs="10">
                                    <h3 className="film_title">
                                        {film.title}
                                    </h3>
                                </Col>
                                <Col xs="2">
                                    <Row className="justify-content-end">
                                        <Button
                                            color="primary"
                                            className="align-items-center"
                                        >
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <h6>
                                                    Закрыть
                                                </h6>
                                            </Link>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12">
                            <h4>{state.time},&nbsp;</h4>
                            <h4>{state.hall}</h4>
                        </Col>
                    </Row>
                    <Row className="cinema_place">
                        <Col>
                            <div className="hall-legend">
                                <div className="hall-legend__item">
													<span className="hall-legend__color">
													</span>
                                    <span>{state.place.price}р</span>
                                </div>
                                <div className="hall-legend__item">
                                                    <span className="hall-legend__color hall-legend__color--disabled">
										            </span>
                                    <span>Занято</span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Place_hall place={base} rodi={this.placeTest}/>

                    <Row className="cinema_footer">
                        <Col xs="12">
                            <Row className="cinema_footer__item">
                                <Col xs={{size: 2, offset: 7}}>
                                    <Row className="justify-content-end align-items-center">
                                        <span>
                                                Итого: &nbsp;{state.sum}
                                        </span>
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


