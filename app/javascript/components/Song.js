import React from "react";

const Song = ({ song, artist }) => {
  const { id, title, album, genre, created_at } = song
  return (
    <>
      <h1>Song: {title}</h1>
      <h4>Artist: {artist.name}</h4>
      <p>Album: {album}</p>
      <p>Album: {genre}</p>
      <p>Created at: {created_at}, ID: {id}</p>
      <a href={`/artists/${artist.id}/songs`}>Back to Songs</a>
      <br />
    </>
  );
}

export default Song;