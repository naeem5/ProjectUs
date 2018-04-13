import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Params, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  items: AngularFirestoreCollection<any> = this.pro.collection('project');
  datavalues = this.items.valueChanges();

  constructor(private route: ActivatedRoute, private projectservice: ProjectService,
    private pro: AngularFirestore, private _formBuilder: FormBuilder) {

   }
   
  name: string;
  status: string;
  milestone: string;
  language: string;
    
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      name: ['Test', Validators.required],
      status: ['New test'],
      milestone: [''],
      language: [''],
      
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  updatePro(){
    this.items.doc(this.firstFormGroup.controls['prodid'].value).update({
      name: this.firstFormGroup.controls['name'].value,
      status: this.firstFormGroup.controls['status'].value,
      milestone: this.firstFormGroup.controls['milestone'].value,
      language: this.firstFormGroup.controls['language'].value
    }).then(() => {
      console.log('Updated');
    })

  }

  btnClick= function () {
    this.router.navigate(['/project']);
}

bothFunctn(){
  this.updatePro()
  this.btnClick()
}

  id: string;
  editMode = false;

  initForm(){
    if (this.editMode) {
      let items: any = this.projectservice.getEditProject(this.id)
        .then((res:Project)=>{
            //this.client = res;
            this.firstFormGroup = this._formBuilder.group({
              name:[res.name],
              status:[res.status],
              milestone:[res.milestone],
              language: [res.language],
              prodid:[this.id]
            })
        });
    }
  }

}
