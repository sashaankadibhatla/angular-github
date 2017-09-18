import { Userdetails } from './userdetails';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Repodetails } from  './repodetails';
import 'rxjs/add/operator/map';

@Injectable()

export  class UsernameService{
    constructor(private http:Http){}
    private API_URL='https://api.github.com/users/';
    private keyword:string;
    private URL=this.API_URL;
    search(keyword): Observable<Userdetails>{
    return  this.http.get(this.URL + keyword)
    .map(response => response.json() as Userdetails);
}
    searchRepos(keyword): Observable<Repodetails[]>{
    return  this.http.get(this.URL + keyword + '/repos')
    .map(response => response.json() as Repodetails[]);
}
}
