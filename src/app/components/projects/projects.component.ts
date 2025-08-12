import { Component, OnInit } from '@angular/core';
import { FetchAPIService } from '../../services/fetch-api.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit{

  dados2 : any;
  constructor(private FetchAPIService: FetchAPIService){}

  ngOnInit(){
    this.FetchAPIService.GitHub().then(resp=>{
      this.dados2 = resp
    })
  }
}

