import React, { Component } from "react";
import { getShort } from "./shortUrl";

class CustomURL extends Component {
  state = {
    original: "",
    short: "",
  };

  onChange = (url) => {
    this.setState({ original: url });
  };

  handleClick = () => {
    const short = getShort();
    this.setState({ short });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Enter URL here..."
          onChange={(e) => this.onChange(e.currentTarget.value)}
        />
        <button onClick={this.handleClick} className="btn btn-primary">
          Shorten URL
        </button>

        <table className="table m-3">
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href={this.state.original}>{this.state.original}</a>
              </td>
              <td>
                <a href={this.state.original}>{this.state.short}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomURL;
