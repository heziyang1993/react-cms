import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {increaseAction, multiAction} from '../../action.js';
class System extends React.Component {
  render() {
    return (
      <div className="System_container">
        <h2>我是System</h2>
      </div>
    )
  }
}
// Map Redux state to component props
function mapStateToProps(state) {
  return {value: state.count}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => {
      //可以触发多个
      dispatch(increaseAction())
      dispatch(multiAction())
    }
  }
}

// Connected Component 让System也连接上store
module.exports = connect(mapStateToProps, mapDispatchToProps)(System);
module.exports = System;
