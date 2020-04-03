import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { selectCategory, reset, fetchAllProducts } from '../../actions'

const mapStateToProps = state => {
  return { 
    products: state.productReducer,
    categories: state.categoryReducer
  };
};

const mapDispatchToProps = { selectCategory, reset, fetchAllProducts };

const Categories = props => {
  console.log('props in cat comp',props.categories)
  return (
    <section className="Categories">
      <div>Filter By Category: {props.categories.selectedCategory}</div>
      {props.categories.categories.map(category => (
          <Button key={category.name} onClick={() => {
            props.selectCategory(category.name) }}>{category.name}</Button>
      ))}
      <Button onClick={props.fetchAllProducts}>Reset</Button>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
