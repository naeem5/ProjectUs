import { Client } from './../client.modal';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ClientServie } from './../client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  hide = true;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  items: AngularFirestoreCollection<any> = this.pro.collection('client');
  datavalues = this.items.valueChanges();

  constructor(private _formBuilder: FormBuilder, private pro: AngularFirestore,
    private clientservice: ClientServie, private route: ActivatedRoute, private router: Router) {
    
  }

  firstname: string;
  lastname: string;
  emailclient: string;
  addressclient: string;
  roleclient: string;

  updateClient(){
    
    this.items.doc(this.firstFormGroup.controls['prodid'].value).update({
      fname: this.firstFormGroup.controls['firstname'].value,
      lname: this.firstFormGroup.controls['lastname'].value,
      cemail: this.firstFormGroup.controls['emailclient'].value,
      caddress: this.firstFormGroup.controls['addressclient'].value,
      crole: this.firstFormGroup.controls['roleclient'].value,
    }).then(() => {
      console.log('Updated');
    })
  }

  btnClick= function () {
    this.router.navigate(['/client']);
}

bothFunctn(){
  this.updateClient()
  this.btnClick()
}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstname: ['Test', Validators.required],
      lastname: ['New test'],
      emailclient: [''],
      addressclient: [''],
      roleclient: [''],
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   addressclient: ['Test2', Validators.required],
    //   roleclient: [''],
    // });

    /////Client-Edit////
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      })
  }

  id: string;
  editMode = false;
  
  initForm() {
    if (this.editMode) {
      let items: any = this.clientservice.getClient(this.id)
        .then((res:Client)=>{
            //this.client = res;
            this.firstFormGroup = this._formBuilder.group({
              firstname:[res.fname],
              lastname:[res.lname],
              emailclient:[res.cemail],
              addressclient:[res.caddress],
              roleclient: [res.crole],
              prodid:[this.id]
            })
            // this.secondFormGroup = this._formBuilder.group({
            //   addressclient:[res.caddress],
            //   roleclient: [res.crole]
            // })
        });
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
