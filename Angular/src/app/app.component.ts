import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  fullName: string;
  email: string;
  idAlfresco: string;
  router: Router;
  constructor(router: Router, private rest: RestService) {
    this.router = router;
    const response = this.rest.getAlfrescoUserInfo();
    response.subscribe(
      data => { console.log(JSON.stringify(data));
        console.log('User Info object' + data);
        console.log('User name: ' + data['entry']['firstName']);
        this.fullName = data['entry']['firstName'] + ' ' + data['entry']['lastName'];
        this.email = data['entry']['email'];
        this.idAlfresco = data['entry']['id'];
      } ,
      error => { console.log(error);  }
    );
  }
  logout() {
    this.router.navigateByUrl('/logout');
  }
}
