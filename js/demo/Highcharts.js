var TorSpdChart = Highcharts.chart('container-Tor-Speed', {
        title: {
            text:'流量传输速度'
                // '实时到达流量的速度'
        },
        yAxis: {
            title: {
                text: '每秒传输的数据包个数'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },
        series: [{
            name: '服务器端流量',
            data: [0,0,0,0,0,0,0,0,0,0]  //初始值 后面会更新
        }, {
            name: '客户端流量',
            data: [0,0,0,0,0,0,0,0,0,0]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });

setInterval(function () {
    if (TorSpdChart) {
        loadTorSpd()//图1
    }
}, 1000);

function loadTorSpd(){
    $.get("/Tor_Spd_json/"+ window.location.search,
            function(data) {    // data 为服务器返回的数据
            var shift1 = TorSpdChart.series[0].data.length > 10; 	// 当数据点数量超过 10 个，则指定删除第一个点
            var shift2 = TorSpdChart.series[1].data.length > 10;
            var update_time =(new Date()).getTime();
            // 新增点操作
            // 具体的参数详见：https://api.hcharts.cn/highcharts#Series.addPoint
            TorSpdChart.series[0].addPoint(data["Server_Pck_Spd"], true, shift1);
            TorSpdChart.series[1].addPoint(data["Client_Pck_Spd"], true, shift2);

            activeLastPointTooltip(TorSpdChart)
    });
}
