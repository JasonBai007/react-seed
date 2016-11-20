import Mock from 'mockjs';

// 模拟折线图数据
let lineData = Mock.mock({
	'line|5-10': [
		{'name':'@first','uv|1000-4000':2000,'pv|1000-4000':2000,'amt|1000-4000':2000}
	]
})

export { lineData }