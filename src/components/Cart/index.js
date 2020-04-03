import React from "react";
import { connect } from "react-redux";
import { reset, increment, decrement } from "../../actions";

const mapStateToProps = state => {
  return { 
    cart: state.cart,
  };
};

const mapDispatchToProps = { reset, increment, decrement };

const Cart = props => {
  console.log('cart',props)
  return (
    <div>
      <span> Cart: 
        <span>Count: {props.cart.count} </span> 
        <span>Contents: </span> 
        {/* {`${[...props.cart]}`} */}
      </span>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
