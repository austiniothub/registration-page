import { Component, OnInit } from '@angular/core';

import { UserRegistration }    from '../UserRegistration';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new UserRegistration(18, 'John', 'Smith', '2400 Nueces St., Austin, TX 78705', 4);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}