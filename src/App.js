import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      //satas for showing the email error and name error
      nameError: "",
      passwordError: "",
    };
  }

  //defning the valid furntiojn
  valid() {
    if (!this.state.name.includes("@") && this.state.password.length <= 5) {
      this.setState({
        nameError: "Invalid Input",
        passwordError: "Length should more than 5",
      });
    } else if (!this.state.name.includes("@")) {
      this.setState({
        nameError: "Invalid Input",
      });
    } else if (this.state.password.length <= 5) {
      this.setState({
        passwordError: "Length should more than 5",
      });
    } else {
      return true;
    }
  }

  //defineing the submit funcito
  submit() {
    if (this.valid()) alert("Submit Successfull");
  }

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <p style={{ color: "blue", fontSize: "14px" }}>
          {this.state.nameError}
        </p>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <p style={{ color: "blue", fontSize: "14px" }}>
          {this.state.passwordError}
        </p>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
