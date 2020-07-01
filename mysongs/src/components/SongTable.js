import React, { Component } from 'react';
import SongRow from './SongRow';

export class SongTable extends Component {
  render(props) {
    const rows = [];
    this.props.songs.forEach(song => {
      rows.push(
        <SongRow
          deleteSong={this.props.handleDeleteSong}
          song={song}
          id={song.id}
          key={song.id}
        />
      );
    });

    return (
      <table className="table">
        <thead>
          <tr className="song-header">
            <th className="song-row__item">
              <span>Title</span>
              <button onClick={() => this.props.sortSongs('titleA')}>Az</button>
              <button onClick={() => this.props.sortSongs('titleZ')}>Za</button>
            </th>
            <th className="song-row__item">
              <span>Artist</span>
              <button onClick={() => this.props.sortSongs('artistA')}>
                Az
              </button>
              <button onClick={() => this.props.sortSongs('artistZ')}>
                Za
              </button>
            </th>
            <th className="song-row__item">
              <span>Genre</span>
              <button onClick={() => this.props.sortSongs('genreA')}>Az</button>
              <button onClick={() => this.props.sortSongs('genreZ')}>Za</button>
            </th>
            <th className="song-row__item">
              <span>Rating</span>
              <button onClick={() => this.props.sortSongs('rating5')}>
                5-1
              </button>
              <button onClick={() => this.props.sortSongs('rating1')}>
                1-5
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default SongTable;
