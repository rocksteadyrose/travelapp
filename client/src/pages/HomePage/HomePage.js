import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowWorks from "../../components/HowWorks/HowWorks";
import Contact from "../../components/Contact/Contact";
import { Container } from "../../components/Grid";

import { Card, CardTitle, CardText } from 'material-ui/Card';

class Intro extends Component {

    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }
 
    render() {
        return (
            <Container>
                <Header/>
                <About />         
                <HowWorks />
                <Contact />
            </Container>
        );
    }

}

export default Intro;
