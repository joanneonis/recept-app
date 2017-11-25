import {Component, OnInit, NgModule, VERSION, ViewChild, ElementRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	showSearchList = false;

	constructor() { }



  ngOnInit() {
  }

}
