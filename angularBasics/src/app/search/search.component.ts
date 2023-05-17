import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchValue: string = '';

changeSearchValue(event: Event) {
this.searchValue = (event.target as HTMLInputElement).value;
}
}
