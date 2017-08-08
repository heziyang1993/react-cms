var React = require('react');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {increaseAction, multiAction} from '../../action.js';
import Welcome from "./welcome.jsx";
import System from "./system.jsx";
import Project from "./project.jsx";
class ProductBox extends React.Component {
	constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      
    };
    // ES6 类中函数必须手动绑定 ==>this.handleSelect = this.handleSelect.bind(this);

  }
	render() {
		return(
			<div className="main">
				<div className="sideBar_container">
					<ul className="sideBar">
						<li><Link to="/home/welcome">欢迎界面</Link></li>
						<li><Link to="/home/project">项目管理</Link></li>
						<li><Link to="/home/system">系统管理</Link></li>
						<li><Link to="">用户管理</Link></li>
						<li><Link to="">菜单管理</Link></li>
					</ul>
				</div>
				<div className="table_container">
					<Route path="/home/welcome" component={Welcome}/>
					<Route path="/home/system" component={System}/>
					<Route path="/home/project" component={Project}/>
				</div>
			</div>
		)
	}
}
module.exports = ProductBox;