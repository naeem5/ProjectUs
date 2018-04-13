import { ToggleService } from './../shared/toggle-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(private toggle:ToggleService) { 
    
  }
  toggleVal:boolean = true;

  ngOnInit() {
    /*
    this.toggle.toggleSelected.subscribe(toggle=>{
      console.log(this.toggle.getToggleVal())
    })*/
    
    this.toggle.toggleSelected.subscribe(
      (t:boolean)=>{
        console.log(t);
        this.toggleVal = t;
      }
    )
  }
  
  selectedToggle(){
    console.log(this.toggle.isOpen)
    console.log(this.toggleVal)
  }
  
}