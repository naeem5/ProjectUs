import { Subscription } from 'rxjs/Subscription';
import { ClientServie } from './../client.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Inject } from '@angular/core';
import 'rxjs/Rx';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import 'rxjs';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Client} from '../client.modal';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  data: Observable<Client>;
   id: string;
   editMode = false;
   client =  Client;
   
  firstname: string;
  lastname: string;
  emailclient: string;
  passwordclient: string;
  addressclient: string;
  roleclient: string;
  items: AngularFirestoreCollection<any> = this.pro.collection('client');
  datavalues = this.items.valueChanges();

  hide = true;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private subscription: Subscription;
  private item;
  constructor(private _formBuilder: FormBuilder, private pro: AngularFirestore,
              private route: ActivatedRoute, private clientservice: ClientServie) { 

  }

  onSubmit(){
    
    //this.clientservice.onAdd();
    //alert("Hello");
  }

  add(){
    this.items.add({
      fname: this.firstname,
      lname: this.lastname,
      cemail: this.emailclient,
      cpassword: this.passwordclient,
      caddress: this.addressclient,
      crole: this.roleclient,
    }).then((docRef) => {
      this.items.doc(docRef.id).update({
        prodid: docRef.id
      })
      window.confirm("SUbmitted");
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

    // this.route.params.subscribe(
    //   (params:Params)=>{
    // this.id = params['id'];
    // this.editMode = params['id'] != null;
    // this.initForm();
    //   })
  }
// private initForm(){

//   if(this.editMode){
//         let data = this.clientservice.getClient(this.id);
//         console.log(data);
//       }
// }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}

export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
