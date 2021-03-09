import React from "react";

const ArtistEdit = ({ artist, billboard }) => {
    const { id } = artist;
    const { name, rank, errors } = artist;
    return (
      <>
        <h1>Artist Edit</h1>
        {errors && errors}
        <form action={`/billboards/${billboard.id}/artists/${id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          <p>Name</p>
          <input defaultValue={name} name="artist[name]" type="text" />
          <p>Rank</p>
          <textarea defaultValue={rank} name="artist[rank]" type="integer" />
          <br />
          <button type="Submit">Update</button>
        </form>
      </>
    );
}

export default ArtistEdit;