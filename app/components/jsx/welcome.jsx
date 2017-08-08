import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {increaseAction, multiAction} from '../../action.js';
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome_container">
     		welcome
        
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

// Connected Component 让Topics也连接上store
module.exports = connect(mapStateToProps, mapDispatchToProps)(Welcome);
module.exports = Welcome;
