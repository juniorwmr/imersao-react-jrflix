import { BACKEND_URL } from '../config/index';

const URL_CATEGORIES = `${BACKEND_URL}/categories`;

export default {

  async getCategories() {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (response) => {
        return await response.json();
      }).catch(err => {
        console.error(`Your request (GET) to ${URL_CATEGORIES} FAILED. \n\n` + err);
      });
  },

  async getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
      }).catch(err => {
        console.error(`Your request (GET) to ${URL_CATEGORIES}?_embed=videos FAILED. \n\n` + err);
      });
  }

}