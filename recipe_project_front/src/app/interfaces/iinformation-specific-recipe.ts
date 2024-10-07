import { IIngredient } from "./iingredient";
import { ITypeDifficulty } from "./itype-difficulty";

export interface IInformationSpecificRecipe {
    name_recipe: string,
    description: string,
    preparation: string,
    time_duration: string,
    number_portion: number,
    TypeDifficulty: ITypeDifficulty,
    Ingredients: IIngredient[]
}


