import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {increaseAction, multiAction} from '../../action.js';
class Edit extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	componentDidMount(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var res = JSON.parse(xhr.responseText);
				console.log(res);
				var html = 	`
					        <p>编号:${res.goods[0].id}</p>
					        <label>名字<input type="text" value="${res.goods[0].name}" /></label>
					        <label>类别<input type="text" value="${res.goods[0].classify}" /></label>
					        <label>品牌<input type="text" value="${res.goods[0].brand}" /></label>
					        <label>生产地<input type="text" value="${res.goods[0].factory}" /></label>
					        <label>到期日<input type="text" value="${res.goods[0].sell_by_date}" /></label>
					        <button>提交</button>
				      	`	
				var edit_container = this.refs.edit_container;
				edit_container.innerHTML = html;
				this.setState({
					goods:JSON.parse(xhr.responseText)
				});
				
			}
		}.bind(this);
		xhr.open('GET','./json/editData.json',true);
		xhr.send();
	}
	render() {
	    return (
	      <div className="edit_container" ref="edit_container">
	        
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
module.exports = connect(mapStateToProps, mapDispatchToProps)(Edit);
module.exports = Edit;
