import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardUserComponent {

  @Input() user: User | any;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  redirectToUserDetails(id: string) {
 
    this.router.navigate(['/user/', id]);
  }


}
