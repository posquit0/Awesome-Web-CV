import React, { Component } from 'react';
import SimpleItem from './simple-item';
import DetailItem from './detail-item';
import GithubItem from './github-item';

export default class ItemList extends Component {
  constructor(...args) {
    super(...args);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    switch (this.props.type) {
    case 'simple':
      return (
        <SimpleItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date} />
      );
    case 'detail':
      return (
        <DetailItem
          title={item.title}
          organization={item.organization}
          location={item.location}
          date={item.date}
          descriptions={item.descriptions} />
      );
    case 'github':
      return (
        <GithubItem
          repository={item.repository}
          title={item.title}
          description={item.description} />
      );
    }
  }

  render() {
    const type = this.props.type;
    const items = this.props.items || [];

    return (
      <div className="items">
        {items.map(this.renderItem)}
      </div>
    );
  }
}
