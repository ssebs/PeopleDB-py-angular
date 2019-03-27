import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Person } from '../person';
import { ApiResponse } from '../api-response';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: Person;
  personId: number;

  personForm = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    email: ['', Validators.required]
  });


  constructor(
    private fb: FormBuilder,
    private prsnSvc: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // get person from url
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.prsnSvc.getPerson(+params.get('id')).subscribe(pers => {
          if (Object.keys(pers).length === 0) {
            // window.alert("No user with that id!");
            this.router.navigateByUrl("/home");
          }
          this.personId = +params.get('id');
          this.person = pers;
          this.personForm.controls.first.setValue(pers.first);
          this.personForm.controls.last.setValue(pers.last);
          this.personForm.controls.email.setValue(pers.email);
        })
    );
  }

  onSubmit() {
    if (!window.confirm("Are you sure you want to submit?")) {
      return;
    }

    this.person.first = this.personForm.controls.first.value;
    this.person.last = this.personForm.controls.last.value;
    this.person.email = this.personForm.controls.email.value;
    console.log(this.person);

    this.prsnSvc.updatePerson(this.person, this.personId)
      .subscribe((resp: ApiResponse) => {
        console.log(resp);
        if (resp.status === "OK") {
          window.alert("Updated!");
        }
      });

  } // onSubmit()

  onDelete() {
    if (!window.confirm("Are you sure you want to delete this person?")) {
      return;
    }
    if (!window.confirm("Are you REALLY sure?")) {
      return;
    }

    // console.log(`Deleting #${this.personId}`);
    this.prsnSvc.deletePerson(this.personId)
    .subscribe((resp: ApiResponse) => {
      console.log(resp);
      // if (resp.status === "OK") {
      //   window.alert("Updated!");
      // }
    });


  } // onDelete()

}
