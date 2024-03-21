//var tcpUDPLine = echarts.init(document.getElementById('container-TCP-UDP-Line'));
var sixPie = echarts.init(document.getElementById('container-Six-Pie'));
var hackerIPPie = echarts.init(document.getElementById('container-Hacker-IP-Pie'));
var tcpUDPBar = echarts.init(document.getElementById('container-TCP-UDP-Bar'));

//var tcpUDPLineOption = {
//        visualMap: [
//          {
//            show: false,
//            type: 'continuous',
//            seriesIndex: 0,
//            min: 0,
//            max: 400,
//          },
//        ],
//        tooltip: {
//          trigger: 'axis',
//          formatter: function(params) {
//            params = params[0]
//            var date = new Date(params.name)
//            return (
//              date.getDate() +
//              '/' +
//              (date.getMonth() + 1) +
//              '/' +
//              date.getFullYear() +
//              ' : ' +
//              params.value[1]
//            )
//          },
//          axisPointer: {
//            animation: false,
//          },
//        },
//        grid: {
//          top: '15%',
//          bottom: '10%',
//        },
//        xAxis: {
//          type: 'time',
//          splitLine: {
//            show: false,
//          },
//          triggerEvent: true,
//        },
//        yAxis: {
//          type: 'value',
//          boundaryGap: [0, '100%'],
//          max: 100,
//          splitLine: {
//            show: false,
//          },
//        },
//        series: [
//          {
//            type: 'line',
//            showSymbol: false,
//            hoverAnimation: false,
//            data: [1,2,3,5,4],
//          },
//        ],
//      };
//{
//  tooltip: {
//    trigger: 'axis',
//    formatter: function (params) {
//      params = params[0];
//      var date = new Date(params.name);
//      return (
//        date.getDate() +
//        '/' +
//        (date.getMonth() + 1) +
//        '/' +
//        date.getFullYear() +
//        ' : ' +
//        params.value[1]
//      );
//    },
//    axisPointer: {
//      animation: false
//    }
//  },
//  xAxis: {
//    type: 'time',
//    splitLine: {
//      show: false
//    }
//  },
//  yAxis: {
//    type: 'value',
//    boundaryGap: [0, '100%'],
//    splitLine: {
//      show: false
//    }
//  },
//  series: [
//    {
//      name: 'Total Num',
//      type: 'line',
//      showSymbol: false,
//      areaStyle: {},
//      data: [1,2,3,5,4]
//    }
//  ]
//};
var sixPieOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    bottom: 0,
  },
  series: [
    {
      name: '攻击数量统计',
      type: 'pie',
      radius: '65%',
      data: [
        { value: 1048, name: 'TCP-Net-Scan' },
        { value: 735, name: 'TCP-Port-Scan' },
        { value: 580, name: 'TCP-Mixed-Scan' },
        { value: 484, name: 'UDP-Net-Scan' },
        { value: 400, name: 'UDP-Port-Scan' },
        { value: 300, name: 'UDP-Mixed-Scan' },
      ].sort(function (a, b) {
        return b.value - a.value;
      }),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
var hackerIPPieOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    bottom: 0,
  },
  series: [
    {
      name: 'HackerIP统计',
      type: 'pie',
      radius: '65%',
      data: [
        { value: 1048, name: '1' },
        { value: 735, name: '2' },
        { value: 580, name: '3' },
        { value: 484, name: '4' },
        { value: 400, name: '5' },
        { value: 300, name: '6' },
      ].sort(function (a, b) {
        return b.value - a.value;
      }),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
var tcpUDPBarOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '15%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['TCP', 'UDP']
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  series: [
    {
      name: 'Net-Scan',
      type: 'bar',
      data: [18203, 23489]
    },
    {
      name: 'Port-Scan',
      type: 'bar',
      data: [19325, 23438]
    },
    {
      name: 'Mixed-Scan',
      type: 'bar',
      data: [19325, 20000]
    }
  ]
};

//tcpUDPLine.setOption(tcpUDPLineOption);
//Highcharts.setOptions({
//    global:{
//        useUTC:false
//    }
//});
//var container_traffic_speed = Highcharts.chart('container-traffic-speed', {
//		chart: {
//			zoomType: 'x'
//		},
//		title: {
//			text: ''
//		},
//		subtitle: {
//			text: document.ontouchstart === undefined ?
//			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
//		},
//		tooltip: {
//		    split: true,
//			dateTimeLabelFormats: {
//				second: '%H:%M:%S'
//<!--				minute: '%H:%M',-->
//<!--				hour: '%H:%M',-->
//<!--				day: '%Y-%m-%d',-->
//<!--				week: '%m-%d',-->
//<!--				month: '%Y-%m',-->
//<!--				year: '%Y'-->
//			},
//            pointFormat: '<span style="color:{point.color}">{series.name}</span>: <b>{point.y} Bps</b><br/>'
//		},
//		xAxis: {
//			type: 'datetime',
//			tickmarkPlacement: 'on',
//			dateTimeLabelFormats: {
//				second: '%H:%M:%S',
//			}
//		},
//		yAxis: {
//			title: {
//				text: '攻击流量带宽 （Bps）'
//			}
//		},
//		legend: {
//			enabled: true
//		},
//		plotOptions: {
//			area: {
//			    pointStart: cur_time,
//				fillColor: {
//					linearGradient: {
//						x1: 0,
//						y1: 0,
//						x2: 0,
//						y2: 1
//					},
//					stops: [
//						[0, new Highcharts.getOptions().colors[0]],
//						[1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//					]
//				},
//				marker: {
//					radius: 2
//				},
//				lineWidth: 1,
//				states: {
//					hover: {
//						lineWidth: 1
//					}
//				},
//				threshold: null
//			}
//		},
//		series: [
//		    {
//                type: 'area',
//                name: 'SYN Flood',
//                data: []
//			}
//		]
//    });
//


sixPie.setOption(sixPieOption);
hackerIPPie.setOption(hackerIPPieOption);
tcpUDPBar.setOption(tcpUDPBarOption);

console.log(hackerIPPie);

// 页面初次访问时加载数据
//$(document).ready(loadData())

//// 定时5s刷新数据
setInterval("loadData()", 3000);

// 从后端读取所有数据
function loadData(){
 $.get("/ScanDetectionChart/"+ window.location.search,
        function(data){
                console.log("success")
                console.log(data['data'])
                if(data['status']){
                    // 更新攻击类型数量 sixPie
                    if(data['data']['sixPie'].length){
                        sixPieOption['series'][0]['data'] = data['data']['sixPie'];
                        sixPie.setOption(sixPieOption);
                    }
                    // 更新Hacker IP 分部 hackerIP
                    if(data['data']['hackerIPPie'].length){
                        hackerIPPieOption['series'][0]['data'] = data['data']['hackerIPPie'];
                        hackerIPPie.setOption(hackerIPPieOption);
                    }
                    // 更新TCP UDP 扫描攻击统计分布
                    if(data['data']['tcpUDPBar'].length){
                        tcpUDPBarOption['series'] = data['data']['tcpUDPBar'];
                        tcpUDPBar.setOption(tcpUDPBarOption);
                    }

//                    data.shift();
//                    data.push(i+1);
//                    tcpUDPLine.setOption(tcpUDPLineOption);
                    // 更新TCP UDP 扫描攻击统计分布
//                    if(data['data']['tcpUDPLine'].length){
//                        tcpUDPLineOption['series'] = data['data']['tcpUDPLine'];
//                        tcpUDPLine.setOption(tcpUDPLineOption);
//                    }
                }

//
//            // 更新攻击流量带宽峰值，并实时更新-->
//            var traffic_speed_list_len = data['traffic_speed_list'].length
//            if (traffic_speed_list_len != 0){
//                for (i=0; i<traffic_speed_list_len; i+=1){
//                    var points = data['traffic_speed_list'][i]
//                    if (points.length != 0){
//<!--                            console.log(points)-->
//                        container_traffic_speed.series[i].setData(points)
//                    }
//                }
//            }
//
        });
//        $('#table_coarse').bootstrapTable("refresh");
//        $('#table_fine').bootstrapTable("refresh");
}
