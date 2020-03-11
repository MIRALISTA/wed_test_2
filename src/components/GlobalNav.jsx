import React, { Component } from "react";
import { Link } from "@reach/router";

const menuStyle = {
  display: "flex",
  width: "80vw",
  justifyContent: "space-between",
  alignItems: "center",
  listStyleType: "none"
};

const LinkStyle = { color: "#4caf50" };

export default class GlobalNav extends Component {
  render() {
    return (
      <nav>
        <ul style={menuStyle}>
          <li>
            <Link style={LinkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/all">
              View All Employees
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/addemployee">
              Add Employee
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
