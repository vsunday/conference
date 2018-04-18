import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'displayTime'})
export class DisplayTimePipe implements PipeTransform {
  transform(time: string) {
    const minutes = Math.floor((+time) / 60);
    const seconds = this.precisionRound(+time - minutes * 60, 2);
    return (minutes == 0 ? '' : minutes + "'") + seconds + '"';
  }
  
  precisionRound(n: number, precision: number) {
    var factor = Math.pow(10, precision);
    return Math.round(n * factor) / factor;
  };
}