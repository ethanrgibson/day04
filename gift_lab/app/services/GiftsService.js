import { api } from "../utils/Axios.js"

class GiftsService {



  async getGifts() {

    const response = await api.get('api/gifts')
    console.log(response.data);

  }









}




export const giftsService = new GiftsService()