import { Component } from '@angular/core';
import { FetchAPIService } from '../../services/fetch-api.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[
    {provide: 'url', useValue: 'https://api.github.com/users/Jsp0w/repos'}
  ]
})
export class HomeComponent {
  constructor(private FetchAPIService: FetchAPIService){
    let project = document.getElementsByClassName('projects')

    FetchAPIService.GitHub('Jsp0w').then((data: any)=>{

      data.forEach((element: any) => {
        const span = document.createElement('app-project')
        // span.append(element['name'])
        project[0].append(span)
      })

    })

    console.log(project)
    
  }
}
