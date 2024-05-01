import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../Context/DataContext'

const Post = ({post}) => {
    // const {posts} = useContext(DataContext)
    // const {id} = useParams()
    // const post = posts.find(post => post.id === id)
  return (
    <div>
        <Link to={`post/${post.id}`} style={{textDecoration:"none",color:"black"}}>
        <h3>{post.title}</h3>
        <p>{post.date}</p>        
        <p>{post.body}</p>        
        </Link>
    </div>
  )
}

export default Post