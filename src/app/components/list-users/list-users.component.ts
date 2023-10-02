import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';


type RequestInfo = {
  next: any;
};

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
  users: User[] = [];

  info: RequestInfo = {
    next: null,
  };

  showGoUpButton = false;

  private pageNum = 1;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private service: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

   this.getDataFromService();
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
     
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
     
      this.showGoUpButton = false;
    }

    const windowHeight = window.innerHeight;
    const pageHeight = this.document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY || this.document.documentElement.scrollTop;
    const bottomOffset = pageHeight - (scrollPosition + windowHeight);

    if (bottomOffset < 1) {
      this.getDataFromService();
    }
  }



  onScrollTop():void{
    this.document.body.scrollTop = 0; 
    this.document.documentElement.scrollTop = 0; 
  }




  private getDataFromService(): void {
    this.service
      .listUsers(this.pageNum )
      .pipe(take(1))
      .subscribe((res: any) => {

        if (res?.data?.length > 0) {
          const { page, data } = res;
          this.users = [...this.users, ...data];
          this.pageNum = page + 1;
        } 
      }, (error:any) => console.log(error));
  }

  redirect(){
    this.router.navigate(['/user']);
  }
}
