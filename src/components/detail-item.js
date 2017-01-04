import React, { Component } from 'react';

class DetailItem extends Component {
  constructor(...args) {
    super(...args);

    this.renderDescriptions = this.renderDescriptions.bind(this);
  }

  renderDescriptions() {
    const descriptions = this.props.descriptions;

    return (
      <ul className="descriptions">
        {descriptions.map((description) => {
          return <li><span>{description}</span></li>;
        })}
      </ul>
    );
  }

  render() {
    const descriptions = this.props.descriptions;

    return (
      <div className="item item-detail">
        <span className="title">{this.props.title}</span>
        <span className="location"><i>{this.props.location}</i></span>
        <span className="organization"><small>{this.props.organization}</small></span>
        <span className="date"><small>{this.props.date}</small></span>
        {descriptions && this.renderDescriptions()}
      </div>
    );
  }
}

export default DetailItem;
