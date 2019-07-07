import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Category} from '../_model/category-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Array<Category> = [];
  errMsg: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      res => {
        console.log(res);
        this.categories = res;
      },
      err => {
        this.errMsg = err.error;
      }
    );
  }
}
