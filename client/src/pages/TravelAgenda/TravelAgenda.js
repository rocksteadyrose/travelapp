import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";
import FavBtn from "../../components/FavBtn";
import DeleteBtn from "../../components/DeleteBtn";
import FinalPageJumbotron from "../../components/FinalPageJumbotron";
import { Link } from "react-router-dom";
import "./TravelAgenda.css";
import { Input, FormBtn } from "../../components/TravelForm";

class TravelAgenda extends Component {
    state = {
            trip: { 
            imageObjects: [],
            inputText: [],
            city: null,
            country: null,
            startDate: null,
            endDate: null,
            hotel: null,
            flightNumber: null,
            packingList: []
            },
        weather: null,
        isLoading: true,
        tumblr: null
    };

    componentDidMount() {
        this.loadUserTravel();
    }

    loadUserTravel = () => {
        API.findOneTravel(this.props.match.params.travelId)
            .then(res => { 
                console.log(res)
                this.setState({
                weather: res.data.weather,
                tumblr: res.data.tumblr,
                trip: res.data.travel,
                packingList: res.data.travel.packingList,
                imageObjects: res.data.travel.imageObjects,
                inputText: res.data.travel.inputText 
             } )} )

            .then(() => this.setState({ isLoading: false }))
            .catch(err => console.log(err));
    }

    deleteTrip = travelId => {
        API.deleteTravel(travelId)
            .then(res => this.props.history.push('/')
            ).catch(err => console.log(err));
    };


    deleteImages = id => {
        const imageObjects = this.state.trip.imageObjects.filter(image => {
            return image.id !== id;
        });
        console.log(id, this.state.trip.imageObjects, imageObjects)

        this.setState({
            trip: {
                ...this.state.trip,
                imageObjects,
            }
        });

        API.editTravel(this.props.match.params.travelId, { imageObjects })

    };

    saveImages = (id, tumblrImage) => {

        const notes = [];
        const imageObjects = this.state.trip.imageObjects.concat([{ id, tumblrImage, notes }]);
        console.log(imageObjects);
        this.setState({
            trip: {
                ...this.state.trip,
                imageObjects,
            }
        });

        API.editTravel(this.props.match.params.travelId, { imageObjects })
            .then(res =>
                this.loadUserTravel())
            .catch(err => console.log(err));
    }

    deletePackingListItem = (id) => {
        const packingListById = this.state.packingList.filter(listItem => {
            return listItem !== id;
        });
        console.log(id)
        console.log(packingListById)

        this.setState({
            packingList: packingListById
        })
        this.state.packingList.splice(-1, 1)
        API.editTravel(this.props.match.params.travelId, { packingList: packingListById })
            .then(res =>
                this.setState({
                    trip: {
                        ...this.state.trip,
                        packingList: res.data
                    }
                }))
        console.log(this.state.packingList)
    }

    handleFormSubmit = (list, event) => {

        event.preventDefault();

        const packingList = this.state.packingList.concat([{ packingList: list }]);

        packingList.splice(-1, 1)

        packingList.push(list)

        this.setState({ packingList: [...this.state.packingList, list] })

        API.editTravel(this.props.match.params.travelId, { packingList: packingList })

            .then(res =>

                this.setState({

                    trip: {
                        ...this.state.trip,
                        packingList: res.data
                    }
                }))

            .catch(err => console.log(err));

        console.log(packingList)

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    renderTumblrItem(tum) {
        if (!tum.photos) return false;

        return (
            <ListItem key={tum.id}>
                <img src={tum.photos[0].original_size.url} alt="tumblrImg" style={{ width: 200, }} />
                <FavBtn onClick={() => this.saveImages(tum.id, tum.photos[0].original_size.url)} />
            </ListItem>
        );
    }


    render() {

        return (
            <Container>
                <FinalPageJumbotron className="FinalPageJumbotron" />


                {!this.state.isLoading &&

                    <section className="travelDeets">

                        {/* <div className="buttons center"> */}
                        <button className="deleteTripButton btn" onClick={() => this.deleteTrip(this.state.trip._id)} >DELETE TRIP</button>

                        <button className="addTripButton btn"><Link to={"/travels/"}>ADD ANOTHER TRIP</Link></button>
                        {/* </div> */}

                        <div className='ui grid'>
                            <div className='detailsRow left floated six wide column'>

                                <h3><strong>City: </strong></h3>{this.state.trip.city}<br />

                                <h3><strong>Country:</strong></h3> {this.state.trip.country}<br />

                                <h3><strong>Start Date:
                                    </strong></h3> {this.state.trip.startDate}<br />

                                <h3><strong>End Date:
                                    </strong></h3>{this.state.trip.endDate}<br />
                            </div>
                            <div className='ui grid'>
                                <div className='detailsRow right floated six wide column'>

                                    <h3><strong>Flight:
                                    </strong></h3> {this.state.trip.flightNumber}<br />

                                    <h3><strong>Hotel:
                                    </strong></h3> {this.state.trip.hotel}
                                    <br />

                                    <h3><strong>Weather details</strong></h3>
                                    <p>{this.state.weather.weather[0].description}</p>
                                    <h3><strong>Temperature</strong></h3>
                                    <p>{this.state.weather.main.temp}</p>
                                </div>
                            </div>


                        </div>

                        <div className='ui grid'>
                            <div className='picsRow left floated six wide column'>
                                <h3>Fashion pics</h3>
                                {this.state.tumblr.length ? (

                                    <List>
                                        {this.state.tumblr.map(tum => this.renderTumblrItem(tum))}
                                    </List>
                                )
                                    :
                                    (
                                        <h3>No Results to Display</h3>
                                    )}

                            </div>

                            <div className='savedAreaPics right floated six wide column'>

                                <div className="savedArea"><h3>Saved fashion pics</h3></div>
                                {this.state.trip.imageObjects.length ? (
                                    <List>
                                        {this.state.trip.imageObjects.map(saved => (

                                            <ListItem key={saved.id}>
                                                <img src={saved.tumblrImage} alt="favedtumblrimg" style={{ width: 200 }} />

                                                <DeleteBtn onClick={() => this.deleteImages(saved.id)} />

                                            </ListItem>
                                        ))
                                        }

                                    </List>
                                ) :
                                    (
                                        <h3>No Results to Display</h3>

                                    )}

                            </div>

                        </div>

                        <div className="packingArea twelve wide column">
                            <div className="row">
                                <div className='twelve wide column packingArea align-content-center'>

                                    <Input
                                        name="inputText"
                                        value={this.state.inputText}
                                        placeholder="What should you pack?"
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">

                                <div className='twelve wide column packingArea formBtn'>

                                    <FormBtn className="formButton" disabled={!(this.state.inputText)} onClick={(event) => this.handleFormSubmit(this.state.inputText, event)}>
                                        Submit new item to packing list
                                                </FormBtn>
                                </div>
                            </div>
                            <div className="row">

                                <div className='twelve wide column packingArea'>
                                    {this.state.packingList.length ? (
                                        <List>
                                            {this.state.packingList.map(listItem => (
                                                <ListItem key={listItem}>
                                                    <strong>
                                                        {listItem}
                                                    </strong>
                                                    <DeleteBtn onClick={() => this.deletePackingListItem(listItem)} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </div>
                            </div>
                        </div>
                    </section>

                }
            </Container>
        );
    }
}

export default TravelAgenda;