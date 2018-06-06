/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import CoverFlow from './CoverFlow';
import './App.css';

const songList = [
  {
    title: 'Kings and Queens',
    artist: '30 Seconds to Mars',
    cover: './img/kings.jpg',
    link: './kings.mp3',
  },
  {
    title: 'Just The Way You Are',
    artist: 'Bruno Mars',
    cover: './img/bruno.jpg',
    link: './bruno.mp3',
  },
  {
    title: 'Voyager',
    artist: 'BUMP OF CHICKEN',
    cover: './img/voyager.jpg',
    link: './voyager.mp3',
  },
  {
    title: 'Viva La Vida',
    artist: 'Coldplay',
    cover: './img/viva.jpg',
    link: './viva.mp3',
  },
  {
    title: 'Good Riddance',
    artist: 'Green Days',
    cover: './img/good.jpg',
    link: './good.mp3',
  },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: songList };
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }
  nextSong() {
    const oldlist = this.state.list;
    const newlist = [];
    newlist.push(oldlist[1]);
    newlist.push(oldlist[2]);
    newlist.push(oldlist[3]);
    newlist.push(oldlist[4]);
    newlist.push(oldlist[0]);
    this.setState({ list: newlist });
  }
  prevSong() {
    const oldlist = this.state.list;
    const newlist = [];
    newlist.push(oldlist[4]);
    newlist.push(oldlist[0]);
    newlist.push(oldlist[1]);
    newlist.push(oldlist[2]);
    newlist.push(oldlist[3]);
    this.setState({ list: newlist });
  }
  render() {
    return (
      <div className="App">
        <div className="fullpage bg-light">
          <div className="container d-flex justify-content-center align-content-center flex-column h-100">
            <CoverFlow list={this.state.list} />
            <div className="d-flex justify-content-center my-3">
              <ReactAudioPlayer
                src={this.state.list[2].link}
                autoPlay
                controls
              />
            </div>
            <div className="text-center my-2">
              <button className="btn btn-secondary mx-1" onClick={this.prevSong}>&#9668;</button>
              <button className="btn btn-secondary mx-1" onClick={this.nextSong}>&#9658;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
