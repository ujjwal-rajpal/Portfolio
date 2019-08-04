import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { GoogleServiceService } from '../google-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
profile;

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    skypeId: new FormControl(''),
    comment: new FormControl(''),
  });
  constructor(private service : GoogleServiceService ) { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.profileForm.value);
    this.profile = {
      "entry.2005620554" : this.profileForm.value.name,
      "entry.1045781291" : this.profileForm.value.email,
      "entry.1166974658" : this.profileForm.value.phoneNumber
    }
    this.service.googleForm(this.profile).subscribe(msg=>{})
    console.log(this.profile);
  }


}
