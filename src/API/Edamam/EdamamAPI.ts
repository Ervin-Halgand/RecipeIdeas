import axios, { AxiosInstance, AxiosResponse } from "axios";

import { EdamamResponse } from "./RecipesModel";

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

  async getRecipes(query: string) {
    return await this._axios(query).then(
      (res: AxiosResponse<EdamamResponse>) => res.data.hits
    );
  }
}

export default EdamamAPI;
