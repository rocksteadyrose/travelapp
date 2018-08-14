import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";
import { Card, CardTitle, CardText } from 'material-ui/Card';


export const Input = props => (
  <div id="form">
    <div className="container">
        <div className="main-section">
        <label className="title" htmlFor={props.htmlFor}>{props.valuehtml}</label>
        <br></br>
        <br></br>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="form-group">
                <input className="form-control"
                  // {...props} 
                  {...props}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

);

    Input.propTypes = {
      secretData: PropTypes.string.isRequired
    };
export default Input;