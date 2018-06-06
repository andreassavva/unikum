import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import './ContactListItem.css';
import Avatar from '../../components/Avatar/Avatar';

class ContactListItem extends Component {
  render() {
    return (
      <li className="contact-list-item-container">
        <Link to={`/profile/${this.props.id}`}>
          <div className="contact-list-item">
            <Avatar url={this.props.avatar} radiusInPx={40} />
            <div className="contact-name">
              {this.props.first_name} <b>{this.props.last_name}</b>
            </div>
            <div className="list-item-badge">L</div>
            <FontAwesomeIcon className="chevron-icon" icon={faChevronRight} size="lg" />
          </div>
        </Link>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
};

export default ContactListItem;
