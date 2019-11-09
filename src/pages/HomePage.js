import React, { Component } from 'react';

import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Row,
    FormGroup,
    Container
} from "reactstrap";

import IndexNavbar from '../components/Navbars/IndexNavbar';
import SearchBars from '../components/search/SearchBars';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <IndexNavbar />
                <div
                    className="page-header section-dark"
                    style={{
                        backgroundImage:
                            "url(" + require("../assets/img/ingredientes-hamburguesas-planas-espacio-copia_23-2148235012.jpg") + ")"
                    }}
                >
                    <div className="filter" />
                    <div className="content-center mt-0">
                        <Container>
                            <div className="title-brand">
                                <h1 className="presentation-title">Viandas YA</h1>
                            </div>
                            <h2 className="presentation-subtitle text-center mt-0">
                                Hace tu Pedido y recibilo en tu casa ya!
                            </h2>
                            
                            <SearchBars/>
                        </Container>
                    </div>
                    <h6 className="category category-absolute">
                        Designed and coded by{" "}
                        <a
                            href="https://www.creative-tim.com?ref=pkr-index-page"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="creative-tim-logo"
                                src={require("../assets/img/creative-tim-white-slim2.png")}
                            />
                        </a>

                    </h6>

                </div>

            </>
        );
    }
}

