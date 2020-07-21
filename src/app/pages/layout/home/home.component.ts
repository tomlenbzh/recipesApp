import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { RecipeModel } from '../../../models/recipe.model';
import { RecipesData } from 'src/app/data/recipes.data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipeList: Observable<RecipeModel[]>;

  constructor() { }

  ngOnInit(): void {
    this.recipeList = this.getAllRecipes();
  }

  private getAllRecipes(): Observable<RecipeModel[]> {
    return of(RecipesData);
  }
}
