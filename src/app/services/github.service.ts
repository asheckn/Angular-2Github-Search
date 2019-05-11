import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

@Injectable()
export class GithubService {

  private repos:any ={}

  constructor(private _http:Http){
    console.log('Github service started...')
  }

  getRepos(){
    return this._http.get('https://api.github.com/search/repositories?q='+this.repos)
                          .map(res => res.json())

  }

  updatesearch(repos:any){
    this.repos=repos
  }


}

