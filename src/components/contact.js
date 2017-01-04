import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <li className={"contact " + this.props.type}>
        <a href={this.props.url}>{this.props.text}</a>
      </li>
    );
  }
}

export default Contact;
