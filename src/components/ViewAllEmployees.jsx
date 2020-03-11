import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/buttons.css";

export default class ViewAllEmployees extends Component {
  gotoEditPage = e => {
    let clicked_uuid = e.target.getAttribute("data-uuid");
    navigate(`/edit/${clicked_uuid}`);
  };
  render() {
    var rows = this.props.allemployees.map((item, index) => {
      return (
        <tr key={item.uuid}>
          <td>{item.name}</td>
          <td>{item.job}</td>
          <td>
            <button data-uuid={item.uuid} onClick={this.gotoEditPage}>
              Edit
            </button>
          </td>

          <td>
            <button
              className="add-button"
              data-uuid={item.uuid}
              onClick={this.props.removePerson}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="table-wrapper">
        <table className="striped-table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {this.props.employeeListPopulated ? null : (
          <h2>No employees left to display</h2>
        )}
      </div>
    );
  }
}

{
  /* if no employees then show this message */
}
