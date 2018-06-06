/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import CoverFlow from './CoverFlow';
import './App.css';

const songList = [
  {
    title: 'Kings and Queens',
    artist: '30 Seconds to Mars',
    cover: 'https://i.imgur.com/PwcYOdq.jpg',
    link: './kings.mp3',
  },
  {
    title: 'Just The Way You Are',
    artist: 'Bruno Mars',
    cover: 'https://i.imgur.com/1dq7CHe.jpg',
    link: './bruno.mp3',
  },
  {
    title: 'Voyager',
    artist: 'BUMP OF CHICKEN',
    cover: 'https://i.imgur.com/JdmBN2A.jpg',
    link: './voyager.mp3',
  },
  {
    title: 'Viva La Vida',
    artist: 'Coldplay',
    cover: 'https://i.imgur.com/x2lWaDj.jpg',
    link: './viva.mp3',
  },
  {
    title: 'Good Riddance',
    artist: 'Green Days',
    cover: 'https://i.imgur.com/0wN4JKH.jpg',
    link: './good.mp3',
  },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullpage bg-light">
          <div className="container d-flex justify-content-center align-content-center flex-column h-100">
            <CoverFlow list={songList} />
            <ReactAudioPlayer
              src={songList[2].link}
              autoPlay
              controls
            />
            <div className="text-center my-3">
              <button className="btn btn-secondary mx-1" type="submit">&#9668;</button>
              <button className="btn btn-secondary mx-1" type="submit">&#9658;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
