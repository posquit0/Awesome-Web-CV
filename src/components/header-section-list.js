import React, { Component } from 'react';

export default class HeaderSectionList extends Component {
  renderSection(section) {
    return (
      <span>Section</span>
    );
  }

  render() {
    return (
      <div className="sections">
        {this.props.sections.map(this.renderSection)}
      </div>
    );
  }
}
