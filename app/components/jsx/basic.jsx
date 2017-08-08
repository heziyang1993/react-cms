import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件
import Home from "./home.jsx";
import {ButtonGroup, Button} from 'react-bootstrap';

import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';

import {Nav, NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

// React component
class Basic extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      activeKey:'1'
    };
    // ES6 类中函数必须手动绑定

    this.handleSelect = this.handleSelect.bind(this);
  }

   handleSelect(eventKey) {
    switch (eventKey) {
      case "1":
        history.push('/home');
        break;
      case "2":

        break;
    }
   	this.setState({
			activeKey:eventKey
		})
    event.preventDefault();
  }
  render() {
    return (
      <HashRouter history={history}>
        <div className="container">
          <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
		        <NavItem eventKey="1">系统管理</NavItem>
		        <NavItem eventKey="2">业务管理</NavItem>
		      	<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
		          <MenuItem eventKey="4.1">Action</MenuItem>
		          <MenuItem eventKey="4.2">Another action</MenuItem>
		          <MenuItem eventKey="4.3">Something else here</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey="4.4">Separated link</MenuItem>
		        </NavDropdown>
    		  </Nav>
          <Route path="/home" component={Home}/>
					
          <Redirect to="/home/project"/>{/*默认跳转*/}
        </div>
      </HashRouter>
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
      dispatch(changeTab())
    }
	}
}
// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Basic);
