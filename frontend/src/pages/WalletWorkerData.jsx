import React from 'react'
import { useParams } from 'react-router-dom'

const WalletWorkerData = () => {
  let {id} = useParams()
  return (
    <div>WalletWorkerData
      Worker ID {id}
    </div>
  )
}

export default WalletWorkerData