import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as $ from 'jquery';
import { OwlCarousel} from 'ng2-owl-carousel';

@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent implements OnInit {
@ViewChild('owlCarousel') owlCarousel: OwlCarousel;

$items: FirebaseListObservable<any[]>;
newItem = {ingredienten: []};
items: Array<any>= [];
filter = [0, 180];
$owlElement: any;
defaultOptions: any = {};

constructor(af: AngularFireDatabase) {
    this.$items = af.list('/recepten', {
      query: {
        orderByChild: 'size'
      }
    });
  }

ngOnInit() {
	this.$items.subscribe(a => {
		this.items = a;
	});
}

handleFilterChange(filterValue: number[]) {
	this.filter = filterValue;
	this.owlCarousel.refresh();
}

}
