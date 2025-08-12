import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ptbr = {
    textsList:['Home', 'Sobre mim', 'Projetos', 'Linkedin'],
    linksList:['.', './aboutme', './projects', 'https://br.linkedin.com/in/jo%C3%A3o-paulo-leires-lopes']
  }

  textsList = this.ptbr.textsList
  linksList = this.ptbr.linksList
  
  private activeRoute = inject(ActivatedRoute)

  constructor(private router: Router){
    let currentURL = this.router
    // console.log(currentURL)  
    // console.log(currentURL.url)
    // this.underlined(currentURL)
  }

  
  
  underlined(url:string){
    const item = document.getElementsByTagName('li')

    if(url == "/"){
      console.log('home')
      console.log(item[0])
      return
    }
    
    if(url == "/aboutme"){
      const img = document.getElementsByClassName('imagem')
      console.log(img[0])
      console.log('about me')
      console.log(item[1])
      return
    }
    
    if(url == "/projects"){
      console.log('projects')
      console.log(item[2])
      return
    }
    
    console.log(url)
  }
  
  darkmode(){
    document.getElementsByTagName('html')[0].classList.toggle('darkmode')
  }
}