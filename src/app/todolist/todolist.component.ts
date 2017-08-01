import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent implements OnInit {

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
  // this.$items.push(this.newItem);
  // this.newItem = '';

  // this.$items.push({
  //   'titel': 'test',
  //   'wachttijd': '90',
  //   'bereidingstijd': '00',
  //   'bereidingswijze': 'gewoon doen'
  // });

  this.$items.push(this.newItem);
}

addIngredient() {
  this.newItem.ingredienten.push({naam: null, hoeveelheid: 0, eenheid: null});
}

  trackByIndex(index: number, obj: any): any {
  return index;
}
}

