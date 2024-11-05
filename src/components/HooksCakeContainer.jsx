import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numOfCakes} using hooks</h2>
        <button onClick={() => dispatch(buyCake())}>But Cake</button>
    </div>
  )
}

export default HooksCakeContainer