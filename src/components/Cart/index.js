import React from "react";
import { connect } from "react-redux";
import { reset, increment, decrement } from "../../actions";
import { Table } from "react-bootstrap";

const mapStateToProps = state => {
  return { 
    cart: state.cart,
  };
};

const mapDispatchToProps = { reset, increment, decrement };

const Cart = props => {
  console.log('cart comp',props.cart.contents)
  return (
    <div>
        <div>Cart total items count: {props.cart.totalCount} </div> 
        <div>Items in Cart: {Object.entries(props.cart.contents)} </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
