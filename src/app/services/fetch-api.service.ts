import { Inject, inject, Injectable, Optional } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class FetchAPIService {
  GitHub(user: string){
    return fetch(`https://api.github.com/users/${user}/repos`).then(response=>{
      return response.json()
    }).then(data=>{
      return data
    })
  }
}
