import {Component} from '@angular/core';
import {RestService} from '../service/rest.service';
import {UserAlfresco} from './userAlfresco.model';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  valuesFirstName = '';
  valuesLastName = '';
  valuesID = '';
  valuesEmail = '';
  userAlfresco: UserAlfresco = new UserAlfresco();
  newUserAlfresco: UserAlfresco = new UserAlfresco();
  private data: object;
  constructor(private rest: RestService) { console.log('UserComonent');
    this.rest.testService();
    const response = this.rest.getAlfrescoUserInfo();
    response.subscribe(
      data => { console.log(JSON.stringify(data));
        console.log('User Info object' + data);
        console.log('User name: ' + data['entry']['firstName']);
        this.data = data;
        this.userAlfresco.id = data['entry']['id'];
        this.newUserAlfresco.id = data['entry']['id'];
        this.userAlfresco.firstName = data['entry']['firstName'];
        this.newUserAlfresco.firstName = data['entry']['firstName'];
        this.userAlfresco.lastname = data['entry']['lastName'];
        this.newUserAlfresco.lastname = data['entry']['lastName'];
        this.userAlfresco.email = data['entry']['email'];
        this.newUserAlfresco.email = data['entry']['email'];
      } ,
      error => { console.log(error);  }
    );
  }
  getData() {
    return this.data;
  }
  onKey(event: any) { // without type info
   /* if ( this.userAlfresco.firstName === this.newUserAlfresco.firstName) {
      this.values = '';
    }  else {
      this.values = 'Old name: ' + this.userAlfresco.firstName + ' New Name: ' + this.newUserAlfresco.firstName;
    }*/
    if ( this.userAlfresco === this.newUserAlfresco) {
      console.log('Object is equal');
      this.valuesFirstName = '';
    } else {
      console.log('New User has new attributes');
    }
      if ( this.userAlfresco.firstName !== this.newUserAlfresco.firstName) {
        this.valuesFirstName = 'Old name: ' + this.userAlfresco.firstName + ' New Name: ' + this.newUserAlfresco.firstName;
      } else {
        this.valuesFirstName = '';
      }
      if ( this.userAlfresco.email !== this.newUserAlfresco.email) {
        this.valuesEmail = 'Old email: ' + this.userAlfresco.email + ' New email: ' + this.newUserAlfresco.email;
      } else {
        this.valuesEmail = '';
      }
      if ( this.userAlfresco.id !== this.newUserAlfresco.id) {
        this.valuesID = 'Old ID: ' + this.userAlfresco.id + ' New ID: ' + this.newUserAlfresco.id + '\nPAY ATTENTION!!! ' +
          'IF YOU CHANGE ID, YOU ARE USED NEW ID TO LOG IN!!! ';
      } else {
        this.valuesID = '';
      }
      if ( this.userAlfresco.lastname !== this.newUserAlfresco.lastname) {
        this.valuesLastName = 'Old LastName: ' + this.userAlfresco.lastname + ' New LastName: ' + this.newUserAlfresco.lastname;
      } else {
        this.valuesLastName = '';
      }
  }
  cancelChanges() {
    this.newUserAlfresco.id = this.userAlfresco.id;
    this.newUserAlfresco.firstName =  this.userAlfresco.firstName;
    this.newUserAlfresco.lastname = this.userAlfresco.lastname ;
    this.newUserAlfresco.email = this.userAlfresco.email ;
    this.valuesLastName = '' ; this.valuesID = ''; this.valuesEmail = '';  this.valuesFirstName = '';
  }
  saveChanges(form: NgForm) {
    if (form.valid) {
      console.log('Prepare rest to save user information');
      console.log('JSON: ' + JSON.stringify(this.newUserAlfresco));
      if (this.newUserAlfresco.lastname !== this.userAlfresco.lastname
        || this.newUserAlfresco.firstName !== this.userAlfresco.firstName
        || this.newUserAlfresco.email !== this.userAlfresco.email) {
        this.rest.updateAlfrescoUserInformation(JSON.stringify(this.newUserAlfresco));
      }
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${thing}`);
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least
                            ${state.errors['minlength'].requiredLength}
                            characters`);
            break;
          case 'pattern':
            messages.push(`The ${thing} contains
                             illegal characters`);
            break;
          case 'email':
            messages.push(`The ${thing} is NOT an email`);
            break;
        }
      }
    }
    return messages;
  }
  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {   this.getValidationMessages(form.controls[k], k)
      .forEach(m => messages.push(m));
    });
    return messages;
  }

}
