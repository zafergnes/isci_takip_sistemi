import React from 'react'
import { useParams } from 'react-router-dom'

const Work = () => {
    let {id} = useParams()
    
  return (
    <div>
      <p>iş id {id}</p>
    </div>
  );
}

export default Work