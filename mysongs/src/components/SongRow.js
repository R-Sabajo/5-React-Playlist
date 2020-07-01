import React from 'react';

class SongRow extends React.Component {
  render() {
    const song = this.props.song;
    const deleteSong = this.props.handleDeleteSong;
    return (
      <tr className="song-row">
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td className="del-btn-col">
          {song.rating}
          <button
            className="del-btn"
            onClick={() => this.props.deleteSong(song.id)}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}
export default SongRow;
