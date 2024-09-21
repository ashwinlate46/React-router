import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    function clickHandler(){
        //move to labs page
        navigate("/labs");
    }
  return (
    <div>
    <div>
      <h2>This is About Page</h2>
    </div>
    <button onClick={clickHandler}>Move to Lab Page</button>
    </div>
  )
}

export default About
