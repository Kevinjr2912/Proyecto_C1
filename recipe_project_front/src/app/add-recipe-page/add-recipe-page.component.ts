import { Component } from '@angular/core';
import { IAboutInput } from '../interfaces/iabout-input';

@Component({
  selector: 'add-recipe-page',
  templateUrl: './add-recipe-page.component.html',
  styleUrl: './add-recipe-page.component.css'
})

export class AddRecipePageComponent {
  inputs: IAboutInput[] = [
    {
      referenceAction: 'Título de la receta: ',
      content: 'Título por el cual otros usuarios van a conoces tu receta'
    },
    {
      referenceAction: ' Acerca de la receta: ',
      content: 'Información relevante de la receta'
    }
  ]

  process: string[] = [
    'Ingredientes',
    'Instrucciones'
  ]
}



