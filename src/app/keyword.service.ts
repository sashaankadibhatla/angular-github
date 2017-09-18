import { Injectable } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import { Keyworddetails } from './keyworddetails';
import 'rxjs/add/operator/map';

@Injectable()

export class KeywordService{
    constructor(private http:Http){}
    private keyword:string;
    private URL:string;
    private API_URL='https://api.github.com/search/repositories?q=+language:'
    searchKeyword(keyword:string):Observable<Keyworddetails[]>{
    this.URL=this.API_URL+keyword+'&sort=stars&order=desc';
    return  this.http.get(this.URL)
    .map(response => response.json() as Keyworddetails[]);
    }
}