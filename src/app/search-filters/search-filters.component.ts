
import { Component, OnInit, EventEmitter, Output, ViewChild, QueryList, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})


export class SearchFiltersComponent implements AfterViewInit {
	@ViewChild('sliderRef') sliderRef;

	PreperationTime;
	SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
	open = false;
	idx;

  public someValue =  180;
  public someMin =  0;
  public someMax =  180;
  public someStep =  1;
  public someRange = [3, 7];
  public someRange2 = [10, 15];
  public someRange3 = [2, 8];
	public simeTime =  0;
	public step = 20;

	SliderConfig: any = {
		orientation: 'vertical',
		connect: true,
		behaviour: 'drag',
	};

	@Output() onFilterChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  // ngOnInit() {

	// }

	onChange(value: any) {
		// console.log('Value changed to', value);

		this.onFilterChange.emit([0, this.someValue]);
	}

	ngAfterViewInit() {
		console.log(this.sliderRef.slider);

	}

	swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {

			// swipe right, next avatar
			if (action === this.SWIPE_ACTION.RIGHT) {
					this.open = true;
			}
			if (action === this.SWIPE_ACTION.LEFT) {
				this.open = false;
			}
	}
}
