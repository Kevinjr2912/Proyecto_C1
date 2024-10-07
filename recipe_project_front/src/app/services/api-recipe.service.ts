import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformationSpecificRecipe } from '../interfaces/iinformation-specific-recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiRecipeService {

  private urlAPI = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  public createRecipe(recipe: {}): Observable<void> {
    return this.http.post<void>(`${this.urlAPI}/createRecipe`, recipe);
  }

  public getinformationRecipe(id: number): Observable<IInformationSpecificRecipe> {
    return this.http.post<IInformationSpecificRecipe>(`${this.urlAPI}/getRecipe/${id}`, {}); 
  }

  public getRecipesPublished (): Observable<any> {
    return this.http.post<any>(`${this.urlAPI}/getRecipesPublished/2)`, {});
  }

  public updateInformationRecipe(id: number, dataToUpdate: {}): Observable<any> {
    return this.http.put<any>(`${this.urlAPI}/updateRecipe/${id}`, dataToUpdate);
  }

  public deteleRecipe (id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/deleteRecipe/${id}`,{});
  }
}
