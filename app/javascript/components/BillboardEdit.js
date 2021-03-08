import React from 'react';

const BillboardEdit = ({ billboard }) => {
  const { title, details, id } = billboard
  const defaultTitle = title ? title : "";
  const defaultDetails = details ? details : '';
  return(
    <>
      <h1>Edit Billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultTitle}
          name="billboard[title]"
        />
        <input
          placeholder="Details"
          type="text"
          defaultValue={defaultDetails}
          name="billboard[details]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}
export default BillboardEdit;