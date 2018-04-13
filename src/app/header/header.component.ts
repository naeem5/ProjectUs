import { ToggleService } from './../shared/toggle-service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  watcher: Subscription;
  activeMediaQuery = "";

  isOpen = false;
  constructor(private authService: AuthService, private toggle:ToggleService) {
    
  }

  ontoggleOpen() {
    this.isOpen = !this.isOpen;
    //this.toggle.toggleSelected.emit(this.isOpen);
    this.toggle.emitToggle(this.isOpen)
  }
  
  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
  }

}

export class DialogContentExampleDialog {}
