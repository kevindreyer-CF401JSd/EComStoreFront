import React from "react";
import { connect } from "react-redux";
// import { reset, increment, decrement } from "../../actions";

const mapStateToProps = state => {
  console.log('cart mstp',state)
  return { cart: state.cart };
};

// const mapDispatchToProps = { reset, increment, decrement };

const Cart = props => {
  console.log('cart',props)
  return (
    <div>
      <span> Cart: 
        <span>Count: {props.cart.length} </span> 
        <span>Contents: {`${[...props.cart]}`}</span> 
      </span>
    </div>
  )
}

export default connect(mapStateToProps, null)(Cart)
