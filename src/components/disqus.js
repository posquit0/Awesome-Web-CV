import React, { Component } from 'react';
import Helmet from 'react-helmet';


class Disqus extends Component {

  constructor(...args) {
    super(...args);

    this.config = {
      shortname: this.props.shortname || null,
      identifier: this.props.identifier || 'awesome',
      url: this.props.url || window.location.href,
      title: this.props.title || document.title,
      categoryId: this.props.categoryId || null,
      language: this.props.language || 'en',
      onNewComment: this.props.onNewComment
    };
  }

  loadDisqus() {
    if (typeof DISQUS !== 'undefined') {
      const config = this.config;

      DISQUS.reset({
        reload: true,
        config: () => {
          this.page['identifier'] = config.identifier;
          this.page['url'] = config.url;
          this.page['title'] = config.title;
          this.page['category_id'] = config.categoryId;
          this.language = config.language;
        }
      });
    }
  }

  componentWillMount() {
    const config = this.config;
    window['disqus_shortname'] = config.shortname;
    window['disqus_identifier'] = config.identifier;
    window['disqus_url'] = config.url;
    window['disqus_title'] = config.url;
    window['disqus_category_id'] = config.categoryId;
    window['disqus_config'] = function () {
      this.callbacks.onNewComment = [config.onNewComment];
    };
  }

  componentDidMount() {
    this.loadDisqus();
  }

  componentWillUnmount() {
    delete window['disqus_shortname'];
    delete window['disqus_identifier'];
    delete window['disqus_url'];
    delete window['disqus_title'];
    delete window['disqus_category_id'];
    delete window['disqus_config'];
  }

  componentDidUpdate() {
    this.loadDisqus();
  }

  render() {
    const shortname = this.config.shortname;

    return (
      <div className="disqus-wrapper">
        <div id="disqus_thread" className="disqus-comments" />
        <Helmet script={[{
          "type": "text/javascript",
          "async": true,
          "src": `//${shortname}.disqus.com/embed.js` }]} />
      </div>
    );
  }
}

Disqus.propTypes = {
  /**
   * `shortname` tells the Disqus service your forum's shortname,
   * which is the unique identifier for your website as registered
   * on Disqus. If undefined , the Disqus embed will not load.
   */
  shortname: React.PropTypes.string.isRequired,

  /**
   * `identifier` tells the Disqus service how to identify the
   * current page. When the Disqus embed is loaded, the identifier
   * is used to look up the correct thread. If disqus_identifier
   * is undefined, the page's URL will be used. The URL can be
   * unreliable, such as when renaming an article slug or changing
   * domains, so we recommend using your own unique way of
   * identifying a thread.
   */
  identifier: React.PropTypes.string,

  /**
   * `title` tells the Disqus service the title of the current page.
   * This is used when creating the thread on Disqus for the first time.
   * If undefined, Disqus will use the <title> attribute of the page.
   * If that attribute could not be used, Disqus will use the URL of the page.
   */
  title: React.PropTypes.string,

  /**
   * `url` tells the Disqus service the URL of the current page.
   * If undefined, Disqus will take the window.location.href.
   * This URL is used to look up or create a thread if disqus_identifier
   * is undefined. In addition, this URL is always saved when a thread is
   * being created so that Disqus knows what page a thread belongs to.
   */
  url: React.PropTypes.string,

  /**
   * `categoryId` tells the Disqus service the category to be used for
   * the current page. This is used when creating the thread on Disqus
   * for the first time.
   */
  categoryId: React.PropTypes.string,

  /**
   * `onNewComment` function accepts one parameter `comment` which is a
   * JavaScript object with comment `id` and `text`. This allows you to track
   * user comments and replies and run a script after a comment is posted.
   */
  onNewComment: React.PropTypes.func
};

export default Disqus;
