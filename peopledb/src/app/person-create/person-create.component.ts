import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  personForm = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    email: ['', Validators.required]
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    const first = this.personForm.controls.first.value;
    const last = this.personForm.controls.last.value;
    const email = this.personForm.controls.email.value;

    const newPerson: Person = new Person(first, last, email);



    console.log(newPerson);
  }

}
