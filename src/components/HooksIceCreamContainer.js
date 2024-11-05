import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream } from '../redux/icecreams/iceCreamActions'

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of IceCreams - {numOfIceCreams} using hooks</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer