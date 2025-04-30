import React from 'react'
import { useParams } from 'react-router-dom'

const WalletWorkData = () => {
  let {id} = useParams()
  return (
    <div>WalletWorkData
      İŞ ID {id}
    </div>
  )
}

export default WalletWorkData