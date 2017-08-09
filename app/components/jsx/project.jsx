import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件
import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';
//引入antd
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';

//
//for (let i = 0; i < 46; i++) {
//data.push({
//  key: i,
//  name: `Edward King ${i}`,
//  age: 32,
//  address: `London, Park Lane no. ${i}`,
//});
//}

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRowKeys: [],  // Check here to configure the default column
    		loading: false,
    		columns : [{
			  title: 'ID',
			  key: 'id',
			}, {
			  title: '名称',
			  dataIndex: 'name',
			}, {
			  title: '类别',
			  dataIndex: 'classify',
			}, {
			  title: '品牌',
			  dataIndex: 'brand',
			}, {
			  title: '生产地',
			  dataIndex: 'factory',
			}, {
			  title: '到期日',
			  dataIndex: 'sell_by_date',
			}],
			data:[]
		}
	}
	start() {
	    this.setState({ loading: true });
	    // ajax request after empty completing
	    setTimeout(() => {
	      this.setState({
	        selectedRowKeys: [],
	        loading: false,
	      });
	    }, 1000);
	}
	onSelectChange(selectedRowKeys) {
	    console.log('selectedRowKeys changed: ', selectedRowKeys);
	    this.setState({ selectedRowKeys });
	}
	componentDidMount(){
		var xhr = new XMLHttpRequest();
		var data = [];
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var res = JSON.parse(xhr.responseText);
				console.log(res.goods.length)
				for(var i = 0;i<res.goods.length;i++){
					console.log(i)
					var goods = {
					        id:res.goods[i].id,
					        name:res.goods[i].name,
					        classify:res.goods[i].classify,
					        brand:res.goods[i].brand,
					        factory:res.goods[i].factory,
					        sell_by_date:res.goods[i].sell_by_date
				      	}
					data.push(goods);
					console.log(goods)
				}
				this.setState({
					data:data
				});
				
			}
		}.bind(this);
		xhr.open('GET','./json/systemData.json',true);
		xhr.send();
	}
	render(){
		const { loading, selectedRowKeys } = this.state;
	    const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
	    const hasSelected = selectedRowKeys.length > 0;
	    return (
	      <div>
	        <div style={{ marginBottom: 16 }}>
	          <Button
	            type="primary"
	            onClick={this.start}
	            disabled={!hasSelected}
	            loading={loading}
	          >
	            Reload
	          </Button>
	          <span style={{ marginLeft: 8 }}>
	            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
	          </span>
	        </div>
	        <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
	      </div>
	    );
	}
}
export default Project;