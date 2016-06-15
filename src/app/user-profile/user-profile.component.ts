import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-user-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="profile-container">
      <h2>User profile</h2>
      Username: {{ userDetails.username }} - E-Mail: {{ userDetails.email }}
    </div>
  `,
  styles: [`
    .profile-container {
      border: 1px black solid;
      padding: 10px;
      margin: 10px 0;
    }
  `]
})
export class UserProfileComponent {
  @Input() userDetails: User;
}
