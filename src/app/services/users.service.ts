import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUser(){

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'andres');

   

    return this.http.get('https://reqres.in/api/user', { params })
                    .pipe(
                        map((res:any) => res.data)
                    )
  }

}
