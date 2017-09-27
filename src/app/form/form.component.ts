import { Component, OnInit } from '@angular/core';

import { UserRegistration }    from '../UserRegistration';
import { User } from '../user.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  model: userRegistration

  constructor(userRegistration: UserRegistration) { }

  ngOnInit() {
    model = new UserRegistration('john@gmail.com', 'John', 'Smith', '2400 Nueces St., Austin, TX 78705', 4, 8324449876);
    submitted = false;
  }

  onSubmit() { this.submitted = true;
    this.userRegistration.create(model)
   }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}