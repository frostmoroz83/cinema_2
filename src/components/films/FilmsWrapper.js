import React from 'react'
import {Row, Col} from 'reactstrap';
import './FilmsWrapper.css'

const FilmsWrapper = ({film}) => {
    return (
        <Row className="content_card">
            <Col xs="4" className="content_card-img">
                <img className="content_card-img__item" src={film.img} alt={film.title}/>
            </Col>
            <Col xs="8">
                <Row>
                    <div className="card-content">
                        <span className="">
                            <h6>{film.title}</h6>
                        </span>
                    </div>
                    <div className="card-reveal">
                        <span className="">
                            <i className="">close</i>
                        </span>
                        <p>{film.content}</p>
                    </div>
                    <div className="">
                        <div>Купить билет на фильм</div>
                    </div>
                </Row>
            </Col>
        </Row>
    )
};

export default FilmsWrapper





