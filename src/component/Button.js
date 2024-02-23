import React from 'react'

const Button = ({addUserName,OnclickAddUser,className}) => {
    // px-4 py-2 my-4 rounded-2 border-0 text-bg-primary
  return (
    <div><button
    className={className}
    onClick={OnclickAddUser}
  >
    {addUserName} 
  </button></div>
  )
}

export default Button