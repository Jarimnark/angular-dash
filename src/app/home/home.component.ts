import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as worldMap from '../../assets/worldMap.json';
import * as echarts from 'echarts/types/dist/echarts';
import * as echart from 'echarts';
import { TableComponent } from '../charts/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, NgxEchartsDirective, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideEcharts()],
})
export class HomeComponent implements OnInit {
  async ngOnInit() {
    console.log(worldMap);

    this.mapFunction(); //map option
    this.option6Function(this.series, this.stackInfo); //option6
  }

  option2: echarts.EChartsOption = {
    color: ['#C457FE', '#F14E4F', '#6BE280'],

    legend: {
      data: ['Loyal Customer', 'New Customers', 'Unique Customers'],
      top: 'bottom',
      left: '15%',
      textStyle: {
        fontSize: 10,
      },
    },

    grid: {
      height: '70%',
      top: '10%',
      left: '0',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        fontSize: 9,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      type: 'category',
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      axisLabel: {
        fontSize: 9,
      },

      type: 'value',
    },
    series: [
      {
        name: 'Loyal Customer',
        symbolSize: 0,
        type: 'line',
        lineStyle: { width: 4 },
        data: [320, 350, 300, 270, 250, 270, 300, 320, 300, 270, 250, 220],
        smooth: true,
      },
      {
        name: 'New Customers',
        symbolSize: 0,
        type: 'line',
        smooth: true,
        lineStyle: { width: 4 },
        data: [250, 270, 250, 230, 250, 290, 330, 360, 330, 300, 270, 220],
      },
      {
        name: 'Unique Customers',
        symbolSize: 0,
        type: 'line',
        smooth: true,
        lineStyle: { width: 4 },
        data: [260, 300, 350, 300, 270, 250, 270, 290, 310, 330, 300, 290, 280],
      },
    ],
  };

  option3: echarts.EChartsOption = {
    color: ['#0195FF', '#5AEBBA'],

    legend: {
      top: 'bottom',
      textStyle: {
        fontSize: 9,
      },
    },
    grid: {
      left: '0',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      height: '75%',
      top: '8%',
    },
    xAxis: {
      axisLabel: {
        fontSize: 9,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      type: 'category',
      data: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturnday',
        'Sunday',
      ],
    },
    yAxis: {
      axisLabel: {
        fontSize: 9,
        formatter: function (value) {
          return value / 1000 + 'k';
        },
      },
      type: 'value',
    },
    series: [
      {
        name: 'Online Sales',
        type: 'bar',
        data: [14500, 18500, 6000, 16000, 13500, 18000, 22000],
      },
      {
        name: 'Offline Sales',
        type: 'bar',
        data: [12500, 12000, 23000, 6000, 12000, 14000, 12400],
      },
    ],
  };

  option4: echarts.EChartsOption = {
    // title: {
    //   text: 'Stacked Line'
    // },

    color: ['#5AD8AD', '#53B0EB'],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      // data: ['Last Month', 'This Month'],
      top: 'bottom',
      textStyle: {
        fontSize: 9,
      },
    },

    grid: {
      left: '-8%',
      right: '0',
      bottom: '3%',
      containLabel: true,
      top: '3%',
    },

    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturnday',
        'Sunday',
      ],
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        name: 'This Month',
        symbolSize: 8,
        type: 'line',
        lineStyle: { width: 4 },
        data: [640, 550, 580, 500, 570, 390, 660],
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 0.6,
            colorStops: [
              {
                offset: 0,
                color: '#5AD8AD', // color at 0%
              },
              {
                offset: 1,
                color: 'white', // color at 100%
              },
            ],
            global: false, // default is false
          },
        },
      },
      {
        name: 'Last Month',
        symbolSize: 8,
        type: 'line',
        smooth: true,
        lineStyle: { width: 4 },
        data: [400, 460, 350, 230, 250, 250, 350],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 0.6,
            colorStops: [
              {
                offset: 0,
                color: '#53B0EB', // color at 0%
              },
              {
                offset: 1,
                color: 'white', // color at 100%
              },
            ],
            global: false, // default is false
          },
        },
      },
    ],
  };

  option5: echarts.EChartsOption = {
    color: ['#5CBB97', '#FFCF00'],

    legend: {
      // data: ['Reality Sales', 'Target Sales'],
      top: 'bottom',
      textStyle: {
        fontSize: 9,
      },
    },
    grid: {
      left: '-9%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      top: '3%',
      height: '80%',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLabel: {
        fontSize: 9,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        name: 'Reality Sales',
        type: 'bar',
        data: [1200, 1100, 1000, 1300, 1500, 1500, 1500],
      },
      {
        name: 'Target Sales',
        type: 'bar',
        data: [1800, 1700, 1900, 1700, 2000, 2000, 2000],
      },
    ],
  };

  // option6
  series: {
    data: number[];
    type: string;
    stack: string;
    name: string;
    barCategoryGap: string;
  }[] = [
    {
      data: [180, 190, 120, 130, 120, 140],
      type: 'bar',
      stack: 'a',
      name: 'Services',
      barCategoryGap: '80%',
    },
    {
      data: [100, 110, 120, 120, 110, 80],
      type: 'bar',
      stack: 'a',
      name: 'Volume',
      barCategoryGap: '80%',
    },
  ];

  stackInfo: { [key: string]: { stackStart: number[]; stackEnd: number[] } } =
    {};

  option6Function(
    series: { data: number[]; type: string; stack: string; name: string }[],
    stackInfo: { [key: string]: { stackStart: number[]; stackEnd: number[] } }
  ): void {
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: [],
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data) {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }
    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data as
        | number[]
        | { value: number; itemStyle: object }[];
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        // const isStart = info.stackStart[j] === i;
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 3 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j] as number,
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
        };
      }
    }
  }

  option6: echarts.EChartsOption = {
    grid: {
      left: '-8%',
      right: '0%',
      bottom: '3%',
      containLabel: true,
      height: '75%',
      top: '8%',
    },
    legend: {
      top: 'bottom',
      textStyle: {
        fontSize: 9,
      },
    },
    xAxis: {
      show: false,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: this.series as any,
  };
  // option6

  // map option
  mapOption: echarts.EChartsOption = {};

  mapFunction(): void {
    echart.registerMap('World', JSON.stringify(worldMap));
    this.mapOption = {
      visualMap: {
        type: 'piecewise',
        showLabel: false,
        itemSymbol: 'none',

        pieces: [
          {
            value: 1,
            color: '#FFA800',
          },
          {
            value: 2,
            color: '#F64D60',
          },
          {
            value: 3,
            color: '#8A50FC',
          },
          {
            value: 4,
            color: '#00AB99',
          },
          {
            value: 5,
            color: '#6993FF',
          },
        ],
      },

      series: [
        {
          name: 'world',
          type: 'map',
          roam: true,
          map: 'World',
          zoom: 1.1,

          data: [
            { name: 'United States of America', value: 1 },
            { name: 'Brazil', value: 2 },
            { name: 'China', value: 3 },
            { name: 'Saudi Arabia', value: 4 },
            { name: 'Dem. Rep. Congo', value: 5 },
            { name: 'Indonesia', value: 4 },
          ],
        },
      ],
    };
  }
}
