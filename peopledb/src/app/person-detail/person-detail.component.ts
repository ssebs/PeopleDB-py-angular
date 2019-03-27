import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: Person;

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
  }

}
