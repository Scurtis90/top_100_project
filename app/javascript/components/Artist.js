import React from "react";

const Artist = ({ artist, billboard }) => {
  const { id, name, rank } = artist
  return (
    <>
      <div className="artist-card">
        <h1>Artist: {name}</h1>
        <h3>Billboard: {billboard.title}</h3>
        <p>Rank: {rank}</p>
        <a href={`/billboards`}>Back to Billboards</a>
        <br />
        <a href={`/billboards/${billboard.id}`}>Back to {billboard.title} Billboard</a>
        <br />
        <a href={`/artists/${id}/songs`}>Show Songs</a>
      </div>
    </>
  );
}

export default Artist;