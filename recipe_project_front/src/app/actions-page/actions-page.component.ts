import { Component, OnInit } from '@angular/core';
import { ApiRecipeService } from '../services/api-recipe.service';
import { IInformationSpecificRecipe } from '../interfaces/iinformation-specific-recipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.css']
})
export class ActionsPageComponent implements OnInit {
  ingredientNames: string[] = [];

  process: string[] = [
    'Ingredientes',
    'Instrucciones'
  ]

  recipe: IInformationSpecificRecipe = {
    name_recipe: "",
    description: "",
    preparation: "",
    time_duration: "",
    number_portion: 0,
    TypeDifficulty : {
      name_type_difficulty: ""
    },
    Ingredients: []
  };

  constructor (private _apiRecipe: ApiRecipeService) {}

  ngOnInit(): void {
    this._apiRecipe.getinformationRecipe().subscribe(
      (response: IInformationSpecificRecipe) => {
        this.recipe = {
          name_recipe: response.name_recipe,
          description: response.description,
          preparation: response.preparation,
          time_duration: this.convertTimeToMinutes(response.time_duration),
          number_portion: response.number_portion,
          TypeDifficulty: response.TypeDifficulty,
          Ingredients: response.Ingredients
        };

        this.ingredientNames = this.recipe.Ingredients.map(ingredient => ingredient.name_ingredient);
      },
      error => console.error('Error fetching recipe:', error)
    );
  }

  updateRecipe(): void {
    const dataToUpdate = {
      newDataRecipe: {
        name_recipe: this.recipe.name_recipe,
        description: this.recipe.description,
        time_duration: this.formatTimeDuration(this.recipe.time_duration),
        id_difficulty: this.convertDifficultyToNumber(this.recipe.TypeDifficulty.name_type_difficulty),
        number_portion: this.recipe.number_portion,
        preparation: this.recipe.preparation,
      },
      newDataIngredients: this.recipe.Ingredients.map((ingredient, index) => ({
        name_ingredient: ingredient.name_ingredient,
        nameEdited: ingredient.name_ingredient || "", 
        previousName: this.ingredientNames[index] || "",
      })),
    };

    dataToUpdate.newDataIngredients.map(ingredient => {
      console.log(ingredient.name_ingredient, ingredient.previousName, ingredient.nameEdited)
    })

    this._apiRecipe.updateInformationRecipe(1, dataToUpdate).subscribe(
      response => {
        console.log('Receta actualizada:', response);
        Swal.fire({
          title: 'Éxito!',
          text: 'La receta se ha actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      },
      error => {
        console.error('Error al actualizar la receta:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrió un problema al actualizar la receta.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  convertTimeToMinutes(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes.toString();
  }

  formatTimeDuration(duration: string): string {
    const totalMinutes = parseInt(duration, 10);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    return `${this.padZero(hours)}:${this.padZero(minutes)}:00`;
  }
  
  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  convertDifficultyToNumber = (difficulty: string) => {
    switch (difficulty) {
        case 'Fácil':
            return 1;
        case 'Intermedio':
            return 2;
        case 'Difícil':
            return 3;
        default:
            return null;
    }
};

}
