import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {




  async createGift() {

  }




  async deleteGift(giftId) {
    const response = await api.delete(`api/gifts/${giftId}`)
    console.log(response.data)
    const giftIndex = AppState.gifts.findIndex(gifts => gifts.id == giftId)
    AppState.gifts.splice(giftIndex, 1)
  }



  async getGifts() {

    const response = await api.get('api/gifts')
    const gifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = gifts


  }


  async openGift(giftId) {
    const giftData = { opened: true }
    const response = await api.put(`api/gifts/${giftId}`, giftData)
    console.log('opened gift', response.data)
    const openedGift = new Gift(response.data)
    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
    AppState.gifts.splice(giftIndex, 1, openedGift)


  }










}




export const giftsService = new GiftsService()