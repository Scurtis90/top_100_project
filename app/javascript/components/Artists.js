import React from "react";

const Artists = ({ artists, billboard }) => {
  const { title, id } = billboard;
  return (
    <>
      <h1>Artists Page from {title} Billboard</h1>
      <a href={`/billboards/${id}`}>Back to {title} Billboard</a>
      <br />
      <a href={`/billboards`}>Back to Billboards</a>
      <br />
      <a href={`/billboards/${id}/artists/new`}>Add Artist</a>
      <br />
      
      { artists.map((artist) => (
        <div key={artist.id} className="artist-card">
          <h3>{artist.name}</h3>
          <p>{artist.rank}</p>
          <a href={`/billboards/${id}/artists/${artist.id}`}>Show Artist</a> 
          <br />
          <a href={`/billboards/${id}/artists/${artist.id}/edit`}>Edit Artist</a>
          <br />
          <a href={`/billboards/${id}/artists/${artist.id}`} data-method="delete">
            Delete Artist
          </a>
        </div>
      ))}
    </>
  );
}

export default Artists;