import { Router, ActivatedRoute } from '@angular/router';
import { DeveloperService } from './developer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Role } from './../../../interfaces';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {Sort} from '@angular/material';
import { Developer } from './developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
 
  displayedColumns = ['no', 'fname', 'lname', 'email', 'role','action' ];
  dataSource = new MatTableDataSource<Developer>();

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
    this.developerservice.getDeveloper().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    })
  }

  items: Observable<any[]>;

  constructor(private developerservice: DeveloperService, private route : ActivatedRoute,
    private router: Router) { 
    
  }

  onEdit(prod){
    this.router.navigate(['./',prod.prodid,'edit'],{relativeTo: this.route});
    //this.clientservice.onUpdate(prod.prodid);
  }

  onRemove(prod) {
    console.log(prod);
    this.developerservice.onDelete(prod.prodid);
  }

  ngOnInit() {
    this.items = this.developerservice.getDeveloper();   
  }

}