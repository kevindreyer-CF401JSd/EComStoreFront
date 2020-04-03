import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import * as actions from "../../actions";

const mapStateToProps = state => {
  return { products: state.products };
};

const mapDispatchToProps = { 
  reset: actions.reset,
  addToCart: actions.addToCart,
  selectCategory: actions.selectCategory,
  fetchAllProducts: actions.fetchAllProducts,
  increment: actions.increment,
  decrement: actions.decrement
};

const Products = ({
  products,
  fetchAllProducts,
  increment,
  decrement
}) => {
  const fetchData = () => {
    fetchAllProducts();
  };
  useEffect(() => fetchData(), []); //eslint-disable-line
  console.log('products',products)
  return (
    <section className="Product">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Button 
                  onClick={() => {
                    increment(product.name) }}
                >Add Too Cart
                </Button>
                <Button onClick={() => {
                  decrement(product.name)}}
                >Remove From Cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
