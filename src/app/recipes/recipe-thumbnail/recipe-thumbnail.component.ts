import { Component, Input, OnInit } from '@angular/core';
import RecipeThumbnail from '../recipeInterface';

@Component({
  selector: 'app-recipe-thumbnail',
  templateUrl: './recipe-thumbnail.component.html',
  styleUrls: ['./recipe-thumbnail.component.scss'],
})
export class RecipeThumbnailComponent implements OnInit {
  @Input('recipeThumbnail') recipe: RecipeThumbnail;

  constructor() {}

  ngOnInit(): void {}
}
