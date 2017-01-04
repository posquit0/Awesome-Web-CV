import React, { Component } from 'react';
import Contact from './contact';

class ContactList extends Component {
  renderContact(contact) {
    return (
      <Contact
        key={contact.type}
        type={contact.type}
        text={contact.text}
        url={contact.url} />
    );
  }

  render() {
    const contacts = this.props.contacts || [];

    return (
      <ul className="contacts">
        {contacts.map(this.renderContact)}
      </ul>
    );
  }
}

export default ContactList;
