import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件
import Project from "./project.jsx";
import Datamap from "./datamap.jsx";
import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;

// React component
class Basic extends React.Component {
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
		  render() {
		  	//const {count, increase, decrease} = this.props;继承redux里面的state和action
		    return (
		      <HashRouter history={history}>
		      <div className="main_container">
			      <Layout>
			        <Sider
			          collapsible
			          collapsed={this.state.collapsed}
			          onCollapse={this.onCollapse.bind(this)}
			        >
			          <div className="logo" />
			          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
			            <Menu.Item key="1">
			              <Icon type="pie-chart" />
			              <span><a href="#/datamap" className="changeTab">数据地图</a></span>
			            </Menu.Item>
			            <Menu.Item key="2">
			              <Icon type="desktop" />
			              <span><a href="#/project" className="changeTab">商品快速查询</a></span>
			            </Menu.Item>
			            <SubMenu
			              key="sub1"
			              title={<span><Icon type="user" /><span>User</span></span>}
			            >
			              <Menu.Item key="3">Tom</Menu.Item>
			              <Menu.Item key="4">Bill</Menu.Item>
			              <Menu.Item key="5">Alex</Menu.Item>
			            </SubMenu>
			            <SubMenu
			              key="sub2"
			              title={<span><Icon type="team" /><span>Team</span></span>}
			            >
			              <Menu.Item key="6">Team 1</Menu.Item>
			              <Menu.Item key="8">Team 2</Menu.Item>
			            </SubMenu>
			            <Menu.Item key="8">
			              <Icon type="file" />
			              <span>File</span>
			            </Menu.Item>
			          </Menu>
			        </Sider>
			        <Layout>
			          <Header style={{ background: '#fff', padding: 0 }} />
			          <span className="username">heziyang1993</span>
			          <span className="loginout">退出</span>
			          <Content style={{ margin: '0 16px' }}>
			          	
						<Route path="/project" component={Project}/>
			            <Route exact path="/datamap" component={Datamap}/>
			          </Content>
			          <Footer style={{ textAlign: 'center' }}>
			            Ant Design ©2016 Created by Ant UED
			          </Footer>
			        </Layout>
			      </Layout>

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
export default Basic;


//<Redirect to="/home/project"/>{/*默认跳转*/}

//<Breadcrumb style={{ margin: '12px 0' }}>
//			              <Breadcrumb.Item>User</Breadcrumb.Item>
//			              <Breadcrumb.Item>Bill</Breadcrumb.Item>
//			            </Breadcrumb>
//			            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//			              Bill is a cat.
//			            </div>