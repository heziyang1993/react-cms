import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, HashRouter} from 'react-router-dom'
import {createBrowserHistory, createHashHistory} from 'history'
const history = createHashHistory()
//引入组件

import {increaseAction, multiAction} from '../../action.js';

import {connect} from 'react-redux';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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
			
		}
	}
	componentDidMount(){
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
	}
	render (){
		return (
			<div>
			 <div id="echarts_main" style={{ width: 400, height: 400 }}></div>
			</div>
		)
	}
}
export default Datamap;
