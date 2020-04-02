import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { selectCategory, reset } from '../../actions'
// import categoryList from "../../reducers/categoryReducer";
// import { fruits, vegetables, nuts, reset } from "../../reducers/productInventory";
// import { categoryList } from "../../reducers/categoryList"

const mapStateToProps = state => {
  // console.log('mstp in categories',state)
  return { categories: state.categories };
};

const mapDispatchToProps = { selectCategory, reset };

const Categories = props => {
  // console.log('props categories',props.categories)
  return (
    <section className="Categories">
      <div>Sort By Category, from categories component</div>
      {props.categories.categories.map(category => (
          <Button key={category.name} onClick={() => {
            props.selectCategory(category.name) }}>{category.name}</Button>
      ))}
      <Button onClick={props.reset}>Reset</Button>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
