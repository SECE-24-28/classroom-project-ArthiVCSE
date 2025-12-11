import React from 'react'

const Header = (props) =>
    {
  return (
    <div>

      <h1>{props.title} - {props.dep}</h1>

    </div>
  )
}

export default Header