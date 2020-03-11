import * as React from "react";
import "./App.css";
import Home from "./components/Home";
import EditEmployee from "./components/EditEmployee";
import ViewAllEmployees from "./components/ViewAllEmployees";
import NotFound from "./components/NotFound";
import { Router } from "@reach/router";
import uuid from "react-uuid";
import AddEmployee from "./components/AddEmployee";
import GlobalNav from "./components/GlobalNav";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeListPopulated: true,
      characters: [
        {
          name: "Anne",
          job: "Tutor",
          uuid: uuid()
        },
        {
          name: "Helen",
          job: "Craft Brewer",
          uuid: uuid()
        },
        {
          name: "Mel",
          job: "Journalist",
          uuid: uuid()
        },
        {
          name: "Sean",
          job: "Tech Sales",
          uuid: uuid()
        }
      ]
    };
  }

  removePerson = evt => {
    console.log("DELETE OP");
    var index = evt.target.getAttribute("data-uuid");

    console.log("index = ", index);
    console.table(this.state.characters);

    // make a copy
    var charactersArray = [...this.state.characters];

    var temp = charactersArray.filter((item, i) => {
      return item.uuid !== index ? true : false;
    });

    if (temp.length === 0) {
      this.setState({ employeeListPopulated: false });
    }

    this.setState({ characters: temp }, () => {
      console.log(`record ${index} deleted`);
    });
  };

  editPerson = e => {
    e.preventDefault();

    var allFormElements = e.target.elements;

    var myname = allFormElements["employee-name"].value || "?";
    var myjob = allFormElements["employee-job"].value || "?";
    var myuuid = allFormElements["uuid"].value;

    // work on a copy
    let currentEmployees = [...this.state.characters];

    currentEmployees.find(ele => {
      if (ele.uuid === myuuid) {
        ele.name = myname || null;
        ele.job = myjob || null;
        this.setState({ characters: currentEmployees });
        console.table(this.state);
      }
    });
  };

  getSinglePerson = uuid => {
    let currentEmployees = [...this.state.characters];
    let singleObj = currentEmployees.find(ele => {
      if (ele.uuid === uuid) {
        return ele;
      }
    });

    // a ternary conditional
    return singleObj
      ? singleObj
      : { name: "not found", job: "not found", uuid: null };
  };

  addPerson = e => {
    e.preventDefault();

    var allFormElements = e.target.elements;
    var myname = allFormElements["employee-name"].value;
    var myjob = allFormElements["employee-job"].value;

    // store results in an obj for later in the methods
    // new person means we need a new uuid  as well
    let obj = {
      name: myname,
      job: myjob,
      uuid: uuid()
    };

    // now clear the fields back in the form
    allFormElements["employee-name"].value = "";
    allFormElements["employee-job"].value = "";

    // make a copy and work on it
    let currentEmployees = [...this.state.characters];

    let found = currentEmployees.find(ele => {
      if (ele.name === obj.name && ele.job === obj.job) {
        return true;
      }
    });

    if (found) {
      console.log("person already added alert the user");
      alert("Employees already exists");
    } else {
      // push to the end of the copied array and then overwrite the original. job done...
      currentEmployees.push(obj);
      this.setState({
        characters: currentEmployees,
        employeeListPopulated: true
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        <Router>
          <Home
            path="/"
            appstate={this.state.characters}
            removePerson={this.removePerson}
          />
          <ViewAllEmployees
            path="/all"
            allemployees={this.state.characters}
            removePerson={this.removePerson}
            employeeListPopulated={this.state.employeeListPopulated}
          />
          <AddEmployee path="/addemployee" addPerson={this.addPerson} />
          <EditEmployee
            path="/edit/:uuid"
            editPerson={this.editPerson}
            getSinglePerson={this.getSinglePerson}
          />
          <NotFound default />
        </Router>
      </React.Fragment>
    );
  }
}
