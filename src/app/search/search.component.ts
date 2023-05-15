import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue:string = '';
  searchOp(data:Event){
    this.searchValue =(<HTMLInputElement>data.target).value;
  }
}
