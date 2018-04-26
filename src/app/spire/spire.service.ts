import { HttpClient } from '@angular/common/http';

import { Streak } from './streak.model';

export class SpireService {
  public timelineData: any = {
    chartType: 'Timeline',
    dataTable: [
      ['Date', 'Name', 'Start', 'End'],
      ['勤務時間', 'Working Hour', new Date(2018, 4, 25, 12, 0, 0), new Date(2018, 4, 25, 14, 30, 0)],
      ['State', 'Calm',  new Date(2018, 4, 25, 12, 0, 0), new Date(2018, 4, 25, 12, 10, 0)],
      ['State', 'Active', new Date(2018, 4, 25, 12, 15, 0), new Date(2018, 4, 25, 12, 35, 0)], 
      ['State', 'Calm', new Date(2018, 4, 25, 12, 43, 0), new Date(2018, 4, 25, 12, 50, 0)], 
      ['State', 'Sedentary', new Date(2018, 4, 25, 13, 0, 0), new Date(2018, 4, 25, 14, 0, 0)], 
      ['State', 'Focus', new Date(2018, 4, 25, 14, 0, 0), new Date(2018, 4, 25, 14, 30, 0)], 
    ],
    options: {
      timeline: {
        // barLabelStyle: {
        //   fontSize: 30
        // },
        // showRowLabels: false,
      },
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    },
  }
  
  public breathData: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Time', 'Breath Rate'],
      [new Date(2018, 4, 25, 12, 0, 0), 25.0],
      [new Date(2018, 4, 25, 12, 5, 0), 24.0],
      [new Date(2018, 4, 25, 12, 10, 0), 26.4],
    ],
    options: {
      title: null,
      legend: {
        position: 'bottom'
      },
      animation: {
        duration: 500,
        easing: 'out',
        startup: true,
      },
    }
  }
  
  public stepData: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Time', 'Steps'],
      [new Date(2018, 4, 25, 12, 0, 0), 25.0],
      [new Date(2018, 4, 25, 12, 5, 0), 24.0],
      [new Date(2018, 4, 25, 12, 10, 0), 26.4],
    ],
    options: {
      title: null,
      colors: ['red'],
      legend: {
        position: 'bottom',
      },
    }
  }
  
  public caloryData: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Time', 'Calories'],
      [new Date(2018, 4, 25, 12, 0, 0), 25.0],
      [new Date(2018, 4, 25, 12, 5, 0), 24.0],
      [new Date(2018, 4, 25, 12, 10, 0), 26.4],
    ],
    options: {
      title: null,
      colors: ['green'],
      legend: {
        position: 'bottom',
      },
    }
  }
  
  public stressGauge: any = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Stress', Math.floor(Math.random() * 100)]
    ],
    options : {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    } 
  }
}