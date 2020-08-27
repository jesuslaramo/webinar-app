import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  constructor(private websiteService: WebsiteService) { }

  usersList: any;
  user: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.websiteService.getUsers().subscribe(res => {
      this.usersList = res['data'];
    }, err => {
      console.error(err);
    });
  }

  selectUser(id){
    this.websiteService.getUser(id).subscribe(res => {
      this.user = res['data']
    }, err => {
      console.error(err);
    })
  }
}
