import React, { Component } from 'react';
import Section from './section';

export default class SectionList extends Component {
  renderSection(section) {
    return (
      <Section
        key={section.title}
        title={section.title}
        description={section.description}
        type={section.type}
        items={section.items} />
    );
  }

  render() {
    const sections = this.props.sections || [];

    return (
      <div className="sections">
        {sections.map(this.renderSection)}
      </div>
    );
  }
}
