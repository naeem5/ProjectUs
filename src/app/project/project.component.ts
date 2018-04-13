import { ActivatedRoute,Router } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from './project.model';
import { Role } from './../../../interfaces';
import { Component, OnInit, Input, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  displayedColumns = ['no', 'name','status', 'milestone','language','amount', 'action'];
  dataSource = new MatTableDataSource<Project>();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.projectservice.getProjects().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    })
  }

  items: Observable<any[]>;
  subscription: Subscription;

  constructor(private projectservice: ProjectService, private router: Router, private route : ActivatedRoute) {

   }

   onRemove(prod) {
    console.log(prod);
  this.projectservice.onDelete(prod.prodid);
  }

  onEdit(prod){
    this.router.navigate(['./',prod.prodid,'edit'],{relativeTo: this.route});
  }

  ngOnInit() {
    this.items = this.projectservice.getProjects();   
  
  }

}

