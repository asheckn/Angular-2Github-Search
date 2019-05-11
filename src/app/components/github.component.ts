import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { map } from 'rxjs/operator/map';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
})


export class GithubComponent  {

  repos:any
  searchterm:any




  constructor(private _githubService:GithubService){
      this._githubService.getRepos().subscribe(repos => {
         this.repos = repos.items;
         console.log(this.repos);
      })

  }

  search(){
      this._githubService.updatesearch(this.searchterm)

      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos.items;
        console.log(this.repos);
     })
  }

  useRepos(reposd:any){
    return reposd
  }


}
