import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rateTooltip'})
export class RateTooltipPipe implements PipeTransform {
  transform(value: string, rating: number): string {
    return value.replace('{rating}', rating.toString());
  }
}
