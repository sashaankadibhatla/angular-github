import { Component,OnInit } from '@angular/core';
import { KeywordService} from './keyword.service';

@Component({
    selector:'app-keyword',
    templateUrl:'./keyword.component.html'
})

export class KeywordComponent{
    private keyword:string;
    constructor (private _keywordservice:KeywordService){}
    keyword_data:any[];
    searchKeywordTechnology(keyword:string){
        return this._keywordservice.searchKeyword(keyword).subscribe(
            keyword_data=> {this.keyword_data = keyword_data; console.log(keyword_data)}
        )
    }

ngOnInit()
{

}
}