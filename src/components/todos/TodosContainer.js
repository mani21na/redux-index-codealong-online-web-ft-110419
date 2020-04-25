import React, { Component } form 'react';
import { connect } from 'react-redux';

class TodosContainer extends Component {
  render() {
    return(
      <div>{ props.text }</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
