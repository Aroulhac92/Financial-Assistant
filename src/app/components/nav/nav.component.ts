import { Component, OnInit } from '@angular/core';
import { ProfilePicService } from '../../services/profile-pic-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navOptions = {
    title: 'Your Financial Assistant',
    home: 'Home',
    calc: 'Calculator',
    budget: 'Budget',
    pp: 'Personal Planner'
  }

  firstName:string;
  lastName:string;
  profilePicture:string;
  setProfileImgStyle(name:string) {
    if (name) {
      let nameLength = name.length > 5 ? '20px' : '30px';
      return nameLength
    }
  }

  constructor(private retrieveProfile: ProfilePicService) { }

  ngOnInit() {

    this.retrieveProfile.getProfile().subscribe(data => {
      this.profilePicture = data.results[0].picture.medium
      this.firstName = data.results[0].name.first
      this.lastName = data.results[0].name.last
    })
    

  }

  

}
