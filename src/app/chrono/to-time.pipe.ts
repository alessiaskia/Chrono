import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {
  seconds : number;

  transform(value: number, ...args: unknown[]):any {
    let millisecondes = value % 1000;
    let seconds = Math.floor((value % 60000) / 1000);
    let minutes = Math.floor((value / 3600000)/60000);
    let hours = Math.floor(value / 3600000);

    let hoursString = (hours < 10) ? "0" + hours : hours;
    let minutesString = (minutes < 10) ? "0" + minutes : minutes;
    let secondsString = (seconds < 10) ? "0" + seconds : seconds;
    let millisecondesString = (millisecondes < 10) ? '00' + millisecondes : millisecondes;

    let stringTime = hoursString + ':' + minutesString + ':' + secondsString + ':' + millisecondesString;
    return stringTime;
  }

}
