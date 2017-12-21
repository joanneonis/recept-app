import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {
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

	@Output() onFilterChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
	}

	onChange(value: any) {
		// console.log('Value changed to', value);

		this.onFilterChange.emit([0, this.someValue]);
  }

	swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
			// if (currentIndex > this.avatars.length || currentIndex < 0) {
			// 	return;
			// }

			// swipe right, next avatar
			if (action === this.SWIPE_ACTION.RIGHT) {
					this.open = true;
			}
			if (action === this.SWIPE_ACTION.LEFT) {
				this.open = false;
			}
	}
}
