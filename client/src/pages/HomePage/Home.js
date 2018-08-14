import React, { Component } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import HowWorks from "../../components/HowWorks";
import Contact from "../../components/Contact";
// import { Creative } from "../../components/Creative";
import { Col, Row, Container } from "../../components/Grid";


class Intro extends Component {

    render() {
        return (
            <Container>
                <Header />
                <About />
                {/* <Creative /> */}
                <HowWorks />
                <Contact />
            </Container>
        );
    }

}

export default Intro;
