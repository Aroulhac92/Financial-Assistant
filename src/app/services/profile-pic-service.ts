import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './interface';

@Injectable({
  providedIn: 'root'
})

export class ProfilePicService {

  constructor(private http: HttpClient) {

  }

  profilePicUrl = 'https://randomuser.me/api/';

  getProfile() {
    return this.http.get<Profile>(this.profilePicUrl)
  }


}
