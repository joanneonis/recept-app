import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent implements OnInit {

$items: FirebaseListObservable<any[]>;
newItem = {ingredienten: []};
items: Array<any>= [];


constructor(af: AngularFireDatabase) {
    this.$items = af.list('/recepten', {
      query: {
        orderByChild: 'size'
      }
    });
  }

ngOnInit() {
  this.$items.subscribe(a => { this.items = a; });
}

}
