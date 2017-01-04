import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <a
        className={"social " + this.props.type}
        href={this.props.url}
        target="_blank"
        title={this.props.text}>
      </a>
    );
  }
}

export default Social;

