import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RecipeCardComponent
  ],
  entryComponents: [
    RecipeCardComponent
  ]
})
export class SharedModule { }
