import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件
import Basic from './basic.jsx';
import Login from './login.jsx';

import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;


// React component
class Home extends React.Component {
	  constructor(props) {
		    super(props);
		    // 设置 initial state
		    this.state = {
		       collapsed: false,
		    };
		 }
		    onCollapse(collapsed){
			    console.log(collapsed);
			    this.setState({ collapsed });
			  }
		    componentDidMount(){
		    	var cookies = document.cookie.split('; ');
		    	cookies.forEach(function(ele){
		    		var temp = ele.split('=');
		    		if(temp[0] == 'user') {
		    			return 
		    		}else {
		    			location.hash = '/login';
		    		}
		    	})
		    }
		  render() {
		  	//const {count, increase, decrease} = this.props;继承redux里面的state和action
		    return (
		      <HashRouter history={history}>
		      	<div>
				<Route path="/basic" component={Basic}/>
			    <Route exact path="/login" component={Login}/>
			    </div>
		      </HashRouter>
		    )
	  }
}

// Map Redux state to component props
//function mapStateToProps(state) {
//return {value: state.count}
//}

// Map Redux actions to component props
//function mapDispatchToProps(dispatch) {
//return {
//  onIncreaseClick: () => {
//    //可以触发多个
//    dispatch(changeTab())
//  }
//	}
//}
// Connected Component
//export default connect(mapStateToProps, mapDispatchToProps)(Basic);
export default Home;


//<Redirect to="/home/project"/>{/*默认跳转*/}

//<Breadcrumb style={{ margin: '12px 0' }}>
//			              <Breadcrumb.Item>User</Breadcrumb.Item>
//			              <Breadcrumb.Item>Bill</Breadcrumb.Item>
//			            </Breadcrumb>
//			            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//			              Bill is a cat.
//			            </div>
//<Footer style={{ textAlign: 'center' }}>
//			            Ant Design ©2016 Created by Ant UED
//			          </Footer>