import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Post from './Post'

const Feed = () => {
  const {posts,searchResults} = useContext(DataContext)
  return (
    <div>
      {searchResults.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default Feed