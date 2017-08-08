import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {increaseAction, multiAction} from '../../action.js';
import {Table} from 'react-bootstrap';
class Project extends React.Component {
	constructor(props){
		super(props);
		this.state = {
    		
   		};
   		this.change = this.change.bind(this);
	}
	componentDidMount(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var res = JSON.parse(xhr.responseText);
				console.log(res);
				var html = '';
				var i = 0;
				for(;i<res.goods.length;i++){
					html += `<tr>
						        <td>${res.goods[i].id}</td>
						        <td>${res.goods[i].name}</td>
						        <td>${res.goods[i].classify}</td>
						        <td>${res.goods[i].brand}</td>
						        <td>${res.goods[i].img}</td>
						        <td>${res.goods[i].factory}</td>
						        <td>${res.goods[i].sell_by_date}</td>
					      	</tr>`
				}
				//使用refs获取实例节点
				var tbody = this.refs.tbody;
				console.log(tbody);
				console.log(html)
				tbody.innerHTML = html;
				this.setState({
					goods:JSON.parse(xhr.responseText)
				});
				
			}
		}.bind(this);
		xhr.open('GET','./json/systemData.json',true);
		xhr.send();
	}
	change(event) {
		console.log(event.target)
		this.setState({
			active:'active'
		})
		switch(event.target.innerText) {
			
		}
	}
  	render() {
	    return (
	      	<div className="System_container">
	      		<div className="search_head">
			        <div className="search"><i className="iconfont icon-search2"></i><input type="text" placeholder="商品名称/商品id" /></div>
			        <div className="search_btn_container"><button className="search_btn">搜索</button></div>
		        </div>
		        <div className="System_main">
			        <Table responsive>
					    <thead>
					    	<tr>
					        	<th>商品ID</th>
						    	<th>商品名称</th>
						        <th>商品品类</th>
						        <th>商品品牌</th>
						        <th>商品图片</th>
						        <th>商品生产商</th>
						        <th>商品到期日</th>
						    </tr>
					    </thead>
					    <tbody ref="tbody"></tbody>
					</Table>
		        	<ul className="pagination" onClick={this.change}>
		        		<li className={this.state.active}>1</li>
		        		<li>2</li>
		        		<li>3</li>
		        		<li>4</li>
		        		<li>5</li>
		        	</ul>
	        	</div>
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

// Connected Component 让Project也连接上store
module.exports = connect(mapStateToProps, mapDispatchToProps)(Project);
module.exports = Project;
