import { Developer } from './../developer.model';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {

  hide = true;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  items: AngularFirestoreCollection<any> = this.pro.collection('developer');
  datavalues = this.items.valueChanges();

  constructor(private route: ActivatedRoute, private developerservice: DeveloperService,
                private pro: AngularFirestore, private _formBuilder: FormBuilder) {

      }

  name: string;
  status: string;
  milestone: string;
  language: string;
  
  updateDev(){
    this.items.doc(this.firstFormGroup.controls['prodid'].value).update({
      fname: this.firstFormGroup.controls['firstname'].value,
      lname: this.firstFormGroup.controls['lastname'].value,
      email: this.firstFormGroup.controls['pemail'].value,
      role: this.firstFormGroup.controls['prole'].value
    }).then(() => {
      console.log('Updated');
    })

  }

  btnClick= function () {
    this.router.navigate(['/developer']);
}

bothFunctn(){
  this.updateDev()
  this.btnClick()
}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstname: ['Test', Validators.required],
      lastname: ['New test'],
      pemail: [''],
      prole: [''],
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      })
  }


  id: string;
  editMode = false;  

  initForm() {
    if (this.editMode) {
      let items: any = this.developerservice.getEditDeveloper(this.id)
        .then((res:Developer)=>{
            //this.client = res;
            this.firstFormGroup = this._formBuilder.group({
              firstname:[res.fname],
              lastname:[res.lname],
              pemail:[res.email],
              prole: [res.role],
              prodid:[this.id]
            })
        });
    }
  }

}
