import React from 'react'
import { useParams } from 'react-router-dom'

function CatId() {
    const { catId } = useParams()
    // const param = useParams()
    // const CatId = param.catId
  return (
    <>
        <div>CategoryID - {catId}</div>

    </>
  )
}

export default CatId