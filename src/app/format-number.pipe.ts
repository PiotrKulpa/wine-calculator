import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatNumber'})
export class FormatNumberPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    console.log(window.navigator.language)
    if (!value) {
      return value
    } else {
      return value.toLocaleString()
    };

    // Get the locale using any technique
    // var locale = window.navigator.language;
    // if (locale == 'GERMANY') { // test code, replace with your logic
    //     return // German formatted number
    // else
    //     return // defaults
  }
}
