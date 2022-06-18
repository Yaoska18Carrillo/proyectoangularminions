import { Component, OnInit } from '@angular/core';
import { MinionsService, Minion } from '../services/minions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html',
  styleUrls: ['./minions.component.css']
})

export class MinionsComponent implements OnInit {
  minions: Minion[] =[];
  constructor(private minionsService: MinionsService, private router: Router) {
    
   }

  ngOnInit() {
   
   this.minions = this.minionsService.getMinions(); 
      console.log(this.minions); 
       
  }
  seeMinion(idx: number) { 
    this.router.navigate(['/minion', idx]); } 
}



  
