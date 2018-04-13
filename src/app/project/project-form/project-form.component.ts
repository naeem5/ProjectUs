import { Component, OnInit, Input } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  name: string;
  status: string;
  milestone: string;
  language: string;
  amount: number;
  description: string;
  startdate: string;
  enddate: string;
  items: AngularFirestoreCollection<any> = this.pro.collection('project');
  datavalues = this.items.valueChanges();
    

  hide = true;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private pro: AngularFirestore) { 

  }

  submit(){
    this.items.add({
      name: this.name,
      status: this.status,
      milestone: this.milestone,
      language: this.language,
      amount: this.amount,
      startdate: this.startdate,
      enddate: this.enddate
    }).then((docRef) => {
      this.items.doc(docRef.id).update({
        prodid: docRef.id
      })

    })
    .catch((err)  => {
      console.log(err);
    })
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
