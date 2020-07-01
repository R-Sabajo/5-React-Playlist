import React, { Component } from 'react';

export class SongForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      artist: '',
      genre: '',
      rating: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { title, artist, genre, rating } = this.state;
    if (title === '' || artist === '' || genre === '' || rating === '') return;
    this.props.addSong(this.state);
    this.setState({ title: '', artist: '', genre: '', rating: '' });
  }

  render() {
    return (
      <div className="Songform">
        <input
          type="text"
          placeholder="Title..."
          name="title"
          required="true"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Artist..."
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Genre..."
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />

        <select
          id="rating"
          name="rating"
          value={this.state.rating}
          onChange={this.handleChange}
        >
          <option value="">--Rating--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button id="add-song-btn" onClick={this.handleSubmit}>
          Add Song
        </button>
      </div>
    );
  }
}

export default SongForm;
