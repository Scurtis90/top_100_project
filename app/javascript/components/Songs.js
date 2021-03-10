import React from "react";

const Songs = ({ songs, artist }) => {
  const { id, name } = artist;
  return (
    <>
      <h1>Songs from {name} </h1>
      <a href={`/`}>Back to Billboards</a>
      <br />
      <a href={`/artists/${id}/songs/new`}>New Song</a>
      { songs.map((song) => (
        <div key={song.id}>
          <h3>Title: {song.title}</h3>
          <p>Album: {song.album}</p>
          <p>Genre: {song.genre}</p>
          <a href={`/artists/${artist.id}/songs/${song.id}`}>Show Song</a> 
          <br />
          <a href={`/artists/${artist.id}/songs/${song.id}/edit`}>Edit Song</a>
          <br />
          <a href={`/artists/${artist.id}/songs/${song.id}`} data-method="delete">
            Delete Song
          </a>
        </div>
      ))}
    </>
  )
}

export default Songs;