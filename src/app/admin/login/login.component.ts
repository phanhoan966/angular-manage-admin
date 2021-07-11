import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Admin } from 'src/app/entity/admin.interface.js';
import '../../../scripts/js/my-login.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public entityAdmin: Admin = {
    id_admin: 1,
    username: 'string',
    password: 'string',
    email: 'string',
    phone: 'string',
    address: 'string',
    role_admin: 'string',
    status: 'string',
    img_path: 'string',
    create_user: 'string',
    create_time: 'string',
    update_user: 'string',
    update_time: 'string',
  };

  public profileForm = new FormGroup( {
    username: new FormControl(''),
    password: new FormControl('')
  } );

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.profileForm.value);
  }

}
