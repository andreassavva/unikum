import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <img
        className="avatar"
        style={{ maxWidth: this.props.radiusInPx, maxHeight: this.props.radiusInPx }}
        src={this.props.url}
      />
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  radiusInPx: PropTypes.number.isRequired,
};

export default Avatar;
