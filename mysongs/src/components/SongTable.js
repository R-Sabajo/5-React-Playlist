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
              <div>
                <button onClick={() => this.props.sortSongs('titleA')}>
                  A
                </button>
                <button onClick={() => this.props.sortSongs('titleZ')}>
                  Z
                </button>
              </div>
            </th>
            <th className="song-row__item">
              <span>Artist</span>
              <div>
                <button onClick={() => this.props.sortSongs('artistA')}>
                  A
                </button>
                <button onClick={() => this.props.sortSongs('artistZ')}>
                  Z
                </button>
              </div>
            </th>
            <th className="song-row__item">
              <span>Genre</span>
              <div>
                <button onClick={() => this.props.sortSongs('genreA')}>
                  A
                </button>
                <button onClick={() => this.props.sortSongs('genreZ')}>
                  Z
                </button>
              </div>
            </th>
            <th className="song-row__item">
              <span>Rating</span>

              <div>
                <button onClick={() => this.props.sortSongs('rating5')}>
                  5
                </button>
                <button onClick={() => this.props.sortSongs('rating1')}>
                  1
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default SongTable;
