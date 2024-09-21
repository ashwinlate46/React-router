import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    function clickHandler(){
        //navigate to home page
        navigate("/")
    }

    function backHandler(){
        navigate(-1)
    }
  return (
    <div>
        <div>
      <h2>This is Support Page</h2>
    </div>
    <button onClick={clickHandler}>Move to Home</button>
    <br />
    <button onClick={backHandler}>Go to Back</button>
    </div>
  )
}

export default Support
