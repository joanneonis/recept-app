import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {

	// transform(kooktimeVal: any, kooktimeFil?: any): any {
	// 		console.log('kooktimeFil', kooktimeFil);
	// 		return kooktimeFil
	// 		 ? kooktimeVal.filter(recept => recept.bereidingstijd >= kooktimeFil)
	// 		 : kooktimeVal;
	// }

	transform(input, args?) {
    const [minTime, maxTime] = args;
    return input.filter(recept => {
      return recept.bereidingstijd >= +minTime && recept.bereidingstijd <= +maxTime;
    });
  }

}

