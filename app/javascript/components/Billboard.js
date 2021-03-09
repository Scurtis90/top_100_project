import React from 'react';

const Billboard = ({ billboard }) => {
  const { id, title, details, created_at } = billboard;

  return (
    <>
      <h1>Billboard: {title}</h1>
      <p>Details: {details}
      </p>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">Back</a>
      <br />
      <a href={`/billboards/${id}/artists`}>Artists</a>
    </>
  )
}
export default Billboard;