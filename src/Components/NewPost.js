import React, { useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const NewPost = () => {
  const {title, setTitle, body, setBody, handleSubmit} = useContext(DataContext)
  return (
    <form onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input 
      type='text'
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <h3>Description</h3>
      <input 
      type='text'
      required
      value={body}
      onChange={(e) => setBody(e.target.value)}
      />
      <br></br><br></br>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewPost