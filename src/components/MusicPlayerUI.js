import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
 
const playlist = [
  {
    url: 'https://failai.us//Alan_Walker_-_Alone_%28tophitai.lt%29.mp3',
    cover: 'https://i.pinimg.com/originals/fd/49/ee/fd49ee7e110454f1daaf0836d1bd0539.jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  }
]


export default class MusicPlayerUI extends Component {
  render() {
    return (
      <div>
        <MusicPlayer playlist={playlist} />
      </div>
    );
  }
}