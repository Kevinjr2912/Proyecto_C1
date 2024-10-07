import { Component, OnInit } from '@angular/core';
import { ApiRecipeService } from '../services/api-recipe.service';

@Component({
  selector: 'app-see-published-recipes-page',
  templateUrl: './see-published-recipes-page.component.html',
  styleUrl: './see-published-recipes-page.component.css'
})
export class SeePublishedRecipesPageComponent implements OnInit {
  recipes: any[] = []

  constructor(private _apiService: ApiRecipeService) {}

  ngOnInit(): void {
    this._apiService.getRecipesPublished().subscribe(
      (data) => {
        this.recipes = data.Recipes;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
