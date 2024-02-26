import React from 'react'

const Button = ({addUserName,onClick}) => {
    // px-4 py-2 my-4 rounded-2 border-0 text-bg-primary
  return (
    <div style={{justifyContent: "end",
        display: "flex",
        alignItems: "center"}}><button
    onClick={onClick}
    className='px-4 py-2 me-2 my-4 fw-semibold rounded-2 border-0 text-bg-primary'
  >
    {addUserName} 
  </button></div>
  )
}

export default Button
// justify-content: end;
//     display: flex;
//     align-items: center;