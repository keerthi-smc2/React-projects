import React from 'react'
// import { buyCake } from '../redux'
import { buyIceCream } from '../redux/icecreams/iceCreamActions'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
    
  )
}

// Selectors -- actually returns some state information from the redux store
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
        
    }
   
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer)