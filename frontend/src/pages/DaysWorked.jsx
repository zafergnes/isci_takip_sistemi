import React from 'react'
import { useParams } from 'react-router-dom'

const DaysWorked = () => {
  let {id} = useParams()
  return (
    <div>
        days worked id : {id}
    </div>
  )
}

export default DaysWorked