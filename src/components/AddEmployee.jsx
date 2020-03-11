import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/buttons.css";

export class AddEmployee extends Component {
  viewAll = e => {
    navigate(`/all`);
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.props.addPerson}>
          <label htmlFor="fname">Full Name:</label>
          <input type="text" id="fname" name="employee-name" required />

          <label htmlFor="job">Job Title:</label>
          <input type="text" id="job" name="employee-job" required />
          <br />
          <div className="add-button-wrapper">
            <button type="submit" className="add-button">
              Add Employee
            </button>
            <button type="button" className="add-button" onClick={this.viewAll}>
              Back to Employees
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
