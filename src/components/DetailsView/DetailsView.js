import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import './DetailsView.css';
import Avatar from '../../components/Avatar/Avatar';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        avatar: '',
        first_name: '',
        last_name: '',
      },
      location: {},
    };
  }

  componentDidMount() {
    fetch(`https://reqres.in/api/users/${this.props.userId}`)
      .then(response => response.json())
      .then(data => this.setState({
        userData: data.data,
      }));
  }

  render() {
    return (
      <div className="details-view">
        <div className="details-view-title">
          <Avatar url={this.state.userData.avatar} radiusInPx={60} />
          <div className="details-view-name">
            {`${this.state.userData.first_name} ${this.state.userData.last_name}`}
          </div>
          <Link to="/"><FontAwesomeIcon className="times-icon" icon={faTimes} /></Link>
        </div>
        <div className="details-view-information">
          <h4>Beskrivning</h4>
          Beskrivningen kan vara samma på alla profiler
          <h4>Adress till bild</h4>
          {this.state.userData.avatar}
        </div>
      </div>
    );
  }
}

DetailsView.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DetailsView;
