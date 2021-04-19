import { Component, Input, OnInit } from '@angular/core';
import RecipeThumbnail from './recipeInterface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  @Input() recipeThumbnails: Array<RecipeThumbnail>;

  constructor() {}

  ngOnInit(): void {}
}
