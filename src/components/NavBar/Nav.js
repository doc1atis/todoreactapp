import React from "react";

class NavBar extends React.Component {
  state = { email: "", password: "", isAuth: false };
  handleEmailOnchange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordOnChange = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="">
          TODO
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            placeholder="email"
            type="text"
            name="email"
            onChange={this.handleEmailOnchange}
          />
          <input className="form-control mr-sm-2" type="text" />
          <button className="btn btn-outline-success my-2 my-sn-0">
            Sign Up| Sign In
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
