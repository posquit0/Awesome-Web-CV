import React, { Component } from 'react';
import ContactList from './contact-list';
import SocialList from './social-list';
import HeaderSectionList from './header-section-list';
import Profile from './profile';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Profile
          firstName={this.props.data.firstName}
          lastName={this.props.data.lastName}
          position={this.props.data.position}
          quote={this.props.data.quote}
          photo={this.props.data.photo} />
        <SocialList
          socials={this.props.data.socials} />
        <ContactList
          contacts={this.props.data.contacts} />
        <HeaderSectionList sections={[{a:1},{a:2}]} />
      </header>
    );
  }
}
