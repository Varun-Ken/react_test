import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../Context/DataContext'

const Nav = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <div className='Nav' style={{width:"100%"}}>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/newpost"><li>Post</li></Link>
        <Link to="/qwerty"><li>404</li></Link>
      </ul>
      <input
      placeholder='Type to search'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <p>{search}</p>
    </div>
  )
}

export default Nav