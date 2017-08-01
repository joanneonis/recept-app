import { Component, OnInit, Input } from '@angular/core';
import { Recept } from '../interfaces/recept.model';


@Component({
  selector: 'app-recept-full',
  templateUrl: './recept-full.component.html',
  styleUrls: ['./recept-full.component.css']
})
export class ReceptFullComponent implements OnInit {
  @Input() recept: Recept;

  constructor() { }

  ngOnInit() {
  }

}
