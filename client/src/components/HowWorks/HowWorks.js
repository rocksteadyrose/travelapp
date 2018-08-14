import React from "react";
import"./HowWorks.css";

const HowWorks = () => (

<section id="services">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading">How it Works</h2>
      <hr className="my-4" />
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-6 text-center">
      <div className="service-box mt-5 mx-auto">
        {/* <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i> */}
        <img className="howWorks" src="/images/location.png" alt="Destination"/>
        <h3 className="mb-3">Destination</h3>
        <p className="text-muted mb-0">Where are you going?</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 text-center">
      <div className="service-box mt-5 mx-auto">
        {/* <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i> */}
        <img className="howWorks" src="/images/date.png" alt="Dates"/>
        <h3 className="mb-3">Dates</h3>
        <p className="text-muted mb-0">When are you going?</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 text-center">
      <div className="service-box mt-5 mx-auto">
        {/* <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i> */}
        <img className="howWorks" src="/images/wheather.png" alt="Weather"/>
        <h3 className="mb-3">What's the Weather?</h3>
        <p className="text-muted mb-0">We'll take your date range & find out the weather in your destination!</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 text-center">
      <div className="service-box mt-5 mx-auto">
        {/* <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i> */}
        <img className="howWorks" src= "/images/pack.png" alt="Outfit"/>
        <h3 className="mb-3">Here's Your Outfit!</h3>
        <p className="text-muted mb-0">We'll give you some inspiration to help you pack for you trip!</p>
      </div>
    </div>
  </div>
</div>
</section>
        );

export default HowWorks;