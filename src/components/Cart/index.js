import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { productInventory: state.productInventory };
};

const mapDispatchToProps = { fruits, vegetables, nuts, reset };
