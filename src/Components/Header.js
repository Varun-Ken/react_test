import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'

const Header = () => {
  const {heading} = useContext(DataContext)
  return (
    <>
      <h3>{heading}</h3>
    </>
  )
}

export default Header