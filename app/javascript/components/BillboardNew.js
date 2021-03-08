import React from 'react';

const BillboardNew = ({ billboared }) => {
 
  const { title } = billboard
  const defaultTitle = title ? title : ""
  const defaultDetails = details ? details : ""
  return(
    <>
      <h1>New Billboard</h1>
      <form action="/billboards" method="post">
        <input 
          placeholder="Title"
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
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default BillboardNew;