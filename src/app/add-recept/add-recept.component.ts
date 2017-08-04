import {
	Component,
	OnInit
} from '@angular/core';
import {
	AngularFireDatabase,
	FirebaseListObservable
} from 'angularfire2/database';
import {
	Subject
} from 'rxjs/Subject';
import {
	ActivatedRoute
} from '@angular/router';

@Component({
	selector: 'app-add-recept',
	templateUrl: './add-recept.component.html',
	styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {
	$items: FirebaseListObservable<any[]>;
	newItem: any = {
		ingredienten: []
	};
	items: Array<any> = [];

	id: string;
	private sub: any;


	constructor(private af: AngularFireDatabase, private route: ActivatedRoute) {
		this.$items = af.list('/recepten', {
			query: {
				orderByChild: 'size'
			}
		});
	}

	ngOnInit() {
		// this.$items.subscribe(a => { this.items = a; });

		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];

			if (this.id) {
				this.af.object(`/recepten/${this.id}`).subscribe(a => this.newItem = a);
			}
		});
	}

	add() {
		if (this.id) {
			this.$items.update(this.id, this.newItem);
		} else {
			this.$items.push(this.newItem);
		}

	}

	addIngredient() {
		this.newItem.ingredienten.push({
			naam: null,
			hoeveelheid: '',
			eenheid: null
		});
	}

	trackByIndex(index: number, obj: any): any {
		return index;
	}
}
