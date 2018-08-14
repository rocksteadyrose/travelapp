import React from "react";
import"./Contact.css";

const Contact = () => (

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center socialMediaCol">

            <h2 className="section-heading  animated shake">Let's Stay In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5 contactMe">FOLLOW US: </p>
            <a href="" target="blank"> <img className="social-media" src="/images/twitter.jpg" alt="twitter"/></a>
            <a href="" target="blank"> <img className="social-media" src="/images/insta.jpg" alt="instagram"/></a>
            <a href="" target="blank"> <img className="social-mediaF" src="/images/fb.jpg" alt="facebook"/></a>

          </div>
        </div>
      </div>

        <br/>
        <br/>

      <section id="email">
        <p class="emailText"> Sign up to receive news & updates!</p>
        <div class="container">
          <div class="row">   
            <div class="col-lg-8 mx-auto text-center emailBar">
              <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>

              <div class='ui action input'>
              

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center emailBar">
              <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>

              <div className='ui action input'>

                <input type='email' placeholder='Email' />
                  <button type="submit" className='ui button'>
                  <i aria-hidden='true' className='white angle right large icon' id="arrow" /> 
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
      
     
    </section>
)
export default Contact;