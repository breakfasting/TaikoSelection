/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

import React, { Component } from 'react';

class Song extends Component {
  render() {
    return (
      <div className={(this.props.current) ? 'current song mx-2' : 'song mx-2'} >
        <div className="card shadow">
          <img className="card-img-top" src={this.props.cover} alt={this.props.title} />
          <div className="card-body text-center">
            <h5 className="card-title text-nowrap text-truncate">{this.props.title}</h5>
            <p className="card-text text-nowrap text-truncate">{this.props.artist}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Song;
