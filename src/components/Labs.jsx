import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();

    function clickHandler(){
        //navigate to support
        navigate("/support")
    }
  return (
   <div>
     <div>
      <h2>This is Labs </h2>
    </div>
    <button onClick={clickHandler}>Move to Support </button>
   </div>
  )
}

export default Labs
