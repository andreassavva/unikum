import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './ContactsView.css';
import ContactListItem from '../../components/ContactListItem/ContactListItem';

class ContactsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 0,
      contactList: [],
    };
  }

  componentDidMount() {
    this.getDataForMultiplePages(this.props.page);
  }

  componentWillReceiveProps(newProps) {
    this.getDataForMultiplePages(parseInt(newProps.page, 10));
  }

  getDataForMultiplePages(currentPage) {
    const functionsArr = [];
    for (let i = 1; i <= currentPage; i++) {
      functionsArr.push(this.fetchUserData(i));
    }
    return Promise.all(functionsArr)
      .then((data) => {
        const contactDataArray = [];
        for (let i = 0; i < data.length; i++) {
          contactDataArray.push(...data[i].data);
        }
        this.setState({
          page: parseInt(currentPage, 10),
          totalPages: data[0].total_pages,
          contactList: contactDataArray,
        });
      });
  }

  fetchUserData(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => response.json());
  }

  render() {
    return (
      <div className="contacts-list-container">
        <ul className="contacts-list">
          {this.state.contactList.map(contact => <ContactListItem key={contact.id} {...contact} />)}
        </ul>
        {this.state.page < this.state.totalPages ?
          <div className="load-more-button-container">
            <Link to={`/contacts/${this.state.page + 1}`}>
              <div className="load-more-button">Ladda fler</div>
            </Link>
          </div> :
          <div />
        }
      </div>
    );
  }
}

ContactsView.propTypes = {
  page: PropTypes.string.isRequired,
};

export default withRouter(ContactsView);
