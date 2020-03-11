import React, { Component } from "react";
import "../css/buttons.css";
import { navigate } from "@reach/router";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    console.log("EDIT");
  }

  goHome = e => {
    navigate(`/all`);
  };

  render() {
    {
      // get detai;s just for this person - the uuid is our lookup key
      var singlePersonObj = this.props.getSinglePerson(this.props.uuid);
    }
    return (
      <div className="edit-form-wrapper">
        <h1>Edit Employee</h1>
        <form onSubmit={this.props.editPerson}>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="employee-name"
            placeholder={singlePersonObj.name}
          />
          <label htmlFor="job">Job description:</label>
          <input
            type="text"
            id="job"
            name="employee-job"
            placeholder={singlePersonObj.job}
          />
          {/* coming from the route/address now */}
          <input type="hidden" name="uuid" value={this.props.uuid} />
          <br />
          <button type="submit" className="add-button">
            Update details
          </button>
        </form>
        <button className="add-button" onClick={this.goHome}>
          Return Home
        </button>
      </div>
    );
  }
}
