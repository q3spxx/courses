import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const m = duration % 60;
    const minutes = m < 10 ? '0' + m : m;
    if (hours) {
      return `${hours}h ${minutes}min`;
    } else {
      return `${minutes}min`;
    }
  }

}
