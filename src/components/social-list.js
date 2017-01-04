import React, { Component } from 'react';
import Social from './social';

class SocialList extends Component {
  renderSocial(social) {
    return (
      <Social
        key={social.type}
        type={social.type}
        text={social.text}
        url={social.url} />
    );
  }

  render() {
    const socials = this.props.socials || [];

    return (
      <div className="socials">
        {socials.map(this.renderSocial)}
      </div>
    );
  }
}

export default SocialList;

