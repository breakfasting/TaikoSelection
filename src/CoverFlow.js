/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types, max-len */

import React, { Component } from 'react';
import Song from './Song';

class CoverFlow extends Component {
  render() {
    return (
      <div className="song-list">
        <Song title={this.props.list[0].title} artist={this.props.list[0].artist} cover={this.props.list[0].cover} />
        <Song title={this.props.list[1].title} artist={this.props.list[1].artist} cover={this.props.list[1].cover} />
        <Song title={this.props.list[2].title} artist={this.props.list[2].artist} cover={this.props.list[2].cover} current />
        <Song title={this.props.list[3].title} artist={this.props.list[3].artist} cover={this.props.list[3].cover} />
        <Song title={this.props.list[4].title} artist={this.props.list[4].artist} cover={this.props.list[4].cover} />
      </div>
    );
  }
}

export default CoverFlow;
