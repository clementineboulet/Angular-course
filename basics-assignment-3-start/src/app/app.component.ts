import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	display = false;
	nbButtonClick = [];
	counter = 0;

	onClickDisplay() {
		this.display = true;
		console.log(this.nbButtonClick);
		this.nbButtonClick.push(new Date());
		this.counter += 1;
	}
}
