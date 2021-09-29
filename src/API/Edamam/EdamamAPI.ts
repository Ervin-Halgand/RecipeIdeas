import axios, { AxiosInstance, AxiosResponse } from "axios";

import { CuisineType, Diet, EdamamResponse, MealTypes } from "./RecipesModel";

class EdamamAPI {
  private _axios: AxiosInstance;

  constructor() {
    this._axios = axios.create({
      baseURL: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=`,
      timeout: 10000,
      headers: {
        AccessControlAllowOrigin: "*",
        Accept: "application/json",
      },
    });
  }

  async getRecipes(
    query: string,
    diet?: Diet,
    cuisineType?: CuisineType,
    mealType?: MealTypes
  ) {
    return await this._axios(
      `${query}${
        diet !== undefined && diet?.length > 0
          ? `&diet=${diet.replaceAll(" ", "%20")}`
          : ""
      }${
        cuisineType !== undefined && cuisineType?.length > 0
          ? `&cuisineType=${cuisineType.replaceAll(" ", "%20")}`
          : ""
      }${
        mealType !== undefined && mealType?.length > 0
          ? `&mealType=${mealType.replaceAll(" ", "%20")}`
          : ""
      }`
    ).then((res: AxiosResponse<EdamamResponse>) => res.data);
  }

  async getNextPageOfRecipes(url: string) {
    return axios
      .get(url)
      .then((res: AxiosResponse<EdamamResponse>) => res.data);
  }
}

export default EdamamAPI;
