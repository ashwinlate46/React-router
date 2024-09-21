import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function forwardHandler(){

        navigate(+1)
    }

  return (
    <div>
        <div>
      <h2>This is Home Page</h2>
    </div>
    <button onClick={forwardHandler}>Forward</button>
    </div>
  )
}

export default Home
