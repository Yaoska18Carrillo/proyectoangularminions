import { ActivatedRoute } from '@angular/router';
import { Component} from '@angular/core';
import { MinionsService } from '../services/minions.service';
@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.css']
})
export class MinionComponent {
 minion: any={};//varian;e local

  constructor(private activedRoute:ActivatedRoute, private minionsService:MinionsService) {

  this.activedRoute.params.subscribe(params=>{
    console.log(params["id"]);
    
  this.minion=this.minionsService.getMinion(params["id"]);
  })
}
}
