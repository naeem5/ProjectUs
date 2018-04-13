import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm, FormGroupDirective} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';

//import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export class MyErrorStateMatcher implements ErrorStateMatcher {

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  fname: string;
  lname: string;
  email: string;
  role: string;
  password: string;
  items: AngularFirestoreCollection<any> = this.pro.collection('user');
  datavalues = this.items.valueChanges();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;
  constructor(private pro: AngularFirestore,private authService: AuthService) { 

  }

  submit(){
    this.items.add({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      password: this.password,
      role: this.role,
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
  }

  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
    
}
