import React from 'react';

const SongEdit = ({ artist, song }) => {
  const { title, album, genre } = song
  const defaultTitle = title ? title : "";
  const defaultAlbum = album ? album : "";
  const defaultGenre = genre ? genre : "";
  return(
    <>
      <h1>Edit Song</h1>
      <form action={`/artists/${artist.id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Title"
          required
          type="string"
          defaultValue={defaultTitle}
          name="song[title]"
        />
         <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Album"
          required
          type="string"
          defaultValue={defaultAlbum}
          name="song[album]"
        />
         <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Genre"
          required
          type="string"
          defaultValue={defaultGenre}
          name="song[genre]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default SongEdit;