import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    // when we have a callback in DOM has a refrence to this and makes a refrense to this we need to bind this to it
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    //to prevent changing the url after press sumbit button
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          className="form-control"
          placeholder="Get a five day forcast in your favourite cities"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//passing null as passing dispathes must be the seconed argument in connect function
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
