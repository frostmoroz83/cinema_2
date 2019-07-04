import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Content from './components/content/Content'
import FilmsDetails from './components/films/FilmsDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateFilms from './components/films/CreateFilms'
import HalloDA from './components/films/HallDA'
import FAQ from './components/films/FAQ'
import Ticket from './components/films/Ticket'

import {Container, CardImgOverlay, CardImg, Row} from 'reactstrap';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <CardImg className="branding"
                             width="100%"
                             src="https://kinoplan24.ru/img/branding/branding.jpg?1562006590"
                             alt="Card image cap"/>

                    <CardImgOverlay>
                        <div className="wrapper">
                                <NavBar/>
                            <Container>
                                <Row>
                                <Switch>
                                    <Route exact path='/' component={Content}/>
                                    <Route path='/films/:id' component={FilmsDetails}/>
                                    <Route path='/signin' component={SignIn}/>
                                    <Route path='/signup' component={SignUp}/>
                                    <Route path='/create' component={CreateFilms}/>
                                    <Route path='/hallo' component={HalloDA}/>
                                    <Route path='/faq' component={FAQ}/>
                                    <Route path='/ticket' component={Ticket}/>
                                </Switch>
                                </Row>
                            </Container>
                        </div>
                    </CardImgOverlay>
                </div>

            </BrowserRouter>
        )
    }
}

export default App;
