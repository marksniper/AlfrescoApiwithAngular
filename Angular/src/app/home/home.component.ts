import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Demo Rest';
  data: string;
  id: string;

  constructor(private http: HttpClient, private router: Router) { http.get('resource').subscribe(
    data => {
      console.log(data);
      this.data = data['data'];
      this.id = data['id'];
      console.log('data: ' + this.data);
      console.log('id: ' + this.id);
    },
    err => {
      console.log('Error occured.');
    });}
  userInfo() {
    this.router.navigateByUrl('/user');
  }
}
