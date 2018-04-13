import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  displayedColumns = ['position', 'name', 'email', 'role'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  constructor() { }

  ngOnInit() {
  }
 
}

export interface Element {
  name: string;
  position: number;
  email: string;
  role: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Naeem', email: 'naeem@yahoo.com', role: 'Developer'},
  {position: 2, name: 'Sajid', email: 'sajid@gmail.com', role: 'PHP Developer'},
  {position: 3, name: 'Zeeshan', email: 'zee@yahoo.com', role: 'Frontend Developer'},
  {position: 4, name: 'Jawad', email: 'jawad@outlook.com', role: 'Game Developer'},
  {position: 5, name: 'Hussain', email: 'hussain@gmail.com', role: '.Net Developer'},
  {position: 6, name: 'Fahad', email: 'fahad@yahoo.com', role: 'Angular'},
  {position: 7, name: 'Ammad', email: 'ammad@yahoo.com', role: 'ASP.NET/MVC'},
];
