import React from "react";

const SongNew = ({ artist, song }) => {
  const { title, album, genre } = song;
  const defaultTitle = title ? title : "";
  const defaultAlbum = album ? album : "";
  const defaultGenre = genre ? genre : "";
  return (
    <>
      <h1>New Song</h1>
      <form action={`/artists/${artist.id}/songs`} method="post">
      <p>Title</p>
      <input defaultValue={defaultTitle} name="song[title]" type="string" />
      <p>Album</p>
      <input defaultValue={defaultAlbum} name="song[album]" type="string"/>
      <p>Genre</p>
      <input defaultValue={defaultGenre} name="song[genre]" type="string"/>
        <br />
        <br />
      <button type="Submit">Add</button>
      </form>
      </>
    );
}

export default SongNew;