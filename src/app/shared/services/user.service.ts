import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  listUsers(page:number):Observable<User[] | any> {
    const url = `${environment.baseUrlAPI}/user?page=${page}`;
    return this.http.get<User[]>(url)
    .pipe(catchError((err) => err));
  }

  getDetails(id: string) {
    return this.http.get<User>(`${environment.baseUrlAPI}/user/${id}`)
    .pipe(catchError((err) => err));
  }

  addUser(user:any):Observable<any> {
    const url = `${environment.baseUrlAPI}/user/create`;
    return this.http.post<any>(url, user)
    .pipe(catchError((err) => err));
  }

  updateUser(user: User,userId:string):Observable<any> {
    const url = `${environment.baseUrlAPI}/user/${userId}`;
    return this.http.put<any>(url, user)
    .pipe(catchError((err) => err));
  }

  deleteUser(userId: string) {
    const url = `${environment.baseUrlAPI}/user/${userId}`;
    return this.http.delete<any>(url)
    .pipe(catchError((err) => err));

  }

}
