import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
    console.log('[RECIPE]:', this.recipe);
  }

}
