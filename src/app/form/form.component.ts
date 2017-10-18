import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRegistration,Info }    from '../UserRegistration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
 model: UserRegistration;
 submitted: boolean;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() { this.submitted = true;
    console.log(this.model);
    this.registrationService.create(this.model);
   }

}