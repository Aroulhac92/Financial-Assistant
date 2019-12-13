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
  smallerFont:object; /* For if I need to implement functionality for smaller font */

  constructor(private retrieveProfile: ProfilePicService) { }

  ngOnInit() {

    this.retrieveProfile.getProfile().subscribe(data => {
      this.profilePicture = data.results[0].picture.medium
      this.firstName = data.results[0].name.first
      this.lastName = data.results[0].name.last
    })
    

  }

  

}
