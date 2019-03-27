import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../person.service';

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


  constructor(private fb: FormBuilder, private prsnSvc: PersonService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!window.confirm("Are you sure you want to submit?")) {
      return;
    }

    const first = this.personForm.controls.first.value;
    const last = this.personForm.controls.last.value;
    const email = this.personForm.controls.email.value;

    this.prsnSvc.createPerson(new Person(first, last, email))
      .subscribe(resp => {
        console.log(resp);
        // TODO: window.location = `/detail/${resp.id}`
      });
    ;

  }

}
