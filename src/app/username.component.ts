import { Component,OnInit } from '@angular/core';
import { UsernameService} from './username.service';

@Component({
    selector:'app-username',
    templateUrl:'./username.component.html'
})

export class UsernameComponent implements OnInit{
    private keyword:string;
    searches :any;
constructor(private _usernameservice :UsernameService){}
    user_data: any;
    repo_data:any;
searchUsername(keyword:string){
        return this._usernameservice.search(keyword).subscribe(
            user_data=> {this.user_data = user_data; console.log(user_data)}
        )
    }
showRepos(keyword:string){
    return this._usernameservice.searchRepos(keyword).subscribe(
        repo_data=> {this.repo_data = repo_data; console.log(repo_data)}
    )
}
    ngOnInit(){
       
    }
    }