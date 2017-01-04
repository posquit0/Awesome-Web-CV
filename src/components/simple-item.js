import React, { Component } from 'react';

class SimpleItem extends Component {
  render() {
    return (
      <div className="item item-simple">
        <span className="date">{this.props.date}</span>
        <span className="title">{this.props.title}</span>
        <span className="organization">{this.props.organization}</span>
        <span className="location">{this.props.location}</span>
      </div>
    );
  }
}

export default SimpleItem;
