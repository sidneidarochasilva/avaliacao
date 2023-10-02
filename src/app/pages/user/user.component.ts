import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm: FormGroup | any;
  userId: string | any;

  errorMessages = {
    title: [
      { type: 'required', message: 'Title is required' }
    ],
    firstName: [
      { type: 'required', message: 'First Name is required' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Invalid email format' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.userForm = this.formBuilder.group({
      id: [null],
      picture: [''],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['']
    });


    if (this.userId) {
      this.getUSer(this.userId);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userId) {
        let user = this.userForm.value
        this.userService.updateUser(user, user.id).subscribe(data => {
          alert('Usuário atualizado com sucesso!')
          this.userForm.patchValue(data)})

      } else {
        this.userService.addUser(this.userForm.value).subscribe(data => {
          alert('Usuario criado com sucesso!')
          this.router.navigate(['/']);
        })
      }
    }
  }


  getUSer(userId: string) {
    this.userService.getDetails(userId).subscribe((userData) => {
      this.userForm.patchValue(userData);
    });
  }




  updateUser(user: any, userId: string) {
    this.userService.updateUser(user, userId).subscribe((userData) => {
      this.userForm.patchValue(userData);
    });
  }

  deleteUser(user:any){
    this.userService.deleteUser(user.value.id).subscribe(data => {
      alert('Usuario excluído!')
      this.router.navigate(['/']);
    })
  }
}
