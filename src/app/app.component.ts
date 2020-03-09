import { Component } from '@angular/core';
declare const APP_VERSION: number;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-builder-testing ' + APP_VERSION;
}
