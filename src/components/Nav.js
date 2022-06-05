import React from 'react'

const Nav = ({toggle}) => {
  return (
    <nav>
        {toggle ? <h1>Nav</h1> : " "}
        
        
    </nav>
  )
}

export default Nav