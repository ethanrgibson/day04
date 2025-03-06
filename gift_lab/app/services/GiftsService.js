import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {



  async getGifts() {

    const response = await api.get('api/gifts')
    const gifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = gifts


  }


  async openGift(giftId) {
    const giftData = { opened: true }
    const response = await api.put(`api/gifts/${giftId}`, giftData)
    console.log('opened gift', response.data)



  }










}




export const giftsService = new GiftsService()