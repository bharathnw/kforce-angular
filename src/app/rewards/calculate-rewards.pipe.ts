import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateRewards'
})
export class CalculateRewardsPipe implements PipeTransform {

  //Calculating the reward points
  transform(value: number): number {
    if (value > 100) {
      return ((value - 100) * 2) + 50
    }
    else if (value > 50) {
      return (value - 50)
    }
    else return 0;

  }

}
