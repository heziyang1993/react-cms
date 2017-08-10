import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件

import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Tabs } from 'antd';
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;
const TabPane = Tabs.TabPane;
// import the core library. 
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually. 
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class Datamap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [{
			  key: '1',
			  name: 'Galaxy',
			  brand: 'SAMSUNG',
			  total: 2000,
			}, {
			  key: '2',
			  name: 'Iphone',
			  brand: 'Apple',
			  total: '500',
			}, {
			  key: '3',
			  name: 'oppoR9',
			  brand: 'OPPO',
			  total: '1000',
			}, {
			  key: '4',
			  name: 'MImax',
			  brand: 'xiaomi',
			  total: '3600',
			}, {
			  key: '5',
			  name: 'Honner',
			  brand: 'huawei',
			  total: '4000',
			}]
		}
	}
	componentDidMount(){
		// 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('echarts_main1'));
        var myChart2 = echarts.init(document.getElementById('echarts_main2'));
        // 绘制图表
        myChart1.setOption({
            title: { text: 'x月销售情况' },
            tooltip: {},
            xAxis: {
                data: ["iphone", "三星", "小米", "华为", "oppo"]
            },
            yAxis: {},
            series: [{
                name: '出货量',
                type: 'bar',
                data: [500, 2000, 3600, 4000, 1000]
            }]
        });
        myChart2.setOption({
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['iphone','samsung','oppo','小米','华为']
		    },
		    series: [
		        {
		            name:'品牌商',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:500, name:'iphone'},
		                {value:2000, name:'samsung'},
		                {value:1000, name:'oppo'},
		                {value:3600, name:'小米'},
		                {value:4000, name:'华为'}
		            ]
		        }
		    ]
		})
	}
	callback(key){
		console.log(key);		
	}
	render (){
		return (
			<div>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
				    <TabPane tab="销售情况" key="1">
				    	<div id="echarts_main1" style={{ minWidth: 600, height: 300 }}></div>
						<div id="echarts_main2" style={{ minWidth: 600, height: 300 }}></div>	
				    </TabPane>
				    <TabPane tab="市场份额" key="2">
				    	
				    </TabPane>
				</Tabs>
				<Table dataSource={this.state.data}>
				      <Column
				        title="名字"
				        dataIndex="name"
				        key="name"
				      />
				      <Column
				        title="品牌"
				        dataIndex="brand"
				        key="brand"
				      />
				    <Column
				      title="总量"
				      dataIndex="total"
				      key="total"
				    />
				  </Table>
				
			</div>
		)
	}
}
export default Datamap;
