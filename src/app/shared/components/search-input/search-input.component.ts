import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() onChange = new EventEmitter<string>();

  _searchInputValue: string = '';

  constructor() { }

  set searchInputValue(value: string) {
    this._searchInputValue = value;
    this.onChange.emit(value);
  }

  get searchInputValue(): string {
    return this._searchInputValue;
  }

  ngOnInit(): void {
  }

}
