import React from "react";

const ArtistNew = ({ artist, billboard }) => {
    const { id } = billboard;
    const { name, rank, errors } = artist;
    const defaultName = name ? name : "";
    const defaultRank = rank ? rank : "";
    return (
      <>
        <h1>Artist New</h1>
        {errors && errors}
        <form action={`/billboards/${id}/artists`} method="post">
          <p>Name</p>
          <input defaultValue={defaultName} name="artist[name]" type="text" />
          <p>Rank</p>
          <input defaultValue={defaultRank} name="artist[rank]" type="integer" />
          <br />
          <br />
          <button type="Submit">Add</button>
        </form>
      </>
    );
}

export default ArtistNew;