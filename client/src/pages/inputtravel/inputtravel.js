import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import TripButton from "../../components/TripButton";
import { Input, FormBtn } from "../../components/Travel Form";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

class inputtravel extends Component {
    state = {
        startDate: "",
        endDate: "",
        city: "",
        state: "",
        country: "",
        flightNumber: "",
        hotel: "",
        weatherDescriptions: "",
        trips: [],
        imageObject: {}
    };

    componentDidMount() {
        this.loadTravel();
    }

    loadTravel = () => {
        API.findAllTravel()
            .then(res =>
                this.setState({ trips: res.data })
            )
        console.log(this.state.trips)
        // .catch(err => console.log(err));
    }

    deleteTravel = travelId => {
        API.deleteTravel(travelId)
            .then(res => this.loadTravel())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createTravel(
            {
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                city: this.state.city,
                country: this.state.country,
            }
        )
            .then(res => this.loadTravel()
            )
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                <form>
                    <Input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="Where are you going?"
                    />
                    <Input
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                        name="startDate"
                        placeholder="When are you leaving?"
                    />
                    <Input
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                        name="endDate"
                        placeholder="When are you getting back?"
                    />
                    <Input
                        value={this.state.country}
                        onChange={this.handleInputChange}
                        name="country"
                        placeholder="What country are you going to?"
                    />
                    
                    <FormBtn
                        disabled={!(this.state.city && this.state.startDate && this.state.endDate && this.state.country)}
                        onClick={this.handleFormSubmit}
                    >
                        SUBMIT
              </FormBtn>
                </form>

                <Jumbotron>
                    {this.state.trips.length ? (
                        <List>Your trips
                        {this.state.trips.map(trip => (
                                <ListItem key={trip._id}>
                                    {/* <Link to={"/calendar/" + trip._id}> */}
                                    <Link to={"/travel/" + trip._id}>

                                        <strong>
                                            {trip.city}
                                        </strong>
                                        {/* </Link> */}
                                        {/*                                 
                                <TripButton id={trip._id} onClick={this.getCalendar} /> */}
                                    </Link>

                                    <DeleteBtn onClick={() => this.deleteTravel(trip._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Jumbotron>
            </Container>

        );
    }
}


export default inputtravel;
