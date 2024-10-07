import { Component, Input } from '@angular/core';
import { ApiRecipeService } from '../services/api-recipe.service';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-recipes-published',
  templateUrl: './cards-recipes-published.component.html',
  styleUrl: './cards-recipes-published.component.css'
})
export class CardsRecipesPublishedComponent {
  @Input() titleRecipe: string = ''
  @Input() idRecipe: number = 0

  constructor(private _api: ApiRecipeService, private router: Router){}

  goToRecipeDetails(): void {
    this.router.navigate(['/seeInformationRecipe', this.idRecipe]);  
  }

  deleteRecipe(){
    this._api.deteleRecipe(this.idRecipe).subscribe(
      (data) => {
        Swal.fire({
          title: 'Éxito!',
          text: 'La receta se ha actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

}
