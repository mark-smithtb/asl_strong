import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as WordActions from '../actions/WordActions.js'

class CategoriesPage extends Component {
  componentWillMount() {
    console.log(this.props.actions.getCategories());
  }
  render() {
    return (
    <div class="categories">
    <h2>Categories</h2>
    {this.props.categories.map((category) => (
      <button name={category} name={category}><Link>{category}</Link></button>
    ))}
    </div>
  )
}
}

function mapStateToProps(state) {
  return {
    	categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
  return {
    	actions: bindActionCreators(WordActions, dispatch)
    };
}

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(CategoriesPage);
