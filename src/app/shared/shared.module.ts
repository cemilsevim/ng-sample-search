import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ClientListItemComponent } from './components/client-list-item/client-list-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchInputComponent, ClientListComponent, ClientListItemComponent, ClientListComponent],
  imports: [CommonModule, MatInputModule, MatIconModule, FormsModule],
  exports: [SearchInputComponent, ClientListComponent, ClientListItemComponent]
})
export class SharedModule {} 
