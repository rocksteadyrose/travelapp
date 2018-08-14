import React from "react";
import FormBtn from "./FormBtn";

import "./Input.css";


export const Form = props => (
<section id="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="form-group">
              <input className="form-control" />
            </div>
            {/* <FormBtn>SUBMIT NOTE</FormBtn> */}
          </div>
        </div>
      </div>
</section>
);

export default Form;