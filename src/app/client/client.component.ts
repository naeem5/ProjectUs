import { ActivatedRoute,Router } from '@angular/router';
import { Role } from './../../../interfaces';
import { Component, OnInit, Input, Injectable, ViewChild } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {ClientServie} from './client.service';
import { Client} from './client.modal';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Injectable()
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  displayedColumns = ['no', 'fname', 'lname', 'cemail', 'crole', 'action'];
  dataSource = new MatTableDataSource<Client>();

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
    this.clientservice.getClients().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    })
  }

  //items : Client[];
  items: Observable<any[]>;

  constructor(private clientservice: ClientServie, private route : ActivatedRoute,
                  private router: Router) { 
    }

  onEdit(prod){
    this.router.navigate(['./',prod.prodid,'edit'],{relativeTo: this.route});
   
  }

  onRemove(prod) {
    console.log(prod);
    this.clientservice.onDelete(prod.prodid);
  }

  ngOnInit() { 
    this.items = this.clientservice.getClients();
    
  }
}

