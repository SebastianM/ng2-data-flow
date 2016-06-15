import { Component } from '@angular/core';
import { User } from './models';
import { UserProfileComponent } from './user-profile';
import Immutable = require('immutable');

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  directives: [UserProfileComponent],
  styleUrls: ['demo.component.css'],
  template: `
    Username: {{ user.username }} - Email: {{ user.email }}

    <app-user-profile [userDetails]="user"></app-user-profile>

    <h2>Immutable</h2>
    <app-user-profile [userDetails]="userImmutable.toJS()"></app-user-profile>
    
    <p><button (click)="changeEmail()" class="btn btn-primary">Change E-Mail</button></p>
  `
})
export class DemoAppComponent {
  user: User = {
    username: 'admin',
    email: 'admin@abc.de'
  };

  userImmutable = Immutable.Map({
    username: 'admin',
    email: 'admin@abc.de'
  });

  changeEmail() {
    this.user.email = 'new@abc.de';
    this.userImmutable = this.userImmutable.set('email', 'new@abc.de');
  }
}
