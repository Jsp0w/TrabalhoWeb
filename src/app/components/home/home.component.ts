import { Component, OnInit } from '@angular/core';
import { FetchAPIService } from '../../services/fetch-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  dados : any;
  constructor(private FetchAPIService: FetchAPIService){}

  ngOnInit(){
    this.FetchAPIService.GitHub().then(resp=>{
      this.dados = resp.slice(0,4)
    })
  }
}
