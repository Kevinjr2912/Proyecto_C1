import { Component } from '@angular/core';
import { ApiRecipeService } from '../services/api-recipe.service';
import { IRecipeCreate } from '../interfaces/irecipe-create';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-recipe-page',
  templateUrl: './add-recipe-page.component.html',
  styleUrl: './add-recipe-page.component.css'
})

export class AddRecipePageComponent {

  constructor(private _api: ApiRecipeService) {}

  text_ingredient: string = '';
  timeInMinutes: string = ''
  sqlTime: string = ''

  recipeToAdd: IRecipeCreate = {
    id_person: "2",
    recipe: {
      name_recipe: "",
      description: "",
      preparation: "",
      number_portion: 0,
      time_duration: "",
      TypeDifficulty: {
        name_type_difficulty: "",
      },
      Ingredients: [] 
    }
  }

  sendRecipe () {
    const recipe = {
      id_person: "2",
      id_difficulty: this.convertDifficultyToNumber(this.recipeToAdd.recipe.TypeDifficulty.name_type_difficulty),
      name_recipe: this.recipeToAdd.recipe.name_recipe,
      number_portion: this.recipeToAdd.recipe.number_portion,
      description: this.recipeToAdd.recipe.description,
      preparation: this.recipeToAdd.recipe.preparation,
      time_duration: this.recipeToAdd.recipe.time_duration,
      ingredients: this.recipeToAdd.recipe.Ingredients
    }    


    this._api.createRecipe(recipe).subscribe(
      (response) => {
        console.log('Receta enviada exitosamente:', response);
        Swal.fire({
          title: 'Éxito!',
          text: 'La receta se ha actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      },
      (error) => {
        console.error('Error al enviar la receta:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrió un problema al actualizar la receta.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    )
  }

  updateIngredients() {
    this.recipeToAdd.recipe.Ingredients = this.text_ingredient
      .split(',')
      .map(ingredient => ({ name_ingredient: ingredient.trim() }));
  }

  convertToSQLTime() {
    const hours = Math.floor(parseInt(this.timeInMinutes) / 60);
    const minutes = parseInt(this.timeInMinutes) % 60;
    const seconds = 0; 

    this.recipeToAdd.recipe.time_duration = `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  convertDifficultyToNumber = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return '1';
      case 'Intermedio':
        return '2';
      case 'Difícil':
        return '3';
      default:
        return null;
    }
  }
}

