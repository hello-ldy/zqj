<!-- 受害者IP分布饼图 -->
var container_victim_ip_ratio = Highcharts.chart('container-victim-ip-ratio', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie',
		options3d:{
		    enabled: true,
		    alpha: 45,
		    beta: 0
		}
	},
	title: {
		text: ''
	},
	legend: {
		enabled: true
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b> : {point.percentage:.1f} %',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			depth: 50,
			showInLegend: true
		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
	},
	series: [{
		name: 'IP地址',
		colorByPoint: true,
		data: []
	}]
});

<!-- 攻击协议分布饼图 -->
var container_attack_type_ratio = Highcharts.chart('container-attack-type-ratio', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie',
        options3d:{
		    enabled: true,
		    alpha: 45,
		    beta: 0
		}
	},
	title: {
		text: ''
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b> : {point.percentage:.1f} %',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			depth: 50,
			showInLegend: true

		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
	},
	series: [{
		name: '攻击类型',
		colorByPoint: true,
		data: [{
			name: 'SYN Flood',
            y: 0.0
		},{
			name: 'DRDoS-NTP',
            y: 0.0
		},{
			name: 'DRDoS-CLDAP',
            y: 0.0
		}, {
			name: 'DRDoS-TFTP',
            y: 0.0
		}, {
			name: 'DRDoS-DNS',
            y: 0.0
		}, {
			name: 'DRDoS-MSSQL',
            y: 0.0
		},{
			name: 'DRDoS-SNMP',
            y: 0.0
		},{
			name: 'DRDoS-NETBIOS',
            y: 0.0
		},{
			name: 'DRDoS-UDP',
            y: 0.0
		}]
	}]
});

<!-- 攻击流量分布图 -->
// 攻击流量分布
var container_traffic = Highcharts.chart('container-traffic', {
	chart: {
		type: 'column'
	},
	title: {
		text: ''
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		title: {
			text: '攻击流量 (B)'
		}
	},
	legend: {
		enabled: false
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
				format: '{point.y}'
			}
		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y} B</b><br/>'
	},
	series: [{
		name: '攻击类型',
		colorByPoint: true,
		data: [{
			name: 'SYN Flood',
            y: 0.0
		}, {
			name: 'DRDoS-NTP',
            y: 0.0
		}, {
			name: 'DRDoS-CLDAP',
            y: 0.0
		}, {
			name: 'DRDoS-TFTP',
            y: 0.0
		}, {
			name: 'DRDoS-DNS',
            y: 0.0
		}, {
			name: 'DRDoS-MSSQL',
            y: 0.0
		}, {
			name: 'DRDoS-SNMP',
            y: 0.0
		}, {
			name: 'DRDoS-NETBIOS',
            y: 0.0
		}, {
			name: 'DRDoS-UDP',
            y: 0.0
		}]
	}],
});

<!-- 攻击包数分布图 -->
var container_packets = Highcharts.chart('container-packets', {
	chart: {
		type: 'column'
	},
	title: {
		text: ''
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		title: {
			text: '攻击包数 (个)'
		}
	},
	legend: {
		enabled: false
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
				format: '{point.y}'
			}
		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y} 个</b><br/>'
	},
	series: [{
		name: '攻击类型',
		colorByPoint: true,
		data: [{
			name: 'SYN Flood',
            y: 0
		}, {
			name: 'DRDoS-NTP',
            y: 0
		}, {
			name: 'DRDoS-CLDAP',
            y: 0
		}, {
			name: 'DRDoS-TFTP',
            y: 0
		}, {
			name: 'DRDoS-DNS',
            y: 0
		}, {
			name: 'DRDoS-MSSQL',
            y: 0
		}, {
			name: 'DRDoS-SNMP',
            y: 0
		}, {
			name: 'DRDoS-NETBIOS',
            y: 0
		}, {
			name: 'DRDoS-UDP',
            y: 0
		}]
	}],
});

<!-- 攻击流量带宽图 -->
Highcharts.setOptions({
    global:{
        useUTC:false
    }
});
var container_traffic_speed = Highcharts.chart('container-traffic-speed', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		tooltip: {
		    split: true,
			dateTimeLabelFormats: {
				second: '%H:%M:%S'
<!--				minute: '%H:%M',-->
<!--				hour: '%H:%M',-->
<!--				day: '%Y-%m-%d',-->
<!--				week: '%m-%d',-->
<!--				month: '%Y-%m',-->
<!--				year: '%Y'-->
			},
            pointFormat: '<span style="color:{point.color}">{series.name}</span>: <b>{point.y} Bps</b><br/>'
		},
		xAxis: {
			type: 'datetime',
			tickmarkPlacement: 'on',
			dateTimeLabelFormats: {
				second: '%H:%M:%S',
			}
		},
		yAxis: {
			title: {
				text: '攻击流量带宽 （Bps）'
			}
		},
		legend: {
			enabled: true
		},
		plotOptions: {
			area: {
			    pointStart: cur_time,
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, new Highcharts.getOptions().colors[0]],
						[1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: 'SYN Flood',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-NTP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-CLDAP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-TFTP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-DNS',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-MSSQL',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-SNMP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-NETBIOS',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-UDP',
			data: []
			}]
    });

<!-- 攻击包速率图 -->
var container_packet_speed = Highcharts.chart('container-packet-speed', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		tooltip: {
		    split:true,
			dateTimeLabelFormats: {
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			},
			pointFormat: '<span style="color:{point.color}">{series.name}</span>: <b>{point.y} pps</b><br/>'
		},
		xAxis: {
			type: 'datetime',
			tickmarkPlacement: 'on',
			dateTimeLabelFormats: {
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: '攻击包速率 （pps）'
			}
		},
		legend: {
			enabled: true
		},
		plotOptions: {
			area: {
			    pointStart: cur_time,
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, new Highcharts.getOptions().colors[0]],
						[1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: 'SYN Flood',
			data: []
		    },{
			type: 'area',
			name: 'DRDoS-NTP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-CLDAP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-TFTP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-DNS',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-MSSQL',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-SNMP',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-NETBIOS',
			data: []
			},{
			type: 'area',
			name: 'DRDoS-UDP',
			data: []
			}]
	});


var cur_time = (new Date().getTime());


    //初始化bootstrap-table的内容
    $('#table_coarse').bootstrapTable({
        url: '/ddos_detection_table_coarse',  //请求后台的URL（*）
        method: 'GET',                      //请求方式（*）
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        classes: "table table-bordered table-striped table-sm", // table-striped表示隔行变色,table-sm样式
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "desc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                      //是否显示表格搜索
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
<!--        //得到查询的参数-->
<!--        queryParams : function (params) {-->
<!--            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的-->
<!--            var temp = {-->
<!--                rows: params.limit,                         //页面大小-->
<!--                page: (params.offset / params.limit) + 1,   //页码-->
<!--                sort: params.sort,      //排序列名-->
<!--                sortOrder: params.order //排位命令（desc，asc）-->
<!--            };-->
<!--            return temp;-->
<!--        },-->
        columns: [{
            field: 'id',
            title: 'ID',
            sortable: true
        }, {
            field: 'alarm_time',
            title: '报警时间',
            sortable: true
        }, {
            field: 'attack_type',
            title: '攻击类型',
            sortable: true
        }, {
            field: 'victim_ip',
            title: '受害者IP地址',
            sortable: true
        }, {
            field: 'ratio',
            title: '抽样率',
            sortable: true
        }, {
            field: 'b_pck',
            title: '抽样攻击包数（个）',
            sortable: true
        }, {
            field: 'b_len_avg',
            title: '攻击包长度均值（B）',
            sortable: true
        }, {
            field: 'b_pck_spd',
            title: '攻击包速率（pps）',
            sortable: true
        }, {
            field: 'b_payload_spd',
            title: '攻击流量带宽（Bps）',
            sortable: true
        }]
    });
    $('#table_coarse').bootstrapTable("hideLoading");

    //初始化bootstrap-table的内容
    $('#table_fine').bootstrapTable({
        url: '/ddos_detection_table_fine',  //请求后台的URL（*）
        method: 'GET',                      //请求方式（*）
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        classes: "table table-bordered table-striped table-sm", // table-striped表示隔行变色,table-sm样式
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "desc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                      //是否显示表格搜索
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
<!--        //得到查询的参数-->
<!--        queryParams : function (params) {-->
<!--            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的-->
<!--            var temp = {-->
<!--                rows: params.limit,                         //页面大小-->
<!--                page: (params.offset / params.limit) + 1,   //页码-->
<!--                sort: params.sort,      //排序列名-->
<!--                sortOrder: params.order //排位命令（desc，asc）-->
<!--            };-->
<!--            return temp;-->
<!--        },-->
        columns: [{
            field: 'id',
            title: 'ID',
            sortable: true
        }, {
            field: 'alarm_time',
            title: '报警时间',
            sortable: true
        }, {
            field: 'attack_type',
            title: '攻击类型',
            sortable: true
        }, {
            field: 'victim_ip',
            title: '受害者IP地址',
            sortable: true
        }, {
            field: 'ratio',
            title: '抽样率',
            sortable: true
        }, {
            field: 'b_pck',
            title: '抽样攻击包数（个）',
            sortable: true
        }, {
            field: 'b_len_avg',
            title: '攻击包长度均值（B）',
            sortable: true
        }, {
            field: 'b_pck_spd',
            title: '攻击包速率（pps）',
            sortable: true
        }, {
            field: 'b_payload_spd',
            title: '攻击流量带宽（Bps）',
            sortable: true
        }]
    });
    $('#table_fine').bootstrapTable("hideLoading");


// 页面初次访问时加载数据
$(document).ready(loadData())

// 定时5s刷新数据
setInterval("loadData()", 5000);

// 从后端读取所有数据
function loadData(){
 $.get("/ddos_detection_chart/"+ window.location.search,
        function(data){
                console.log(data)

            // 更新攻击类型分布
            if(data['victim_ip_ratio_list'].length != 0){
                container_victim_ip_ratio.series[0].setData(data['victim_ip_ratio_list'])
            }

            // 更新攻击类型分布
            if(data['attack_type_ratio_list'].length != 0){
                container_attack_type_ratio.series[0].setData(data['attack_type_ratio_list'])
            }

            // 更新攻击流量分布
            if(data['traffic_list'].length != 0){
                container_traffic.series[0].setData(data['traffic_list'])
            }

            // 更新攻击包数分布
            if(data['packets_list'].length != 0){
                container_packets.series[0].setData(data['packets_list'])
            }

            // 更新攻击流量带宽峰值，并实时更新-->
            var traffic_speed_list_len = data['traffic_speed_list'].length
            if (traffic_speed_list_len != 0){
                for (i=0; i<traffic_speed_list_len; i+=1){
                    var points = data['traffic_speed_list'][i]
                    if (points.length != 0){
<!--                            console.log(points)-->
                        container_traffic_speed.series[i].setData(points)
                    }
                }
            }

            // 更新攻击包速率峰值，并实时更新
            var packet_speed_list_len = data['packet_speed_list'].length
            if (packet_speed_list_len != 0){
                for (i=0; i<packet_speed_list_len; i+=1){
                    var points = data['packet_speed_list'][i]
                    if (points.length != 0){
<!--                        console.log(points)-->
                        container_packet_speed.series[i].setData(points)
                    }
                }
            }
        });
        $('#table_coarse').bootstrapTable("refresh");
        $('#table_fine').bootstrapTable("refresh");
}