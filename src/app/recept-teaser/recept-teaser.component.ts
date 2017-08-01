import { Component, OnInit, Input } from '@angular/core';
import { Recept } from '../interfaces/recept.model';


@Component({
  selector: 'app-recept-teaser',
  templateUrl: './recept-teaser.component.html',
  styleUrls: ['./recept-teaser.component.css']
})
export class ReceptTeaserComponent implements OnInit {
  @Input() recept: Recept;

  constructor() { }

  ngOnInit() {
  }

}
