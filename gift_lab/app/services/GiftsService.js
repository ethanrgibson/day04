import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {



  async getGifts() {

    const response = await api.get('api/gifts')
    console.log(response.data);
    const gifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = gifts

    console.log('got gitts', gifts);


  }









}




export const giftsService = new GiftsService()