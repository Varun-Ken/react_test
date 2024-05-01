import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import Feed from './Feed'

const Home = () => {
  const {posts, isLoading, fetchError} = useContext(DataContext)

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {fetchError && !isLoading && <p style={{color:"red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ? <Feed /> : <p>No Post Available</p>)}
    </main>
  )
}

export default Home