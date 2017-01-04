import React, { Component } from 'react';
import SectionList from './section-list';
import Disqus from './disqus';

class Content extends Component {
  onNewComment(comment) {
    console.log(comment);
  }

  render() {
    const sections = this.props.data.sections;
    const disqus = this.props.config.disqus || {};

    return (
      <div className="content">
        <SectionList
          sections={sections} />
        {disqus.shortname &&
          <Disqus
            shortname={disqus.shortname}
            identifier={disqus.identifier}
            onNewComment={this.onNewComment} />
        }
      </div>
    );
  }
}

export default Content;
