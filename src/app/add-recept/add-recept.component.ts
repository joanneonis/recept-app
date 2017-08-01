import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-add-recept',
  templateUrl: './add-recept.component.html',
  styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {
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

  add() {
    this.$items.push(this.newItem);
  }

  addIngredient() {
    this.newItem.ingredienten.push({naam: null, hoeveelheid: 0, eenheid: null});
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
