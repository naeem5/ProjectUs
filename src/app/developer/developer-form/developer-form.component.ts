import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent implements OnInit {

  fname: string;
  lname: string;
  emaildev: string;
  passworddev: string;
  desgn: string;
  roledev: string;

  items: AngularFirestoreCollection<any> = this.dev.collection('developer');
  datavalues = this.items.valueChanges();

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dev: AngularFirestore) {

   }

   submit(){
    this.items.add({
      fname: this.fname,
      lname: this.lname,
      email: this.emaildev,
      password: this.passworddev,
      role: this.roledev,
    }).then((docRef) => {
      this.items.doc(docRef.id).update({
        prodid: docRef.id
      })
    })
      .catch((err) => {
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

  roles = ['.Net Developer', 'PHP Developer',
                'Angular 5', 'iOS Developer', 'Andriod Developer','Unity Developer'];

}
