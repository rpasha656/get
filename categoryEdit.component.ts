import {Component} from '@angular/core';


@Component({
    selector: 'as-edit-category',
    template: `
    <ul >
        <li *ngFor="let category of categoryData; let i=index;">
         {{category}}
        </li>
      </ul> 
      <input type='text' [(ngModel)]="newCategory">
      <div class='btn primary' (click)='addCategory()'>Add Category</div>
  `
})
export class CategoryEdit {

    categoryData = [];
    newCategory: string;
    constructor() {
        console.log(this.categoryData);
        this.newCategory = '';
    }

    editCategory(event, index) {
        console.log(event.target.outerText);
        this.categoryData[index] = event.target.outerText;
    }

    addCategory() {
        console.log(this.newCategory);
        if (this.newCategory.length > 0) {
            this.categoryData.push(this.newCategory);
            this.newCategory = '';
        }
    }

    onRowClick(event, id) {
        console.log(event.target.outerText, id);
    }
}
