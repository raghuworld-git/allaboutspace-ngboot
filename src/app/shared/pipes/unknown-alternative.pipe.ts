import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknownAlternative',
  standalone: true
})
export class UnknownAlternativePipe implements PipeTransform {

  transform(value: number | null | undefined, alternativeText: string = ''): string | number {
    let defaultText: string = "NA";
    if (alternativeText != "") {
      defaultText = alternativeText;
    }
    if (value === null || value === undefined || value === undefined) {
      return defaultText;
    }
    return value;
  }

}
