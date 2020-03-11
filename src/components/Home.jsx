import * as React from "react";
import "../App.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2>Work Rules</h2>
        <h4>Human Resources</h4>
        <p>
          The department within a business responsible for the progression of
          the company through people management.{" "}
        </p>
        <p>
          Usually hated by employees at lower levels due to managers passing on
          their dirty work i.e disciplinaries, firing and redundancies.
        </p>
        Manager to employee:
        <br /> Don't worry Jack, I'm the best manager in the world and I'll make
        sure you won't lose your job. <br />
        Manager to Human Resources Rep:
        <br /> This Jack guy is a liability. I need to get rid of him, will you
        dismiss him for me. <br />
        Jack to his friends: <br />
        My manager was great. He did everything he could to save my job but HR
        fired me.
      </div>
    );
  }
}
