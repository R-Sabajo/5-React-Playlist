import React, { Component } from 'react';
import Header from './Header';
import SongForm from './SongForm';
import SongTable from './SongTable';
import Footer from './Footer';

const apiUrl = `https://rama-sabajo.firebaseio.com/songs`;

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDeleteSong = this.handleDeleteSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  async getSongs() {
    fetch(`${apiUrl}.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        const res = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          artist: data[key].artist,
          genre: data[key].genre,
          rating: data[key].rating,
        }));
        this.setState({ songs: res });
      })
      .catch(error => console.log(error));
  }

  async componentDidMount() {
    this.getSongs();
  }

  handleAddSong(song) {
    const data = {
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    const request = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    fetch(`${apiUrl}.json`, request)
      .then(response => response.json())
      .then(data => {
        this.getSongs();
      })
      .catch(error => console.log(error));
  }

  handleDeleteSong(id) {
    const baseUrl = 'https://rama-sabajo.firebaseio.com';
    const apiUrl = `${baseUrl}/songs/${id}.json`;
    fetch(apiUrl, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        this.getSongs();
      })
      .catch(error => console.log(error));
  }

  handleSort(sort) {
    const songs = [...this.state.songs];
    const sortedArray =
      sort === 'titleA'
        ? songs.sort((a, b) => a.title.localeCompare(b.title))
        : sort === 'titleZ'
        ? songs.sort((a, b) => b.title.localeCompare(a.title))
        : sort === 'artistA'
        ? songs.sort((a, b) => a.artist.localeCompare(b.artist))
        : sort === 'artistZ'
        ? songs.sort((a, b) => b.artist.localeCompare(a.artist))
        : sort === 'genreA'
        ? songs.sort((a, b) => a.genre.localeCompare(b.genre))
        : sort === 'genreZ'
        ? songs.sort((a, b) => b.genre.localeCompare(a.genre))
        : sort === 'rating1'
        ? songs.sort((a, b) => a.rating.localeCompare(b.rating))
        : sort === 'rating5'
        ? songs.sort((a, b) => b.rating.localeCompare(a.rating))
        : null;
    this.setState({ songs: sortedArray });
  }

  render() {
    return (
      <div className="song-overview">
        <Header />
        <SongForm addSong={this.handleAddSong} />
        <SongTable
          handleDeleteSong={this.handleDeleteSong}
          songs={this.state.songs}
          sortSongs={this.handleSort}
        />
        <Footer />
      </div>
    );
  }
}

export default SongOverview;
