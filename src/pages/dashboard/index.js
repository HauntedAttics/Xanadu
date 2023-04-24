import React, { memo, useEffect } from 'react'
import { DashboardWrapper } from './style'
import * as echarts from 'echarts'

export default memo(function ECharts() {

  document.documentElement.scrollTop = 0

  useEffect(() => {
    const myChart1 = echarts.init(document.getElementById('chart1'))
    const myChart2 = echarts.init(document.getElementById('chart2'))
    const myChart3 = echarts.init(document.getElementById('chart3'))
    const myChart4 = echarts.init(document.getElementById('chart4'))
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [
      [55, 9, 56, 0.46, 18, 6, 1],
      [25, 11, 21, 0.65, 34, 9, 2],
      [56, 7, 63, 0.3, 14, 5, 3],
      [33, 7, 29, 0.33, 16, 6, 4],
      [42, 24, 44, 0.76, 40, 16, 5],
      [82, 58, 90, 1.77, 68, 33, 6],
      [74, 49, 77, 1.46, 48, 27, 7],
      [78, 55, 80, 1.29, 59, 29, 8],
      [267, 216, 280, 4.8, 108, 64, 9],
      [185, 127, 216, 2.52, 61, 27, 10],
      [39, 19, 38, 0.57, 31, 15, 11],
      [41, 11, 40, 0.43, 21, 7, 12],
      [64, 38, 74, 1.04, 46, 22, 13],
      [108, 79, 120, 1.7, 75, 41, 14],
      [108, 63, 116, 1.48, 44, 26, 15],
      [33, 6, 29, 0.34, 13, 5, 16],
      [94, 66, 110, 1.54, 62, 31, 17],
      [186, 142, 192, 3.88, 93, 79, 18],
      [57, 31, 54, 0.96, 32, 14, 19],
      [22, 8, 17, 0.48, 23, 10, 20],
      [39, 15, 36, 0.61, 29, 13, 21],
      [94, 69, 114, 2.08, 73, 39, 22],
      [99, 73, 110, 2.43, 76, 48, 23],
      [31, 12, 30, 0.5, 32, 16, 24],
      [42, 27, 43, 1, 53, 22, 25],
      [154, 117, 157, 3.05, 92, 58, 26],
      [234, 185, 230, 4.09, 123, 69, 27],
      [160, 120, 186, 2.77, 91, 50, 28],
      [134, 96, 165, 2.76, 83, 41, 29],
      [52, 24, 60, 1.03, 50, 21, 30],
      [46, 5, 49, 0.28, 10, 6, 31]
    ];
    const dataGZ = [
      [26, 37, 27, 1.163, 27, 13, 1],
      [85, 62, 71, 1.195, 60, 8, 2],
      [78, 38, 74, 1.363, 37, 7, 3],
      [21, 21, 36, 0.634, 40, 9, 4],
      [41, 42, 46, 0.915, 81, 13, 5],
      [56, 52, 69, 1.067, 92, 16, 6],
      [64, 30, 28, 0.924, 51, 2, 7],
      [55, 48, 74, 1.236, 75, 26, 8],
      [76, 85, 113, 1.237, 114, 27, 9],
      [91, 81, 104, 1.041, 56, 40, 10],
      [84, 39, 60, 0.964, 25, 11, 11],
      [64, 51, 101, 0.862, 58, 23, 12],
      [70, 69, 120, 1.198, 65, 36, 13],
      [77, 105, 178, 2.549, 64, 16, 14],
      [109, 68, 87, 0.996, 74, 29, 15],
      [73, 68, 97, 0.905, 51, 34, 16],
      [54, 27, 47, 0.592, 53, 12, 17],
      [51, 61, 97, 0.811, 65, 19, 18],
      [91, 71, 121, 1.374, 43, 18, 19],
      [73, 102, 182, 2.787, 44, 19, 20],
      [73, 50, 76, 0.717, 31, 20, 21],
      [84, 94, 140, 2.238, 68, 18, 22],
      [93, 77, 104, 1.165, 53, 7, 23],
      [99, 130, 227, 3.97, 55, 15, 24],
      [146, 84, 139, 1.094, 40, 17, 25],
      [113, 108, 137, 1.481, 48, 15, 26],
      [81, 48, 62, 1.619, 26, 3, 27],
      [56, 48, 68, 1.336, 37, 9, 28],
      [82, 92, 174, 3.29, 0, 13, 29],
      [106, 116, 188, 3.628, 101, 16, 30],
      [118, 50, 0, 1.383, 76, 11, 31]
    ];
    const dataSH = [
      [91, 45, 125, 0.82, 34, 23, 1],
      [65, 27, 78, 0.86, 45, 29, 2],
      [83, 60, 84, 1.09, 73, 27, 3],
      [109, 81, 121, 1.28, 68, 51, 4],
      [106, 77, 114, 1.07, 55, 51, 5],
      [109, 81, 121, 1.28, 68, 51, 6],
      [106, 77, 114, 1.07, 55, 51, 7],
      [89, 65, 78, 0.86, 51, 26, 8],
      [53, 33, 47, 0.64, 50, 17, 9],
      [80, 55, 80, 1.01, 75, 24, 10],
      [117, 81, 124, 1.03, 45, 24, 11],
      [99, 71, 142, 1.1, 62, 42, 12],
      [95, 69, 130, 1.28, 74, 50, 13],
      [116, 87, 131, 1.47, 84, 40, 14],
      [108, 80, 121, 1.3, 85, 37, 15],
      [134, 83, 167, 1.16, 57, 43, 16],
      [79, 43, 107, 1.05, 59, 37, 17],
      [71, 46, 89, 0.86, 64, 25, 18],
      [97, 71, 113, 1.17, 88, 31, 19],
      [84, 57, 91, 0.85, 55, 31, 20],
      [87, 63, 101, 0.9, 56, 41, 21],
      [104, 77, 119, 1.09, 73, 48, 22],
      [87, 62, 100, 1, 72, 28, 23],
      [168, 128, 172, 1.49, 97, 56, 24],
      [65, 45, 51, 0.74, 39, 17, 25],
      [39, 24, 38, 0.61, 47, 17, 26],
      [39, 24, 39, 0.59, 50, 19, 27],
      [93, 68, 96, 1.05, 79, 29, 28],
      [188, 143, 197, 1.66, 99, 51, 29],
      [174, 131, 174, 1.55, 108, 50, 30],
      [187, 143, 201, 1.39, 89, 53, 31]
    ];
    const lineStyle = {
      width: 1,
      opacity: 0.5
    };
    const option1 = {
      backgroundColor: ' ',
      title: {
        text: 'AQI - Radar',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      legend: {
        bottom: 5,
        data: ['Beijing', 'Shanghai', 'Guangzhou'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selectedMode: 'single'
      },
      radar: {
        indicator: [
          { name: 'AQI', max: 300 },
          { name: 'PM2.5', max: 250 },
          { name: 'PM10', max: 300 },
          { name: 'CO', max: 5 },
          { name: 'NO2', max: 200 },
          { name: 'SO2', max: 100 }
        ],
        shape: 'circle',
        splitNumber: 5,
        axisName: {
          color: 'rgb(238, 197, 102)'
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)',
              'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)',
              'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)',
              'rgba(238, 197, 102, 1)'
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        }
      },
      series: [
        {
          name: 'Beijing',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
            color: '#F9713C'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          name: 'Shanghai',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
            color: '#B3E4A1'
          },
          areaStyle: {
            opacity: 0.05
          }
        },
        {
          name: 'Guangzhou',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(238, 197, 102)'
          },
          areaStyle: {
            opacity: 0.05
          }
        }
      ]
    };
    myChart1.setOption(option1)

    setTimeout(function () {
      const option2 = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2017', '2018', '2019', '2020', '2021', '2022'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2015} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2015',
              tooltip: '2015'
            }
          }
        ]
      };
      myChart2.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart2.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart2.setOption(option2);
    });

    // Generate data
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 20; i++) {
      let date = new Date((dottedBase += 3600 * 24 * 1000));
      category.push(
        [date.getFullYear(), date.getMonth(), date.getDate()].join('-')
      );
      let b = Math.random() * 200;
      let d = Math.random() * 200;
      barData.push(b);
      lineData.push(d + b);
    }
    // option
    const option3 = {
      backgroundColor: ' ',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [
        {
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: lineData
        },
        {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ])
          },
          data: barData
        },
        {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' }
            ])
          },
          z: -12,
          data: lineData
        },
        {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f'
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData
        }
      ]
    };
    myChart3.setOption(option3)

    const option4 = {
      backgroundColor: ' ',
      title: {
        text: 'Digital Technology',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'AI' },
            { value: 310, name: 'IoT' },
            { value: 274, name: 'Big Data' },
            { value: 235, name: '5G Technology' },
            { value: 400, name: 'Blockchain' }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
    myChart4.setOption(option4)
  })

  return (
    <DashboardWrapper>
      <div className="db-left">
        <div id="chart3"></div>
        <div id="chart4"></div>
      </div>
      <div className="db-mid">
        <div id="chart1"></div>
      </div>
      <div className="db-right">
        <div id="chart2"></div>
      </div>
    </DashboardWrapper>
  )
})
